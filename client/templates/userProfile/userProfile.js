Template.userProfile.rendered = function() {
		console.log(Meteor.user());
};

Template.userProfile.helpers({
	profiles: function() {
	    var objects = Meteor.users.find({'profile.isWantAdvice': true}).fetch();
	    return objects;
	}
});
