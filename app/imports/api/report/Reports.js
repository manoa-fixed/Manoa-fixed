import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Reports = new Mongo.Collection('Reports');

/** Define a schema to specify the structure of each document in the collection. */
const ReportsSchema = new SimpleSchema({
  title: String,
  location: String,
  datePosted: { type: Date, defaultValue: new Date() },
  image: {
    type: String,
    defaultValue: 'https://res.cloudinary.com/togaquest/image/upload/v1576029113/NullIsland_gepzsu.jpg',
  },
  tag: {
    type: Array,
  },
  'tag.$': {
    type: String,
    allowedValues: ['Vandalism', 'Water Damage', 'Structural', 'Natural/Plants',
      'Electrical', 'Lost & Found', 'Miscellaneous'],
  },
  status: {
    type: String,
    allowedValues: ['Pending', 'In-Progress...', 'Fixed!'],
    defaultValue: 'Pending',
  },
  description: {
    type: String,
    defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
        'printer took a galley of type and scrambled it to make a type specimen book. It has survived not ' +
        'only five centuries, but also the leap into electronic typesetting, ' +
        'remaining essentially unchanged. It was popularised in the 1960s with ' +
        'the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ' +
        'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ' +
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece' +
        ' of classical Latin literature from 45 BC, making it over 2000 years old. ' +
        'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, ' +
        'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ' +
        'and going through the cites of the word in classical literature, discovered the undoubtable ' +
        'source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et ' +
        'Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book ' +
        'is a treatise on the theory of ethics, very popular during the Renaissance. ' +
        'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reports.attachSchema(ReportsSchema);

/** Make the collection and schema available to other code. */
export { Reports, ReportsSchema };
