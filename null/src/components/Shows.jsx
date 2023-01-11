import React, {} from 'react'
import deadlands from "../assets/deadlands.png"
import julia from "../assets/juliashow.png"

const Shows = () => {
    const cardInfo = [
        {
            image: `${deadlands}`,
            alt: "Valentines Bloodbath flyer", 
            title: "Valentines Bloodbath", 
            date: "February 12th ", 
            location: "317 Main Street, Farmingdale, NY",
            time: "Doors: 5:30PM",
            url: "https://null-merch-store.myshopify.com/products/valentines-bloodbath-virtual-will-call-ticket"
        },
        {
            image: `${julia}`, 
            alt: "Juli's birthday fundraiser flyer", 
            title: "Juli's birthday fundraiser", 
            date: "February 12th ", 
            location: "Jimmy's Lounge, 188 Midland Avenue, Kearny, NJ",
            time: "Doors: 6:00PM",
            url: ""
        },
    ]

    const renderCard = (card, index) => {
        return (
                <div class="max-w-sm rounded overflow-hidden shadow-lg showCards" key={index}>
                    <img class="w-full" src={card.image} alt={card.alt}/>
                    <div class="px-6 py-4 showCardText">
                        <div class="font-bold text-xl mb-2">{card.title}</div>
                        <ul className=''>
                            <li>{card.date}</li>
                            <li>{card.location}</li>
                            <li>{card.time}</li>
                        </ul>
                            <a href={card.url} target="_blank" rel="noreferrer">Buy</a>
                    </div>
                </div>
        )
    }

  return (
    <>
        <main>
            <section>
                <div>
                    {cardInfo.map(renderCard)}
                </div>
            </section>
        </main>
    </>
  )
}

export default Shows