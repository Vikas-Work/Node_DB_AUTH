module.exports = (sequelize,Sequelize)=>{
    const Roles  = sequelize.define('Roles',{
        role_id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        role_name:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
      
    },{
        timestamps: false,
    }
    )
    return Roles;
}

