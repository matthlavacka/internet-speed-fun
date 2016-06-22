import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import YouTube from 'react-youtube';
import Scroll from 'react-scroll';
import NoSSR from 'react-no-ssr';

import Loading from '../components/loading.jsx';

import Social from '../components/social.jsx';

const scroll  = Scroll.animateScroll;
const Circle = require('rc-progress').Circle;

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      color: 'rgba(254,225,51,0.35)',
      currentAmount: 0.00,
      speed: 220,
      player: null,
      boost: false,
      loadingOn: true,
      copied: false,
    };
    this.changeBoost = this.changeBoost.bind(this);
    this.onReady = this.onReady.bind(this);
    this.againBoost = this.againBoost.bind(this);
  }

  againBoost() {
    this.setState({loadingOn: true});
    Meteor.call('randomDefault', function(err, result) {
      FlowRouter.go('/v/'+result._id+'#'+result.start);
      location.reload(false);
    });
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  calculatePer(num, amount) {
    const currentNum = num*(amount+1)/100;
    return parseFloat(Math.round(currentNum * 100) / 100).toFixed(2);
  }

  pickColor() {
    const opacity = this.state.percent/100;
    return 'rgba(254,225,51,'+opacity+')';
  }

  addPercent() {
    const self = this;
    const percent = this.state.percent;
    this.setState({
      percent: percent + 1,
      color: percent <=30 ? this.state.color : this.pickColor(),
      currentAmount: this.calculatePer(this.props.amount, percent),
      speed: this.state.speed - 2
    });
    setTimeout(function(){ self.changeState(); }, this.state.speed);
  }

  changeState() {
    const percent = this.state.percent;
    percent != 100 ? this.addPercent() : this.scrollToBottom();
    if (percent < 8) {
      this.state.player.setPlaybackRate(1);
    } else if (percent >= 5 && percent < 12) {
      this.state.player.setPlaybackRate(1.25);
    } else if (percent >= 12 && percent < 25) {
      this.state.player.setPlaybackRate(1.5);
    } else {
      this.state.player.setPlaybackRate(2);
    }
  }

  changeBoost() {
    this.setState({
      boost: true,
    });
    this.state.player.playVideo();
    this.changeState();
    const current = FlowRouter.current();
    Meteor.call('insertItem', current.params.videoId, current.hash);
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    this.setState({
      player: event.target,
      loadingOn: false,
    });
  }

  render() {
    const {amount, video, currentUrl} = this.props;
    const {currentAmount, boost, loadingOn} = this.state;
    const videoId = video._id;
    const opts = {
      playerVars: {
        start: video.start,
        showinfo: 0,
      }
    };
    const switchState = this.state.percent < 30;

    return (
      <div>
        <div className="content-page">
          {boost ? <h3>Internet speed increased by <span className="bold">{currentAmount} Mb/s</span></h3> : null}
          {boost ? <p><span className="color-medium">Note increased</span> Internet speed <span className="color-medium">demonstrated on the video below.</span></p> : <p>Boost My Internet Speed gives you power to boost Internet speed at no cost. Internet speed will be increased instantly!</p> }
          <div className="content-items">
            <div className="content-item">
              <div className="content-progress">
                <h3>{this.state.percent}%</h3>
                <Circle percent={this.state.percent} strokeWidth="3" strokeColor={this.state.color} />
              </div>
            </div>
            <div className={boost ? "content-item content-video" : "content-item content-video content-hidden"}>
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={this.onReady}
                />
            </div>
          </div>
        </div>
        {switchState || <p>Help your friends <span className="bold">boost their Internet speed</span> too.</p> }
        {switchState ? <div className="content-page"> <button className="btn btn-secondary btn-size-xl btn-moving" onClick={this.changeBoost}> Boost Speed </button> </div> : null}
        <NoSSR> 
          <Social/>
        </NoSSR>
        <div className="content-custom">{this.state.copied ? <span style={{color: '#e00'}}>Link Copied.</span> : null}</div>
        <CopyToClipboard text={currentUrl} 
          onCopy={() => this.setState({copied: true})}>
          <button className={this.state.percent >= 30 ? "btn btn-secondary btn-size-l btn-share" : "btn btn-secondary btn-size-xl btn-share btn-hidden"}> Copy This Link </button>
        </CopyToClipboard>
        {switchState || <a href="/custom" className="btn btn-secondary btn-size-l btn-share"> Add Custom Video </a>}
        {switchState || <p>or <span className="bold">try again</span>, there is always a random video</p>}
        {switchState || <button className="btn btn-secondary btn-size-xl btn-moving" onClick={this.againBoost}> Boost Speed AGAIN </button>}
        {switchState || <p className="color-medium">This isn't a scam, there isn't a virus, it's just a joke. Made after FEW beers, keep smiling.</p>}
        {loadingOn ? <Loading/> : null}
      </div>
    )
  }
}

export default Add;