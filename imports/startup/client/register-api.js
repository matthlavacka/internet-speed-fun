import '../both/routes.js';

Meteor.startup(function() {
    //Temp fix because first visit isn't tracked...
    analytics.page(FlowRouter.current().path);
});