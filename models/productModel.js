const {DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbMySql')

const Product = sequelize.define(
    'Product',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        p_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        p_desc:{
            type: DataTypes.STRING,
            allowNull : true,
            defaultValue : "demo description"
        },
        p_qty:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        p_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
);

(async ()=> {
    try{
        await Product.sync({force: true});
        console.log('The table for the user model was just (re) created!');
    } catch(error){
        console.log("Error in synchronizing table",error.message)
    }
})();

module.exports = Product