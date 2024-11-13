const { Model, DataTypes } = require('sequelize');
const { Op } = require('sequelize');

class Students extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                sid: {
                    type: DataTypes.BIGINT,
                    allowNull: false,
                },
                firstname: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    validate: {
                        len: [1, 100], 
                        isAlpha: true, 
                    },
                },
                lastname: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    validate: {
                        len: [1, 100], 
                        isAlpha: true, 
                    },
                },
                dni: {
                    type: DataTypes.BIGINT,
                    allowNull: false,
                    validate: {
                        isNumeric: true, 
                        len: [6, 9], 
                    },
                },
                email: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    validate: {
                        len: [1, 100], 
                        isEmail: true, 
                    },
                },
                deleted: {
                    type: DataTypes.TINYINT,
                    defaultValue: 0,
                    validate: {
                        isIn: [[0, 1]], 
                    },
                },
            },
            {
                sequelize,
                modelName: 'students',
                timestamps: true, 
            }
        );

        return this;
    }

    static async getNextSid() {
        const lastStudent = await this.findOne({
            order: [['sid', 'DESC']],
            where: { deleted: 0 },
        });
        return lastStudent ? lastStudent.sid + 1 : 1;
    }

    static async getAll(search, currentPage, pageSize) {
        const offset = (currentPage - 1) * pageSize;
        return await this.findAndCountAll({
            where: {
                deleted: 0,
                [Op.or]: [
                    { lastname: { [Op.substring]: search } },
                ],
            },
            limit: pageSize,
            offset,
        });
    }
}

module.exports = Students;
