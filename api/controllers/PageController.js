/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
      welcome: function(req, res) {
    
          res.view('welcomepage')    
          
        },
      home: function(req, res) {
          
                res.view('homepage')    
                
            },
      home: function(req, res) {
  
        res.view('homepage')    
        
      },
      signup: function(req, res) {
        
              res.view('signup')    
              
      },
      signin: function(req, res) {
        
        res.view('signin')    
                    
      }
          
    };