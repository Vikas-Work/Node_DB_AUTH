const joi = require('@hapi/joi');

const authuser = joi.object({
    role_id:joi.number().required(),
    user_name:joi.string().lowercase().required(),
    user_id:joi.number().required()
})

const auth_employee_details = joi.object({
    user_id:joi.number().required(),
    emp_id:joi.number().required(),
    country: joi.string().required(),
    state:joi.string().required(),
    department:joi.string().required()
})

module.exports = {
    authuser,
    auth_employee_details
}