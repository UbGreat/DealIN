/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var admin = require("firebase-admin");

var firebase = require('./helpers/firebase');

module.exports = {
   
    signup: function(req, res){
      
        var me = {};
        me.businessName = "fivefingers";//req.param('businessname');
        me.category = "resturant" //req.param('category');
        me.email = "fivefingers@gmail.com" //req.param('email');
        var usersRef = admin.database().ref().child('business').key;

        User.create(me).exec(function(err, createdUser){
            if(err){
                return res.negotiate(err);
            }
            return res.json(createdUser);
        });
        
        
    }
    
    
    
	
};

