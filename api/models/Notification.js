/**
 * Notification.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      notificationName: {
        //type could be birthday notification, Due dates notification, feature update, etc
        type: 'string'
      },
      notificationType: {
        type: 'string'
      },
      notificationTarget: {
        //target could be an individual or a group of receipients 
        type: 'string',
        enum: ['single', 'group']
      },
      deliveryDate: {
        //notification could be delivered now or later
        type: 'date'
      },
      notificationMessage:{
        type: 'string'
      },
      sender: {
        model: 'user',
      },
      receipients: {
        model:'user',
      }
    }
  };
  
  