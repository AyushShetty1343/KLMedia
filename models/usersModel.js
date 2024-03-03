
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        // userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoIncremenet: true,
        //     primaryKey: true
        // },
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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User

}