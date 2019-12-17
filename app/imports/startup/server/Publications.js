import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Reports } from '../../api/report/Reports';
import { ImageData } from '../../api/imagedata/imagedata.js';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Report', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Reports.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ReportsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Reports.find();
  }
  return this.ready();
});

Meteor.publish('ImageData', function publishImageData() {
  return ImageData.find();
});
Meteor.publish('Reportall', function publish() {
  if (this.userId) {
    return Reports.find({});
  }
  return this.ready();
});