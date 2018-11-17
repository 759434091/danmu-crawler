require('mysql2')
const Sequelize = require('sequelize')

const dbPros = {
    host: '118.126.111.189',
    database: 'dan_mu_sys',
    username: 'root',
    password: '13318318260',
    port: 3306
};

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
    lTid: Sequelize.BIGINT,
    lSid: Sequelize.BIGINT,
    lPid: Sequelize.BIGINT,
    iTermType: Sequelize.INTEGER,
    iType: Sequelize.INTEGER,
    sContent: Sequelize.STRING,
    sIconUrl: Sequelize.STRING,
    iShowMode: Sequelize.INTEGER,
    usrLUid: Sequelize.BIGINT,
    usrImid: Sequelize.BIGINT,
    usrSNickName: Sequelize.STRING,
    usrIGender: Sequelize.INTEGER,
    usrSAvatarUrl: Sequelize.STRING,
    usrNobleLevel: Sequelize.INTEGER,
}, {
    tableName: 'dan_mu',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    freezeTableName: true,
    timestamps: false
});

sequelize.query('set names utf8mb4;')

module.exports = (messageNotice) => {
    if (messageNotice == null || messageNotice.sContent == null || '' === messageNotice.sContent)
        return
    DanMu
        .create({
            lTid: messageNotice.lTid,
            lSid: messageNotice.lSid,
            lPid: messageNotice.lPid,
            iTermType: messageNotice.iTermType,
            iType: messageNotice.iType,
            sContent: messageNotice.sContent,
            sIconUrl: messageNotice.sIconUrl,
            iShowMode: messageNotice.iShowMode,
            usrLUid: messageNotice.tUserInfo.lUid,
            usrImid: messageNotice.tUserInfo.lImid,
            usrSNickName: messageNotice.tUserInfo.sNickName,
            usrIGender: messageNotice.tUserInfo.iGender,
            usrSAvatarUrl: messageNotice.tUserInfo.sAvatarUrl,
            usrNobleLevel: messageNotice.tUserInfo.iNobleLevel
        })
        .then(danMu => console.log(`successfully insert ${danMu.sContent} ${danMu.usrSNickName}`))
        .catch(err => console.error(`error insert ${messageNotice.sContent} ${messageNotice.tUserInfo.sNickName} : ${err.message}`))
}
