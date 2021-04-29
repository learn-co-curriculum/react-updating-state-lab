// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

state = {
    errors: [],
    user: null,
    settings: {
        bitrate: 8,
        video: {
            resolution: '1080p'
            
        }
    }
}




// updateBitrate = () => {
    
//     this.setState({bitrate: [...this.state.settings.bitrate = 12]})
    
    
// }
// changeResolution = () => {
//     this.setState({resolution: [...this.state.settings.video.resolution ='720p']})
    
// }


updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: "720p" },
      },
    });
  };






render() {
    return (
        <div>
        <button className = 'bitrate' onClick = {this.updateBitrate}>{this.state.settings.bitrate}</button>,
        <button className = 'resolution' onClick = {this.updateResolution}>{this.state.settings.video.resolution}</button>
        </div>
        )
    }
}

export default YouTubeDebugger