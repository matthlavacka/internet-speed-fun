import React, { Component } from 'react';

class AppLayout extends Component {
  render() {
    const {content, count} = this.props;
    
    return (
      <div>
        <div className="container">
	        <div className="content-heading">
	          <h1 className="uppercase"><a href="/">Boost My Internet Speed</a></h1>
	          <h3>Instant, Fast and Free</h3>
	          <p>Just in last 24 hours, <span className="bold">{count} users</span> boosted their Internet speed!</p>
	        </div>
	        {content}
        </div>
		  </div>
    )
  }
}

export default AppLayout;