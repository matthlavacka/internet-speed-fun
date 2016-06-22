import React, { Component } from 'react';
// XXX: Session
import { Session } from 'meteor/session';

class Home extends Component {

  handleSort(amount) {
    Session.set('amount', amount);
    Meteor.call('randomDefault', function(err, result) {
      FlowRouter.go('/v/'+result._id+'#'+result.start);
    });
  }

  render() {
    return (
      <div>
        <div className="content-page content-loader">
          <div className="spinner-front spinner-slow">
            <span className="spinner-front-circle">
            </span>
          </div>
          <div className="arrow">
            <span className="fa fa-long-arrow-right">
            </span>
          </div>
          <div className="spinner-front spinner-fast">
            <span className="spinner-front-circle">
            </span>
          </div>
        </div>
        <div className="content-page content-product">
          <p>Please select the amount of MB/s you would like to add to your current Internet speed. Internet speed simply cannot be fast enough.</p>
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <div className="list-item list-item-selectable">
                <div className="name">
                  Additional M
                </div>
                <div className="speed">
                 <span className="speed-info">
                    <span className="speed-plus speed-subinfo">+</span>
                    4
                  </span>
                  <span className="speed-mb speed-subinfo">Mb/s</span>
                </div>
                <div className="specs">
                  <ul>
                    <li>1.8Mbps<span className="specs-sub">Download</span></li>
                    <li>0.5Mbps<span className="specs-sub">Upload</span></li>
                    <li>Unlimited<span className="specs-sub">Bandwidth</span></li>
                  </ul>
                </div>
                <div className="select">
                  <button className="btn btn-primary btn-size-select" onClick={() => this.handleSort(4)}>
                    Boost Speed
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="list-item list-item-selectable">
                <div className="name">
                  Additional X
                </div>
                <div className="speed">
                  <span className="speed-info">
                    <span className="speed-plus speed-subinfo">+</span>
                    8
                  </span>
                  <span className="speed-mb speed-subinfo">Mb/s</span>
                </div>
                <div className="specs">
                  <ul>
                    <li>3.6Mbps<span className="specs-sub">Download</span></li>
                    <li>1Mbps<span className="specs-sub">Upload</span></li>
                    <li>Unlimited<span className="specs-sub">Bandwidth</span></li>
                  </ul>
                </div>
                <div className="select">
                  <button className="btn btn-primary btn-size-select" onClick={() => this.handleSort(8)}>
                    Boost Speed
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="list-item list-item-selectable">
                <div className="name">
                  Additional XL
                </div>
                <div className="speed">
                  
                  <span className="speed-info">
                    <span className="speed-plus speed-subinfo">+</span>
                    16
                  </span>
                  <span className="speed-mb speed-subinfo">Mb/s</span>
                </div>
                <div className="specs">
                  <ul>
                    <li>7.2Mbps<span className="specs-sub">Download</span></li>
                    <li>2Mbps<span className="specs-sub">Upload</span></li>
                    <li>Unlimited<span className="specs-sub">Bandwidth</span></li>
                  </ul>
                </div>
                <div className="select">
                  <button className="btn btn-primary btn-size-select" onClick={() => this.handleSort(16)}>
                    Boost Speed
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="list-item list-item-selectable">
                <div className="name">
                  Additional XXL
                </div>
                <div className="speed">
                  <span className="speed-info">
                    <span className="speed-plus speed-subinfo">+</span>
                    32
                  </span>
                  <span className="speed-mb speed-subinfo">Mb/s</span>
                </div>
                <div className="specs">
                  <ul>
                    <li>14.4Mbps<span className="specs-sub">Download</span></li>
                    <li>4Mbps<span className="specs-sub">Upload</span></li>
                    <li>Unlimited<span className="specs-sub">Bandwidth</span></li>
                  </ul>
                </div>
                <div className="select">
                  <button className="btn btn-primary btn-size-select" onClick={() => this.handleSort(32)}>
                    Boost Speed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-page">
          <p>Boost My Internet Speed does exactly what it says on the page. This web gives you power to 'boost your Internet speed' at no cost! You only need to select the amount you need and boost speed! Your Internet speed will be increased instantly!</p>
        </div>
        <p className="color-medium smaller">Inspired by <a href="http://www.downloadmoreram.com" rel="nofollow">Download More RAM</a></p>
      </div>
    )
  }
}

export default Home;