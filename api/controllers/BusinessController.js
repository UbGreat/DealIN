/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var admin = require("firebase-admin");

var firebase = require('./helpers/firebase');

module.exports = {
   
    register: function(req, res){
      
        var me = {};
        me.businessName = req.param('businessname');
        me.category = req.param('category');
        me.email = req.param('email');
        var usersRef = admin.database().ref().child('business').key;

        Business.create(me).exec(function(err, registerBusiness){
            if(err){
                return res.negotiate(err);
            }
            return res.json(registerBusiness);
        });
        
        
    }
    
    
    
	
};

