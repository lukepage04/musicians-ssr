"use strict";

const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname, "db.sqlite"),
});

const Musician = sequelize.define("Musician", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	instrument: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = exports = { sequelize, Musician };
