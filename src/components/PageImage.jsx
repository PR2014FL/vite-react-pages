import React from 'react'

function PageImage({src, alt}) {
  return (
    <div>
        <img src={src} alt={alt} className='pageImage'/>
    </div>
  )
}

export default PageImage