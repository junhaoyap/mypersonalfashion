Template.feed.rendered = function() {
  function updateProducts(products){
    $('#products-feed').html('');
    for (var i = 0; i < products.length; i ++) {
      var product = products[i];
      $('#products-feed').append('<div class="card-wrapper"><img src="'+
                                  product.media.images[0].smallHdUrl+
                                  '"/><p class="product-name truncate">'
                                  +product.name+'</p></div>');
    }
  }
};

Template.feed.helpers({
  userToShow: function() {
    var userId = Router.current().params.query._id;
    return Meteor.users.findOne({ _id: userId});
  }
});
