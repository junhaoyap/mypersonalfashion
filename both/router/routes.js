Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/userProfile', {
  name: 'userProfile'
});

Router.route('likedItems', {
  name: 'likedItems'
});

Router.route('recommendations', {
  name:'recommendations'
});


Router.route('/items/new', {
  name: 'items.new'
});

Router.route('/selectbrands', {
  name: 'selectBrands'
});

Router.route('/feed', {
  name: 'feed'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
