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
      "project_id": "ubproject1-134b9",
      "private_key_id": "8d68f9a915961fb5997747ba3aa12a825f32b418",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDGhTfVCO7+bR8R\nXyMkKPg+bDO5SHrwxRGbMUt5vOZNID7z0Jdub2VLz9vlwOUKrNrZAFlV5B+eXH0G\nlupsEFBNlrRV05lPiipqwZsXgKudoLltvHD1PLpt2a+JmGGHiomMg3dhFDsSDw0Z\nhGSahD4yQ57irfEP50KWm5vH+8jzk9lmxwI+fIZnAq2wdbZIXyel17nn4kCBxXur\n9CCbzT7vGbzidsEYneuTaCsFJSa/sauqx6kWYJLZ9+MbkeEESQ32KsOFLFNrpr/x\niQI6MgE7tkIXevD2nA6ZdEGpWx7QvMGbHKK6m+He2Szj8Mbb3DeIUJsrASXgyn5S\nxV6b71wxAgMBAAECggEAGd9RzqC1Q7u6pqZvVi6aunPv7RquScO9OYHGqY0ot0OC\na38zb8/yc9tuorZYLg3SEHb0WEvR98RrrO4Ci5E4DgHxQGrtL58SS8st/cr7UstC\nxLOgRcMjiYkrJfO8k5AcFg/U1qDu2TnUm2SUQfOwhsImVQ+V+7HIOAhRWKe5YaPC\nfD1/FdS5NfyfVXzH3DIG/WROnEcndqXeZouKSWtlcEO5P/pSAveWt7s8oDaqdJao\nBpTlSUcLT07ErwtD9hwyRZU5JQMElaQcyVABj05KZ0SyMfLEOESFc7OalRFWFxtI\nxouEYpV9639MlGunCpdSUP+ywE9TDogqf7HIjTYaYwKBgQDvzBpfM65LeG46SvoE\nzxwBIOglW3nkfjec69nrmhmhSCxx2Jw4/kFFl8gS1LTE3t+vDoimR4uOVYQalAAr\nq61cZCNK+EzbnqyPKDYPn4FiPn7iLrHfQQs0OdyIOaiF2+y9K3Vt7B4mLnOJjlZa\nI9+gQSfa4Hf/Ll/J4FhiS7JUQwKBgQDT7yCcVBvpoqEt8R8eKN1O8xiIWNyuLzRC\ny9A64ekKgd7+7WSFMm/R+lkQYLxkemp5Lcju7lVRN2fZesmU+X2igDnF3L1fEtjl\n96SJXxqnBmUYAYirEosSXYXcu9heOhe9ckl1nTSAEbDufSKNBZCIbAenbcGSyDM8\nIGmcfx2gewKBgQCBrV2hmEAsXg82BO/aA+qADbyc3zA2ya7ndIAfsfEkT/SBCIPL\nKmw/50nyLQco4+IROAnb6hrlOQe8m8bP1wJkUV7onwhpSBDHRhaeMkL0zxks1dWp\nBvK5JoVFQfEJmpoW3tadQDA5s6sVe1zlWDsJ3dJgwj0CSaDRejoxxf/FIwKBgQDA\n1qTlmeKMA96E3xFhb+1vGOMJrVGfbHQxEyK1cTmKxgESFQ+R4wK8HP9NV7gT9Q9M\nk8xxG4umCrQDvyYM17bpVaM71k65Y3zYQy0DkfW+ZKM35K1me8jvPQnAf2uw0Uso\npgURb6mFnpNPba0yhA2vFB0iy0uHM4LrAtMWAtQCYQKBgQCC147kRDiCnFsQH1UQ\n2x2V8rwDbjUTLX7OXVNsFXhEZyH0AdymXvlj9ugD6x4CxmOEChVcQN917eB8Iduw\n2hx2iUtbt6WJJpV1gD0Z2vdF4nK7WKft63x8be9yHvQIYgrTNYs4moBhzpzdgYNF\ncanhUDZ55D+w7CavRmjaah765Q==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-1lux6@ubproject1-134b9.iam.gserviceaccount.com",
      "client_id": "101408485967492097310",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1lux6%40ubproject1-134b9.iam.gserviceaccount.com"
    },

    databaseURL: "https://ubproject1-134b9.firebaseio.com",
  }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
