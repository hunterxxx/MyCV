import React from 'react';
import { PlyrComponent } from 'plyr-react';


export default class VideoViewer extends React.Component {
    constructor() {
        super();
        this.state = {
            sources: {
                type: 'video',
                sources: [
                    {
                        src: 'https://f000.backblazeb2.com/file/superbucket1/vid.mp4',
                        type: 'video/mp4',
                    },
                ],
            }
        };
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    render() {
        return (
            <div id='viewer' style={{ width: '100%', height: '50%' }}>
                <PlyrComponent sources={this.state.sources} />
            </div>
        )
    }
}