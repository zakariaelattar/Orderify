module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("forms", {
      active:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      htmlCode:{
          type: Sequelize.BLOB('long'),
          defaultValue:false

      }


    });
  
    return Form;
  };