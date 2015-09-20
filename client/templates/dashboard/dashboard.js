Template.dashboard.rendered = function() {
  console.log(Meteor.user());
  console.log(Meteor.users.find({}).fetch());
};
