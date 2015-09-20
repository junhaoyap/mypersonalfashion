Template.userProfile.rendered = function() {
	// Meteor.user() returns current user
	// Meteor.users
	console.log(Meteor.user());
	console.log(Meteor.users);
};
