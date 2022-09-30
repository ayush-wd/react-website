import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
import { cardUrl, card1Url, card2Url, card3Url, card4Url, card5Url, card6Url } from '../utils/constants'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these AMAZING destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem 
                        src={card3Url}
                        text="Explore the hidden waterfall
                        deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <Carditem 
                        src={card2Url}
                        text="Travel through the islands of 
                        Bali on a private cruise"
                        label="Luxury"
                        path="/services"
                    />
                    
                </ul>

                <ul className='cards__items'>
                    <Carditem 
                        src={card1Url}
                        text="Explore the hidden waterfall
                        deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <Carditem 
                        src={card5Url}
                        text="Travel through the islands of 
                        Bali on a private cruise"
                        label="Luxury"
                        path="/services"
                    />
                    <Carditem 
                        src={card6Url}
                        text="Travel through the islands of 
                        Bali on a private cruise"
                        label="Luxury"
                        path="/services"
                    />
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards