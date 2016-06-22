import React from 'react';

// Inserts a Facebook like button
FacebookButton = React.createClass({
	getInitialState() {
		window.fbAsyncInit = function() {
		  FB.init({
		    appId: 568932253263113, // Specify your app id here
		    status: true,
		    xfbml: true,
		    version: 'v2.1' // Specify your version here
		  });
		};
		return null;
	},

	render: function() {
		return (
			<div className="fb-like" data-href='http://boostmyinternetspeed.com/' data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
		);
	}
});

export default FacebookButton;