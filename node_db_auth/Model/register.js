module.exports = (sequelize,Sequelize)=>{
    const register_user =  sequelize.define( 'register_user',{
        id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            autoIncrement:true,
            primaryKey:true
        },
        email:{
            type:Sequelize.STRING,
            allowNULL:false,   
        },
        name:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        contact:{
            type:Sequelize.INTEGER,
            allowNULL:false
        },
        password:{
            type:Sequelize.STRING,
            allowNULL:false
        }   
},
    {
        timestamps:false,
    },
)
    return register_user;
}