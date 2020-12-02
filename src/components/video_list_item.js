import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoListItem extends Component {
    state = {
        ytSearchState: []
    }

    static getDerivedStateFromProps(props, state) {
        if (props.ytSearchState !== state.ytSearchState) {
            return { ytSearchState: props.ytSearchState };
        }
    }

    render() {
        return (
            <ul className="col-md-4 list-group mt-4 ml-4">
                { this.state.ytSearchState.length > 0 && this.state.ytSearchState.map(video => {
                    const imageUrl = video.snippet.thumbnails.default.url;
                    return (
                        <li key={video.etag} className="list-group-item">
                            <div className="video-list media">
                                <div className="media-left">
                                    <img className="media-object mr-4" src={imageUrl} alt="video youtube" />
                                </div>
                                <div className="media-body">
                                    <div className="media-heading">{video.snippet.title}</div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

const mapStateToProps = ({ YTReducer }) => ({
    ytSearchState: YTReducer._ytSearchState
});

export default connect(mapStateToProps, null)(VideoListItem);
