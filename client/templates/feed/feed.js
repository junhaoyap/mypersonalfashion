Template.feed.rendered = function() {
  var userId = Router.current().params.query._id;
  $.post('http://37cee33b.ngrok.com/brands/unreviewed', {user_id: userId}, function(result) {
    var brandId = result.brand_id;
    $.get("https://api.zalando.com/articles?brand=" + brandId + "&pageSize=20&sort=popularity", function(data) {
       updateProducts(data.content);
     });
  });

  function updateProducts(products) {
    $('#products-feed').html('');
    for (var i = 0; i < products.length; i ++) {
      var product = products[i];
      console.log(product);
      $('#products-feed').append('<div class="col-xs-12 col-sm-6 col-md-3">' +
                                    '<div class="card-wrapper">' +
                                      '<div class="brand-img" style="background-image: url(' + product.media.images[0].smallHdUrl + ');"></div>' +
                                        '<p class="text-center brand-name truncate">' + product.name + '</p>' +
                                        '<p class="text-center">' + product.price + '</p>' +
                                        // Add optional textfield +
                                        '<a class="recommend-button btn btn-success">Recommend</a>'
                                      '</div>' +
                                    '</div>' +
                                  '</div>'
    }
    $('.recommend-button').click(function() {
      $(this).addClass('disabled').addClass('btn-info').removeClass('btn-success');
      $(this).text('Recommended!');
      $.post('', {

      }, function(result) {

      });
    });
  }
};

Template.feed.helpers({
  userToShow: function() {
    var userId = Router.current().params.query._id;
    return Meteor.users.findOne({ _id: userId});
  }
});
