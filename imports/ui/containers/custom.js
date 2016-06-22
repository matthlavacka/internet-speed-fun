import { composeWithTracker } from 'react-komposer';
import { DocHead } from 'meteor/kadira:dochead';

import Custom from '../pages/custom.jsx';

function composer(props, onData) {
  onData(null, {});
  DocHead.setTitle('Custom solution');
  DocHead.addMeta({
    name: 'description', content: "Boost My Internet Speed gives you power to boost your Internet speed at no cost. Add the amount you need and your Internet speed will be increased instantly",
  });
  DocHead.addMeta({
    property: 'og:title', content: 'Custom solution'
  });
  DocHead.addMeta({
    property: 'og:description', content: "Boost My Internet Speed gives you power to boost your Internet speed at no cost. Add the amount you need and your Internet speed will be increased instantly"
  });
  DocHead.addMeta({
    property: 'og:image', content: 'http://boostmyinternetspeed.com'
  });
  DocHead.addMeta({
    property: 'og:url', content: 'http://boostmyinternetspeed.com/custom'
  });
};

export default composeWithTracker(composer)(Custom);
