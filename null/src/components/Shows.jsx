import React, {} from 'react'
import deadlands from "../assets/deadlands.png"
import julia from "../assets/juliashow.png"
import './css/Shows.css'

const Shows = () => {
    const cardInfo = [
        {
            image: `${deadlands}`,
            alt: "Valentines Bloodbath flyer", 
            title: "Valentines Bloodbath Virtual Will Call Ticket", 
            date: "February 12th ", 
            location: "317 Main Street, Farmingdale, NY",
            time: "Doors: 5:30PM",
            price: "$12",
            url: "https://null-merch-store.myshopify.com/products/valentines-bloodbath-virtual-will-call-ticket"
        },
        {
            image: `${julia}`, 
            alt: "Juli's birthday fundraiser flyer", 
            title: "Juli’s Birthday Fundraiser Music Showcase: Day 1", 
            date: "February 12th ", 
            location: "Jimmy's Lounge, 188 Midland Avenue, Kearny, NJ",
            time: "Doors: 6:00PM",
            price: "$10",
            url: "https://null-merch-store.myshopify.com/products/juli-s-birthday-fundraiser-music-showcase-day-1"
        }
    ]

    const renderCard = (card, index) => {
        return (
            <div className='showCardContainer'>
                <div class="showCards" key={index}>
                    <img class="showImg" src={card.image} alt={card.alt}/>
                    <div class="showCardText">
                        <div class="showTitle">{card.title}</div>
                        <ul className='showBody'>
                            <li>{card.date}</li>
                            <li>{card.location}</li>
                            <li>{card.time}</li>
                            <li className='showPrice'>{card.price}</li>
                        </ul>
                            <a href={card.url} target="_blank" rel="noreferrer" className='showBtn'>Buy</a>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
        <main>
            <section>
                <div>
                    <div className='showCardContainer'>
                        {cardInfo.map(renderCard)}
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Shows