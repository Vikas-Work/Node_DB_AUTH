var express = require('express');

var approuter = express.Router();
var usercontroller = require('./Comtroller');
const { user } = require('./db');

const passport = require('passport');


approuter.post('/addusers',usercontroller.create);
approuter.post('/role',usercontroller.role);
approuter.post('/emp',usercontroller.employee_details);
approuter.post('/emp_dep',usercontroller.emp_department);
approuter.post('/emp_salary',usercontroller.Emp_salary);
approuter.get('/users_all',usercontroller.findallusers);
approuter.get('/roles_all',usercontroller.findallroles);
approuter.get('/emp_all',usercontroller.findallemp);
approuter.get('/emp_dep_all',usercontroller.findallemp_department);
approuter.get('/emp_sal_all',usercontroller.findallemp_salaries);
approuter.get('/users/:id',usercontroller.getuser);
approuter.put('/users/update/:id',usercontroller.updateuser);
approuter.delete('/users/delete/:id',usercontroller.deleteuser);

///register usr api 


approuter.post('/register/user',usercontroller.register_user);
//login user api 

approuter.post('/login',usercontroller.login);

approuter.post('/register/user_file',usercontroller.register_user_file);

const verfiytoken = require('./validator/JWTverfiytoken,');

approuter.get('/find',verfiytoken.verfiytoken,usercontroller.findallldetails)





module.exports =approuter;