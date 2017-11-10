/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      username:{
        type: 'string',
        unique: true
      },
      email: {
        type: 'string',
        email: true,
        unique: true,
        required: true
      },
      password: {
        type: 'string',
        required: true
      },
      phoneNo: {
        type: 'string'
      },
  
      role: {
        type: 'string',
       // enum: ['dealinSuperAdmin', 'dealinAdmin','merchant', 'staffMember', 'customer']
      },
  
      banned: {
        type: 'boolean'
      },
  
      deleted: {
        type: 'boolean'
      },
  
      business: {
        collection: 'business',
        via: 'merchant'
      },
      sentNotification: {
        collection: 'notification',
        via:'sender'
      },
      receivedNotification: {
        collection: 'notification',
        via:'receipients'
      },
      dailyActivity: {
        collection: 'activity',
        via: 'user'
      },
      toJSON: function() {
        var obj = this.toObject();
        return obj;
    }
  }
  };
  
  