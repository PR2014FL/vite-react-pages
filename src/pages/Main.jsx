import React from 'react'
import Video from '../components/Video'
// import { useState, useRef } from 'react'
import PageImage from '../components/PageImage'
import PageTitle from '../components/PageTitle'

function Main() {

  //   const [isPlaying, setIsPlaying] = useState(true);
  //   const videoRef = useRef(null);

  //   function handleClick() {
  //   const nextIsPlaying = !isPlaying;
  //   setIsPlaying(nextIsPlaying);
  //   isPlaying ? videoRef.current.pause() : videoRef.current.play();
  // }

  return (
    <div className='mainDiv'>
        <PageTitle content="This is the Main Page"/>
        <Video/>
        {/* <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button> */}
        {/* <video width="75%" ref={videoRef}>
            <source src="../assets/KittensNPups.mp4" type="video/mp4" />
        </video> */}
       {/* <PageImage src="https://d2zp5xs5cp8zlg.cloudfront.net/image-86836-800.jpg" alt="kitten and puppy laying in the grass"/> */}
    </div>
  )
}

export default Main