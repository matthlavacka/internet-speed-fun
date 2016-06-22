import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class Custom extends Component {
	constructor(props) {
    super(props);
    this.state = {
      copiedCustom: false,
      videoUrl: "",
 			start: 0,
    };
  }

	validateYoutubeUrl(url) {
	  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	  if(url.match(p)){
	      return url.match(p)[1];
	  }
	  return false;
	}

	youtubeParser(url) {
		if (this.validateYoutubeUrl(url) ) {
			var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		  var match = url.match(regExp);
		  if (match && match[2].length == 11) {
		    return match[2];
		  } else {
		    return;
		  }
		}
	  else {
	  	alert('Not valid Youtube URL!');
	  	this.setState({
	  		videoUrl: "",
	  	})
	  }
	}

  render() {
  	const {videoUrl, start} = this.state;
  	const videoId = videoUrl == "" || this.youtubeParser(videoUrl);
  	const currentPath = start > 0 
  	  ? 'v/'+videoId + '#'+start
  	  : 'v/'+videoId;
  	const currentUrl = 'http://boostmyinternetspeed.com/'+currentPath;

    return (
      <div>
        <div className="content-page">
          <p className="larger">Boost your friends Internet speed with your own video</p> 
	        <div className="content-custom">
	          <label>Paste Youtube URL</label>
	          <input value={videoUrl} placeholder="Paste link to your Youtube video"
	            onChange={({target: {value}}) => this.setState({videoUrl: value, copiedCustom: false})} />&nbsp;
	        </div>
	        <div className="content-custom">
	          <label>Start video in (number of seconds)</label>
	          <input value={start}
	            onChange={({target: {value}}) => this.setState({start: value, copiedCustom: false})} />&nbsp;
	        </div>
	        {this.state.copiedCustom ? <a href={currentUrl} target="_blank">{currentUrl}</a> : null}
	        <div className="content-custom">{this.state.copiedCustom ? <span style={{color: '#e00'}}>Link Copied.</span> : null}</div>
	        <div className="content-page">
	          <CopyToClipboard text={currentUrl}
	            onCopy={() => this.setState({copiedCustom: true})}>
	            <button className="btn btn-secondary btn-size-xl btn-moving"> Generate Link </button>
	          </CopyToClipboard>
          </div>
        </div>
		  </div>
    )
  }
}

export default Custom;