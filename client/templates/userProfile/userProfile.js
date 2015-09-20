Template.userProfile.rendered = function() {
		console.log(Meteor.user());
};

Template.userProfile.helpers({
	profiles: function() {
	    var objects = Meteor.users.find({}).fetch();
	    console.log(objects);
	    console.log(objects[0]);

	    return objects;
	}
});
