import React, {} from 'react'
import "./css/Shop.css"

const Shop = () => {
        const cardInfo = [
        {image: "", title: "whiteshirt", text: "sdfsdfsd", url: ""},
        {image: "", title: "whiteBeanie", text: "dadfgadfg", url: ""},
        {image: "", title: "redBeanie", text: "adfgadfg", url: ""},
        {image: "", title: "blackshirt", text: "ghfsgsg", url: ""},
    ]

    const renderCard = (card, index) => {
        return (
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 shopCards" key={index}>
                    {/* <img class="w-full" src={card.image} alt="Sunset in the mountains"> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{card.title}</div>
                        <p class="text-gray-700 text-base">
                        {card.text}
                        </p>
                        <button src={card.url}>Buy</button>
                    </div>
                    </div>
        )
    }
  return (
    <>
        <main>
            <section>
                <div class="cards">
                    {cardInfo.map(renderCard)}
                </div>
            </section>
        </main>
    </>
  )
}

export default Shop