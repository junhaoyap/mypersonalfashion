Template.userProfile.rendered = function() {
	// Meteor.user() returns current user
	// Meteor.users
	console.log(Meteor.user());
	console.log(Meteor.users);
};

Template.userProfile.helpers({
	profiles: function() {
	    var objects = Meteor.users.find({}).fetch();
	    console.log(objects);
	    console.log(objects[0]);

	    return objects;
	}
});