import React from 'react'
import PageImage from '../components/PageImage'
import PageTitle from '../components/PageTitle'

function Puppies() {
  return (
    <div className='puppiesDiv'>
        <PageTitle content="This is the Puppies Page"/>
        <PageImage src="https://images.pexels.com/photos/7324407/pexels-photo-7324407.jpeg?auto=compress&cs=tinysrgb&w=600" alt="11 golden retriever pups in the back of an old chevrolet pickup truck"  />
        </div>
  )
}

export default Puppies