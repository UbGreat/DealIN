/**
 * Business.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      businessName: {
        type: 'string',
        //required: true
      },
  
      description: {
        type: 'string'
      },
  
      photos: [{
        height: {
          type: 'double'
        },
        width:{
          type: 'double'
        },
        photoReference: {
          type: 'string'
        }
      }],
  
      category:{
        type: 'string'
      },
  
      openingHours : {
        openNow : {
          type:'bolean'
        }
     },
  
      location : {
        lat : {
          type: 'double'
        },
        lng : {
          type: 'double'
        }
     },
  
     vicinity: {
       //nearest bustop or notable geographical feature
       type: 'string'
     },
     
     facebook:{
       type: 'string'
     },
  
     email:{
       email: true,
        unique: true
     },
      
     phoneNo: {
       type: 'string'
     },
     website: {
       type: 'string'
     },
  
     clubs: {
      collection: 'club',
      via: 'business'
     },
  
     deals: {
      collection: 'deal',
      via: 'business'
     },
  
     reward: {
      collection: 'reward',
      via: 'business'
     },
     
     reviews: {
      collection: 'review',
      via: 'business'
    },
    ratings: {
      collection: 'rating',
      via: 'business'
    },
      merchant: {
        model: 'user'
      },
      dailyActivity:{
        collection:'activity',
        via: 'business'
      }
    }
  };
  
  