import { composeWithTracker } from 'react-komposer';
import { DocHead } from 'meteor/kadira:dochead';

import Home from '../pages/home.jsx';

function composer(props, onData) {
  onData(null, {});
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
    property: 'og:image', content: 'http://boostmyinternetspeed.com'
  });
  DocHead.addMeta({
    property: 'og:url', content: 'http://boostmyinternetspeed.com'
  });
};

export default composeWithTracker(composer)(Home);
