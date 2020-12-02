import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoListItem from './components/video_list_item';
import * as YTSearchAction from './actions/yt_searc_action';

class App extends Component {

  constructor(props) {
    super(props);
    this.videoSearch();
  }
  videoSearch() {
    this.props.init();
  }
  render() {
    return <VideoListItem />;
  }
}

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(YTSearchAction.getSearchResult('Suri Noel'))
})

export default connect(null, mapDispatchToProps)(App);
