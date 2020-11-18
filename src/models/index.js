// const config = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   config.DB,  
//   config.USER,
//   config.PASSWORD,
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     operatorsAliases: false,

//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle
//     }
//   }
// );

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.user = require("./user.model.js")(sequelize, Sequelize);
// // db.role = require("./role.model")(sequelize, Sequelize);
// // db.template = require("./template.model")(sequelize,Sequelize);
// // db.category_template = require("./category_template.model")(sequelize,Sequelize);
// // db.domaine = require('./domaines.model')(sequelize,Sequelize);
// // db.c_history = require('./connection_history.model')(sequelize,Sequelize);
// // db.pack = require('./pack.model')(sequelize,Sequelize);
// // db.payement = require('./payement.model')(sequelize,Sequelize);
// // db.subscription = require('./subscription.model')(sequelize,Sequelize);
// // db.project = require('./project.model')(sequelize,Sequelize);
// // db.user_settings = require('./user_settings.model')(sequelize,Sequelize);


// // db.role.belongsToMany(db.user, {
// //   through: "user_roles",
// //   foreignKey: "roleId",
// //   otherKey: "userId"
// // });
// // db.user.belongsToMany(db.role, {
// //   through: "user_roles",
// //   foreignKey: "userId",
// //   otherKey: "roleId"
// // });
// // db.template.belongsToMany(db.user, {
// //   through: "user_templates",
// //   foreignKey: "templateId",
// //   otherKey: "userId"
// // });
// // db.user.belongsToMany(db.template, {
// //   through: "user_templates",
// //   foreignKey: "userId",
// //   otherKey: "templateId"
// // });
// // // domaines of a user
// // db.user.hasMany(db.domaine);
// // db.domaine.belongsTo(db.user);
// // // connection history of user
// // db.user.hasMany(db.c_history);
// // db.c_history.belongsTo(db.user);

// // db.category_template.hasMany(db.template);
// // db.template.belongsTo(db.category_template);
// // // Subscription
// // db.pack.hasMany(db.subscription);
// // db.subscription.belongsTo(db.pack);

// // db.user.hasMany(db.subscription);
// // db.subscription.belongsTo(db.user);
// // // Payement
// // db.user.hasMany(db.payement);
// // db.payement.belongsTo(db.user);
// // // Project
// // db.user.hasMany(db.project);
// // db.project.belongsTo(db.user);

// // db.ROLES = ["user", "admin", "moderator"];

// module.exports = db;