var exports = module.exports = {}

exports.signup = function(req,res){
	res.render('profileCreation'); 
}

exports.signin = function(req,res){
	res.render('signin'); 
}

exports.dashboard = function(req,res){
	res.render('loginredirect'); 
}
exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/signin');
  });
}