// import React from 'react'
import FeatureCard from '../../src/components/FeatureCard'

const FeatureContent = () => {
  return (
    <div>
      <FeatureCard 
       imageUrl='./feature1.svg' 
       logo='./start1.svg' 
       title='Ethereum Basics' 
       description='What is Ethereum? Discover the “new internet” and unlock your digital freedom through the power of decentralized technology.' 
       name='Educhain' 
       />

    <FeatureCard imageUrl='/bitcoin.jpg' 
       logo='./start1.svg' 
       title='Bitcoin Basics' 
       description='What is Ethereum? Discover the “new internet” and unlock your digital freedom through the power of decentralized technology.' 
       name='Educhain' 
    />

    <FeatureCard imageUrl='/Wallets.jpg' 
       logo='./start1.svg' 
       title='Wallets Basics' 
       description='What is Ethereum? Discover the “new internet” and unlock your digital freedom through the power of decentralized technology.' 
       name='Educhain' 
    />
    </div>
  )
}

export default FeatureContent
