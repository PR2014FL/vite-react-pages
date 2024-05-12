import React from 'react'
import PageImage from '../components/PageImage'
import PageTitle from '../components/PageTitle'

function Main() {
  return (
    <div className='mainDiv'>
        <PageTitle content="This is the Main Page"/>
        <PageImage src="data:image/jpeg;base64,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" alt="A kitten and a golden retriever under a blanket" />
    </div>
  )
}

export default Main