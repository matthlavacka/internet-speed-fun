import { composeWithTracker } from 'react-komposer';

import Layout from '../layouts/layout.jsx';

import { Count } from '../../api/items/count.js';

function composer(props, onData) {
  const handle = Meteor.subscribe('count');
  if( handle.ready() ) {
  	const count = Count.find().fetch();
  	count.length < 0 || onData(null, {count:count[0].count});
  };
};

export default composeWithTracker(composer)(Layout);