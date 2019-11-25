module.exports = (sequelize, DataTypes) => {

  const Task = sequelize.define('Tasks', {
    customer_first_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    personnel_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    personnel_other_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    agentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assigned: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    in_progress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deferred: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    splash_page: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mpesa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    autoplay: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });



  Task.tasks = async () => {
    return await Task.findAll();
  };

  return Task;
};
