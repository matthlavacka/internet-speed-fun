import { Default } from '../../api/items/default.js';

Meteor.startup(function () {
  // Insert sample data if the student collection is empty
  if (Default.find().count() === 0) {
    const items = [{_id: "ru0K8uYEZWw", start: 182}, {_id: "nYh-n7EOtMA", start: 118}, {_id: "foE1mO2yM04", start: 145}, {_id:"bSfpSOBD30U", start: 105}, {_id: "xFutjZEBTXs", start:122},{_id: "E5ONTXHS2mM", start: 36}, {_id: "XoiEkEuCWog", start: 102}, {_id: "9bZkp7q19f0", start: 61}, {_id: "QK8mJJJvaes", start: 101}];
  	_.each(items, function(item) {
  		Default.insert(item);
  	})
  }
});
