
import React from 'react';

// Inserts a Facebook like button
TwitterButton = React.createClass({
	render: function() {
		var iframeStyle = {
			position: 'static',
			visibility: 'visible',
			border: 'none',
			overflow: 'hidden',
			width: '62px',
			height: '20px'
		};

		return (
			<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.baa54ded21a982344c4ced326592f3de.en.html#dnt=true&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Fboostmyinternetspeed.com&amp;size=m&amp;text=Instant%20Fast%20and%20Free%20way%20to%20boost%20your%20Internet%20speed%20-%20http%3A%2F%2Fboostmyinternetspeed.com&amp;time=1455212999405&amp;type=share&amp;url=boostmyinternetspeed.com" style={iframeStyle} data-url="http://boostmyinternetspeed.com"></iframe>
		);
	}
});

export default TwitterButton;