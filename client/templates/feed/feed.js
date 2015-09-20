Template.feed.rendered = function() {
  var userId = Router.current().params.query._id;
  $.post('http://37cee33b.ngrok.com/brands/unreviewed', {user_id: userId}, function(result) {
    var brandId = result.brand_id;
    console.log(brandId);
    if (typeof brandId === "undefined") {
      brandId = "GA3";
    }
    $.get("https://api.zalando.com/articles?brand=" + brandId + "&pageSize=20&sort=popularity", function(data) {
       updateProducts(data.content);
     });
  });

  setInterval(function() {
    if (Meteor.user()) {
      $('#logged-in').css('display', 'block');
      $('#logged-out').css('display', 'none');
    }
  }, 500);

  function updateProducts(products) {
    $('#products-feed').html('');
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var name = product.name;
      var imageUrl = product.media.images[0].smallHdUrl;
      var price = product.units[0].price.value;
      var id = product.id;
      var shopUrl = product.shopUrl;
      var brandId = product.brand.key;
      $('#products-feed').append($('<div class="feed-item col-xs-12 col-sm-6 col-md-3">' +
                                   '<img class="image-center thumbnail" src="' + imageUrl  + '">' +
                                   '<p class="text-center brand-name truncate">' + name + '</p>' +
                                   '<p class="text-center">$' + price + '</p>' +
                                   '<div class="text-center">' +
                                     '<input type="text" class="comment-input">' +
                                     '<br>' +
                                     '<a class="recommend-button btn btn-success" data-brand-id="' + brandId + '" data-shop-url="' + shopUrl + '" data-id="' + id + '" data-price="' + price + '" data-name="' + name + '" + data-image-url="' + imageUrl + '">Recommend</a>' +
                                     '<br>' +
                                   '</div>'+
                                 '</div>'));
    }
    $('.recommend-button').click(function() {
      var that = this;
      $(this).addClass('disabled').addClass('btn-info').removeClass('btn-success');
      $(this).text('Recommended!');
      var comment = $(this).prev().prev().val();
      $(this).prev().prev().val('');
      $.post('http://37cee33b.ngrok.com/brands/review', {
        'submitter_id': userId,
        'reviewer_id': Meteor.userId(),
        'name': $(that).data('name'),
        'imageUrl': $(that).data('image-url'),
        'comment': comment,
        'zalando_id': $(that).data('id'),
        'storeUrl': $(that).data('shop-url'),
        'price': $(that).data('price'),
        'brand_id': $(that).data('brand-id')
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
