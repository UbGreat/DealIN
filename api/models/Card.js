/**
 * Card.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      cardName: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      category: {
        //could be silver, gold or diamond
        type: 'string'
      },
      maxPunch: {
        type: 'integer'
      },
      club: {
        model: 'club'
      },
      reward: {
        model: 'reward'
      }
    }
  };
  
  