import { Meteor } from 'meteor/meteor';

import { Count } from '../count.js';

Meteor.publish('count', function count() {
	return Count.find();
});