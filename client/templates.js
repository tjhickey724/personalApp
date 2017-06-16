Template.showpeople.helpers({
  peoplelist() {return People.find()},
})

Template.addperson.events({
  'click button'(elt,instance) {
    const name = instance.$('#name').val();
    const year = instance.$('#birthyear').val();
    const birthyear = parseInt(year);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#birthyear').val("");
    People.insert({name:name,birthyear:birthyear,
                   owner:Meteor.userId(),
                   createAt:new Date()});
    //People.insert({name,birthyear})
  }
})

Template.personrow.helpers({
  isOwner() {console.dir(this);
     return this.person.owner == Meteor.userId()}
})

Template.personrow.events({
    'click span'(elt,instance) {
      console.dir(this);
      console.log(this);
      console.log(this.person._id);
      if (this.person.owner==Meteor.userId()){
          People.remove(this.person._id);
      } else {
        alert("Why are you deleting someone else's entry?");
      }
    }
})
