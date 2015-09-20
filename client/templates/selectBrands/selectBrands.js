Template.selectBrands.rendered = function() {
	$('.brand-control').on('click', '.button-like', function() {
		$('.next-step-button').css('display', 'block');
		$(this).hide();
		$(this).next().show();
		var user_id = Meteor.userId();
		Brands.insert({
		  id: $(this).data("id"),
		  name: $(this).data("name"),
		  imageUrl: $(this).data("imageUrl"),
		  userId: user_id
		});
	});

	$('.brand-control').on('click', '.button-unlike', function() {
		$(this).hide();
		$(this).prev().show();
		var user_id = Meteor.userId();
		Brands.remove({
		  id: $(this).data("id"),
		  name: $(this).data("name"),
		  imageUrl: $(this).data("imageUrl"),
		  userId: user_id
		});
	});

	$('.button-dislike').click(function() {
		$(this).parent().parent().parent().fadeOut();
	});
};

Template.selectBrands.helpers({
	brandsToShow: function() {
		var gender = Meteor.user().services.facebook.gender;
		if (gender === "female") {
			return FemaleBrands.find().fetch();
		} else {
			return MaleBrands.find().fetch();
		}
	}
});
