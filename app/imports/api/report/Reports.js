import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Reports = new Mongo.Collection('Reports');

/** Define a schema to specify the structure of each document in the collection. */
const ReportsSchema = new SimpleSchema({
  email: String,
  location: String,
  image: String,
  tag: {
    type: String,
    allowedValues: ['Vandalism', 'Water Damage', 'Structural', 'Natural/Plants',
      'Lighting', 'Lost & Found', 'Miscellaneous'],
    defaultValue: 'Structural',
  },
  status: {
    type: String,
    allowedValues: ['Pending', 'In-Progress...', 'Fixed'],
    defaultValue: 'Pending',
  },
  description: String,
  status: {
    type: String,
    allowedValues: ['Pending', 'In-Progress...', 'Fixed!'],
    defaultValue: 'Pending',
  },
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reports.attachSchema(ReportsSchema);

/** Make the collection and schema available to other code. */
export { Reports, ReportsSchema };
