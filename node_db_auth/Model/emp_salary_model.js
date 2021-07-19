module.exports = (sequelize, Sequelize) => {
  const EMP_department = sequelize.define(
    "employee_salary",
    {
      emp_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: "employee_details",
          key: "emp_id",
        },
      },
      startdate: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      enddate: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return EMP_department;
};
