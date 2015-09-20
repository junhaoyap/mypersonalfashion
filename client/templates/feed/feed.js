Template.feed.rendered = function() {
  var userId = Router.current().params.query._id;
  $.post('http://37cee33b.ngrok.com/brands/unreviewed', {user_id: userId}, function(result) {
    var brandId = result.brand_id;
    $.get("https://api.zalando.com/articles?brand=" + brandId + "&pageSize=20&sort=popularity", function(data) {
       updateProducts(data.content);
     });
  });

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
  // <!-- Show items that were requested to be commented on -->
  // <!-- Comment Box -> I think you will look freaking awesome in this! -->
  // <!-- Submit Button -->
};

Template.feed.helpers({
  userToShow: function() {
    var userId = Router.current().params.query._id;
    return Meteor.users.findOne({ _id: userId});
  }
});
