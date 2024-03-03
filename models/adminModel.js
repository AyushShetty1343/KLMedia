module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admin", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phno: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        }

    }, {
        timestamps: false
    })
    return Admin

}