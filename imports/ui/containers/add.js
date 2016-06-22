import {composeWithTracker} from 'react-komposer';
import { DocHead } from 'meteor/kadira:dochead';
// XXX: Session
import { Session } from 'meteor/session';

import Add from '../pages/add.jsx';

const items = [{_id: "ru0K8uYEZWw", start: 182}, {_id: "nYh-n7EOtMA", start: 118}, {_id: "foE1mO2yM04", start: 145}, {_id:"bSfpSOBD30U", start: 105}, {_id: "xFutjZEBTXs", start:122},{_id: "E5ONTXHS2mM", start: 36}, {_id: "XoiEkEuCWog", start: 102}, {_id: "9bZkp7q19f0", start: 61}, {_id: "QK8mJJJvaes", start: 101}];

function composer(props, onData) {
	const current = FlowRouter.current();
  const currentUrl = 'http://boostmyinternetspeed'+current.path;
  const amount = _.random(10, 100);

  let video;
  if (current.path == '/') {
    video = _.sample(items);
  } else {
    video = {_id: current.params.videoId, start: current.hash || 0 };
  }
  onData(null, {amount, video, currentUrl});
  
  DocHead.setTitle('Boost My Internet Speed - Instant way to boost Internet speed');
  DocHead.addMeta({
    name: 'description', content: "Boost My Internet Speed gives you power to boost your Internet speed at no cost. Add the amount you need and your Internet speed will be increased instantly",
  });
  DocHead.addMeta({
    property: 'og:title', content: 'Boost My Internet Speed - Instant way to boost Internet speed'
  });
  DocHead.addMeta({
    property: 'og:description', content: "Boost My Internet Speed gives you power to boost your Internet speed at no cost. Add the amount you need and your Internet speed will be increased instantly"
  });
  DocHead.addMeta({
    name: 'robots', content: "noindex"
  });
};

export default composeWithTracker(composer)(Add);
