Template.likedItems.rendered = function() {
  // get liked items associated with the id and display them in the html
}

Template.likedItems.helpers({
  userToShow: function() {
    var userId = Router.current().params.query._id;
    return Meteor.users.findOne({ _id: userId});
  }
});
