module.exports  = (sequelize,Sequelize)=>{
    const User = sequelize.define('users',{
        user_id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        role_id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            references: {
                model:"Roles",
                key: 'role_id'
            }
        },
        user_name:{
            type:Sequelize.STRING,
            allowNULL:false
        },


    },{
        timestamps: false,
    })
    return User;
}









