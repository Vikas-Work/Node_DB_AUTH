module.exports = (sequelize, Sequelize) => {
  const Emp = sequelize.define(
    "employee_details",
    {
      user_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        onDelete: 'CASCADE',
        onUpdate:'CASCADE', 
        references: {
          model: "users",
          key: "user_id",
         
        },
      },
      emp_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        primaryKey: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      department: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Emp;
};
