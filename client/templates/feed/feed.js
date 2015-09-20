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
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      console.log(product);
      $('#products-feed').append('<div class="feed-item col-xs-12 col-sm-6 col-md-3">' +
                                   '<img class="image-center thumbnail" src="' + product.media.images[0].smallHdUrl  + '">' +
                                   '<p class="text-center brand-name truncate">' + product.name + '</p>' +
                                   '<p class="text-center">$' + product.units[0].price.value + '</p>' +
                                   '<div class="text-center">' +
                                     '<input type="text" class="comment-input">' +
                                     '<br>' +
                                     '<a class="recommend-button btn btn-success">Recommend</a>' +
                                     '<br>' +
                                   '</div>'+
                                 '</div>');
                                //  '<div class="col-xs-12 col-sm-6 col-md-3">' +
                                //    '<a href="' + product.url + '"" target="_blank">' +
                                //      '<img class="image-center thumbnail" src="' + product.media.images[0].smallHdUrl  + '">' +
                                //      '<p class="text-center brand-name truncate">' + product.name + '</p>' +
                                //      '<p class="text-center">$' + product.price + '</p>' +
                                //    '</a>' +
                                //    '<p class="text-center">' + Us + ': <i>' + 'This sunglasses will definitely look good on you' + '!</i></p>' +
                                //  '</div>'
    }
    $('.recommend-button').click(function() {
      var that = this;
      $(this).addClass('disabled').addClass('btn-info').removeClass('btn-success');
      $(this).text('Recommended!');
      $.post('', {
        'user_id': userId,
        'comment': $(that).prev().text(),

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
