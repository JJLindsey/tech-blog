const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model { }

//define table columns and config
User.init(
    {
        //id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //no duplicate email values in table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //password length
                len: [8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;