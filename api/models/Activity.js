/**
 * Activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      business: {
        model: 'business'
      },
      user: {
        model: 'user'
      },
      activityDate: {
        type: 'string'
      },
      startTime: {
        type: 'string'
      },
      activityType: {
        type: 'string'
      },
      activityNote: {
        type: 'string'
      }
    }
  };
  
  