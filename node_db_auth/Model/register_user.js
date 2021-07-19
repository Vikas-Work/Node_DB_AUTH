module.exports = (sequelize,Sequelize)=>{
    const register_user_file1 = sequelize.define('register_user_file1',{
        class:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        class_id:{
            type:Sequelize.INTEGER,
            PrimaryKey:true,
            allowNULL:false,
        },
        section:{
            type:Sequelize.STRING,
            allowNULL:false
        }
    },{
        timestamps:false
    })
    return register_user_file1;
}