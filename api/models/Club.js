/**
 * Club.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      clubName: {
        type: 'string',
        unique: true
      },
      category: {
        //could be silver, gold, or diamond
        type: 'string'
      },
      noOfMembers: {
        type: 'number'
      },
      clubCard: {
        collection: 'card',
        via: 'club'
      },
      
      business: {
        model: 'business'
      },
      
      ratings: {
        collection: 'rating',
        via: 'club'
      },
      reviews: {
        collection: 'review',
        via: 'club'
      },
  
      deleted: {
        type: 'boolean'
      }
    
    }
  };
  
  