import React from 'react';
import {mount} from 'react-mounter';
import pathToRegexp from 'path-to-regexp';

// Main Layout
import Layout from '../../ui/containers/layout.js';

// Pages
import Home from '../../ui/containers/home.js';
import Add from '../../ui/containers/add.js';
import Custom from '../../ui/containers/custom.js';

FlowRouter.route('/', {
  name: 'Home',
  action() {
  	mount(Layout, {
  		content: <Add />
  	})
  }
});

FlowRouter.route('/v/:videoId', {
  name: 'Add.video',
  action() {
  	mount(Layout, {
  		content: <Add />
  	})
  }
});

FlowRouter.route('/custom', {
  name: 'Custom',
  action() {
  	mount(Layout, {
  		content: <Custom />
  	})
  }
});

if(Meteor.isServer) {
    WebApp.connectHandlers.use('/', function(req, res, next) {
      if(isValidRoute(req.url)) 
          return next();
      res.writeHead(404);
      res.end("404 Page Not Found. Go Back To - http://boostmyinternetspeed.com");
    });

    function isValidRoute(requestUrl) {
    	if (/(font)\//i.test(requestUrl) ) return true;
      let splitUrl = requestUrl.split('?')[0];
      for(var i = 0; i < FlowRouter._routes.length; i++)
          if(pathToRegexp(FlowRouter._routes[i].path).test(splitUrl))
              return true;

      return false;
    }
}