
// import library
require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');

// mengambil data dari file .env
const { DB_USER, DB_PASS, DB_HOST, DB_DIALECT, DB_NAME } = process.env;

// inisialisasi sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

// inisialisasi model
class Products extends Model { }

// mendefinisikan atribut
Products.init({
    id_product: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING, allowNull: false },
    harga: { type: DataTypes.INTEGER, allowNull: false },
    stok: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, tableName: "tb_products" })

// pada saat pertama kali run, untuk mensingkronkan table
// Products.sync({ force: true })

module.exports = Products;