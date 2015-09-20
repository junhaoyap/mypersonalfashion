Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    user.profile = options.profile;
  }
  return user;
});

REDIRECT_URL = 'http://iamfabulous.club';

WebApp.connectHandlers
  .use(function(req, res, next) {
    console.log(req.url);
    var location = REDIRECT_URL;
    res.writeHead(301, {'Location': location});
    res.end();
  });
