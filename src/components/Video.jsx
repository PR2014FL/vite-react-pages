import React, {Component} from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        return (
            <div className="video">
                <ReactPlayer
                // url='../assets/KittensNPups.mp4'
                url='https://www.youtube.com/watch?v=8rSH8-pbHZ0&ab_channel=BuzzFeedVideo'
                width='75%'
                controls={true}
                />
            </div>
        )
    }
}

export default Video