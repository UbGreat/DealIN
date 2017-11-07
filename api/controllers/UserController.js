


module.exports = {
  signup: function(req, res){
    var options = {};
    options.phoneno = req.param('phoneno');
    options.password = req.param('password');

    User.create(options).exec(function(err, createdUser){
      if(err)
      {
        console.log(err);
      }
      return res.json({
        phoneno: createdUser.phoneno,
        password: createdUser.password
      });
    });
  },
  allUsers: function(req, res){
    User.find().exec(function(err, foundUsers){
      if(err) res.negotiate(err);
      return res.json(foundUsers);
    });
  },
  findAllMerchants: function(req, res){
    User.find({role: ['merchant']}).exec(function(err, allMerchants){
      if(err) return res.negotiate(err);
      return res.json(allMerchants);
    });
  },
  findAllCustomers: function(req, res){
    User.find({role: ['customer']}).exec(function(err, allCustomers){
      if(err) return res.negotiate(err);
      return res.json(allCustomers);
    });
  },
  findByPhone: function(req, res){
    User.find({phoneno: {'contains' : '0808'}}).exec(function(err, users){
      if(err) return res.negotiate(err);
      return res.json(users);
    });
  }
};