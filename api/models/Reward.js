/**
 * Reward.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      rewardName: {
        type: 'string'
      },
      rewardType:{
        type: 'string' //birthday rewards, facebook checkin rewards, referal reward, etc.
      },
      description: {
        type: 'string'
      },
      card: {
        collection: 'card',
        via: 'reward'
      },
      business: {
        model: 'business'
      }
  
    }
  };
  
  