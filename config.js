var config = {
  dbserver: {},
  app: {
    mode: 'development' //production or development
  }
};

//Database config
config.dbserver.userName = "";
config.dbserver.password = "";
config.dbserver.dbName = "";
config.dbserver.ip = "";//ip format is <HOST_IP>:<PORT>

//App config
config.app.host = 'localhost';
config.app.port = 4000;//must be integer

module.exports = config;