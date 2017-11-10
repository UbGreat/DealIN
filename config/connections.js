/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
    someMysqlServer: {
      adapter: 'sails-mysql',
      host: 'localhost',
      user: 'root', //optional
      password: '', //optional
      database: 'dealIN' //optional
  },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // },

  firebase: {
    adapter: 'sails-firebase',

    credential: {
      "type": "service_account",
      "project_id": "testproject-1e497",
      "private_key_id": "f58369bc07949c6d3211bbea39394504fb1935ab",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDFKSXiNMB/imSB\nEykaRdmaMzTKQHY0zu7kv3aYfyclr9SSnCx2GI2YLSfvoq9Zi+OiUtmjIq4SsKOP\nsynlSwGdGmGXRNwbtAzAN2fR7T8v2lbfreuRlY+FEQMgZm+Ktp08I1e/e7LznlW3\nyhCnTlWvX6X1h2yA5Z8XfvIe9ApSyi4YOgHsbh7z9rpbh6upY9p93x3CMOrYX0nC\nVAT6qqw/DX5d5r0ctrAzsyrLTndTj/UywDGB7osOuLZH686UxizGzbp8zc2ZYThE\n9SB/HkRdODzoELkuImWLC7cIdR/VBeE+uRYYWF68z9JJb412BVqxx/SVsf8BiAUX\n03g01uqTAgMBAAECggEAIZcUlrjxEOmlnN4EUy8SVzShKlIYMYAN8Ff0Xx/OrhuK\nRl4oLwiY2xPaaXfYkxODuUyPOr12VcXVX+6g1SlVwYvUk56ON4QR5g+qdvgKG1+C\nDILHjxqhhIS0+SiqmUHqgOvuj7eF8f6IURMyiiaM75+GmVG0uTMlyy18F6zxM1Bl\nJcAttzMC0iAIIeMzgm+UBpokbSCBrw36bOj7Xf0F7uLlOaUKQbPy9Ugk1APU2rbW\n/AqNUpA7Xp7ayZoIdg6WOKX4/son3KfKTbj4x5gbyiVvOTZfeV+yuZO/KCIV/ZW+\n2kgSFKXfn+HrcnN5pF4pNmTTHL607R6EVqxD7gMC3QKBgQDtarKFAfbAN5zsDu4w\nfWZOSAn8XpN0Y5OB0V4RBZ9EhsXZ5/cVey5f1ujtGbaRVbrIQ6iNVhqlGuXFq3Jg\n5QGcz3D+NqBSPHNgMdhZtOgBK/AneWCbkeemtIPHmWeAPe/CpluwM1fvKj8/jJ1/\nMxfcphK7+FmFanLePTVBXnCuPwKBgQDUl88mQ1/+p2ASGTX0PSB9kRe5NevtBpn4\njPmRtl+/Kx4VUluOHkcaiMNcMgriWFANZkgRX57MkDWK+TLGbSxK7OQqnpVr5B6C\nWPGvCQOAyDit4x/ZkQOLaoq3NMnG/NWdGTh8y1uov53l7Cgc6ncmGuKeNLr3/rS6\n4fymvdhWrQKBgGdi7kiDeWttDFWzjr/o67MtJcQTf0zQy/xdKwRomVmjAueIXw2o\nraIomRge+WTCm2r4I58gnsvFMcfpiA5vy0r4/rCFIz2Me4WpTxiJcfqIorTd41b7\nq4/pzfUOdYbf8dem0Aij4ygQEqje1/r7SenZHBFk7b7ugwUKTHWh5ZnLAoGAX/aS\n5FO/bkUBYcoNh81b8DJhghIsCBdVw1NniHXJbJK7BqbhexqBwCGCBgj0zs1MfW/x\nEh6WoQJrmOr6F4XKW5vpNq/VBRm5B9+8YOVxtl0q8Js4kk4aSoFyUla6yl7w0fRD\nglmNa3Prg5EBXmQcGpBCQWXODAnmbQF7uYyyrhUCgYBpl+iHjhjp4eEM4hYb+9j7\n8+Yz5AoYl/BvyfTcpHiEksDtFRU34OUYw72QBl2irWEUoEkmsip4UOLJzNzB/6ji\nJgZA1PqHDb+vd+1EtQgbxCBzPDlMYDBwgTC/LYD/osJBbpNK1h2sKqqg8Aa+Fz5e\nFCalKlgk1ZLy8vER3PADTw==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-cz2tv@testproject-1e497.iam.gserviceaccount.com",
      "client_id": "116469447840264044489",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cz2tv%40testproject-1e497.iam.gserviceaccount.com"
    },
    

    databaseURL: "https://testproject-1e497.firebaseio.com",
  }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
