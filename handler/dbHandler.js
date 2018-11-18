require('mysql2')
const Sequelize = require('sequelize')

const dbPros = require('./dbPros');

const sequelize = new Sequelize(dbPros.database, dbPros.username, dbPros.password, {
    host: dbPros.host,
    port: dbPros.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        charset: "utf8mb4",
    },
    define: {
        charset: 'utf8mb4'
    },
    logging: false
});

/*sequelize.sync({force: true})*/

const DanMu = sequelize.define('DanMu', {
    liveType: Sequelize.STRING,
    roomUrl: Sequelize.STRING,
    roomId: Sequelize.STRING,
    danMu: Sequelize.STRING,
    usrUid: Sequelize.BIGINT,
    usrNickName: Sequelize.STRING,
}, {
    tableName: 'dan_mu',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    freezeTableName: true,
    timestamps: false
});

sequelize.query('set names utf8mb4;')

module.exports = (danMuInfo) => {
    if (danMuInfo == null || danMuInfo.danMu == null || '' === danMuInfo.danMu)
        return
    DanMu
        .create({
            liveType: danMuInfo.liveType,
            roomUrl: danMuInfo.roomUrl,
            roomId: danMuInfo.roomId.toString(),
            danMu: danMuInfo.danMu,
            usrUid: danMuInfo.usrUid,
            usrNickName: danMuInfo.usrNickName,
        })
        .then(res => console.log(`successfully insert ${res.danMu} ${res.usrNickName}`))
        .catch(err => console.error(`error insert ${danMuInfo.danMu} ${danMuInfo.usrNickName} : ${err.message}`))
}
