import React from 'react'
import PageImage from '../components/PageImage'
import PageTitle from '../components/PageTitle'

export default function Kittens() {


  return (
    <div className='kittensDiv'>
        <PageTitle content="This is the Kittens Page"/>
        <PageImage src="https://images.pexels.com/photos/3073694/pexels-photo-3073694.jpeg?auto=compress&cs=tinysrgb&w=600" alt="two white kittens" />
        </div>
  )
}

