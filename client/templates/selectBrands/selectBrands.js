Template.selectBrands.rendered = function() {
	$('.next-step-button').click(function() {
		if (!$(this).hasClass('disabled')) {
			window.location.href = $(this).attr('href');
		}
	});
	$('.brand-control').on('click', '.button-like', function() {
		$('.next-step-button').removeClass('disabled');
		$(this).hide();
		$(this).next().show();
		var user_id = Meteor.userId();
		Brands.insert({
		  id: $(this).data("id"),
		  name: $(this).data("name"),
		  imageUrl: $(this).data("image-url"),
		  userId: user_id
		});
	});

	$('.brand-control').on('click', '.button-unlike', function() {
		$(this).hide();
		$(this).prev().show();
		var user_id = Meteor.userId();
		Brands.remove({
		  _id: $(this).data("id")
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
