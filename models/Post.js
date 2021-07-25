const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 250]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //date created
        date_created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        //comments -option
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 200]
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
