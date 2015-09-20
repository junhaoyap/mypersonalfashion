Template.selectBrands.rendered = function() {
	$('.next-step-button').click(function() {
		if (!$(this).hasClass('disabled')) {
			window.location.href = $(this).attr('href');
		}
	});
	$('.brand-control').on('click', '.button-like', function() {
		$('.next-step-button').removeClass('disabled');
		$('.facebook-share-button').removeClass('disabled');
		var that = this;
		$(this).hide();
		$(this).next().show();
		var user_id = Meteor.userId();
		$.post('http://37cee33b.ngrok.com/brands/add', {
			'zalando_id': $(that).data('id'),
			'name': $(that).data('name'),
			'imageUrl': $(that).data('image-url'),
			'userId': user_id
		});
	});

	$('.brand-control').on('click', '.button-unlike', function() {
		$(this).hide();
		$(this).prev().show();
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
