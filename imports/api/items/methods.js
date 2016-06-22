import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/percolate:synced-cron';

import { Items } from './items.js';
import { Count } from './count.js';
import { Default } from './default.js';

Meteor.methods({
	insertItem(video_id, start) {
		return Items.insert({video_id, start, date: new Date()});
	},
	insertDefault(_id, start) {
		Default.insert({_id, start});
	},
	removeDefault(_id) {
		Default.remove({_id});
	},
	randomDefault() {
		return _.sample(Default.find().fetch());
	},
  countItems() {
    const items = Items.aggregate([
      { "$group": {
        "_id": "$_id",
      }},
    ]);

    console.log(items.length);
  }
})

console.log('time now ' + new Date());
const t = new Date();
t.setSeconds(t.getSeconds() + 10);
console.log('setting job to future in 10 seconds ' + t);

SyncedCron.add({
  name: 'itemsCount',
  schedule: function (parser) {
    return parser.text('every 5 minutes');
  },
  job: function () {
  	const time = new Date();
    
    // Set current time - 24 hours
    time.setHours(time.getHours() - 24);

    const items = Items.aggregate([
    	{ "$match": {
        "date": { "$gte": time }
      }},
      { "$group": {
        "_id": "$_id",
      }},
    ]);

    Count.remove({});

    Count.insert({count: items.length});
  }
});

SyncedCron.start();