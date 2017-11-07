/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  
    attributes: {
      
      phoneno: {
        type: 'string',
        unique: 'true'
      },
  
      email: {
        type: 'string',
        email: 'true',
        unique: 'true'
      },
  
      username: {
        type: 'string',
        unique: 'true'
      },
  
      encryptedPassword: {
        type: 'string'
      },
  
      deleted: {
        type: 'boolean'
      },
  
      admin: {
        type: 'boolean'
      },
      endUser: {
        type: 'boolean'
      },
      merchant: {
        type: 'boolean'
      },
  
      banned: {
        type: 'boolean'
      },
  
      passwordRecoveryToken: {
        type: 'string'
      },
  
      
  
     /* loyaltyCard: {
        collection: 'loyaltyCard',
        via: 'owner'
      },
  
      ratings: {
        collection: 'rating',
        via: 'byUser'
      },

      */
  
      toJSON: function() {
        var obj = this.toObject();
        //delete obj.password;
        delete obj.confirmation;
        delete obj.encryptedPassword;
        return obj;
      }
    }
  };