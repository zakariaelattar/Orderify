module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shops", {
      name: {
        type: Sequelize.STRING
      },
     

    });
  
    return Shop;
  };