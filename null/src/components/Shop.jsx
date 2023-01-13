import React, {} from 'react'
import "./css/Shop.css"
import cultsweater from '../assets/cultSweater.png'
import nullCrop from '../assets/nullCrop.png'
import nullHoodie from '../assets/nullHoodie.png'
import haloT from '../assets/haloT.png'

const Shop = () => {
    const cardInfo = [
        {
            image: `${nullHoodie}`,
            alt: "[NULL] Logo Monochrome Unisex Hoodie", 
            title: "[NULL] Logo Monochrome Unisex Hoodie", 
            price: "$40",
            url: "https://null-merch-store.myshopify.com/products/null-logo-monochrome-unisex-hoodie"
        },
        {
            image: `${nullCrop}`, 
            alt: "Cult Sigill Crop Hoodie", 
            title: "Cult Sigill Crop Hoodie", 
            price: "$45",
            url: "https://null-merch-store.myshopify.com/products/cult-sigill-crop-hoodie"
        },
                {
            image: `${cultsweater}`,
            alt: "Cult Sigil Unisex Premium Sweatshirt", 
            title: "Cult Sigil Unisex Premium Sweatshirt", 
            price: "$40",
            url: "https://null-merch-store.myshopify.com/products/cult-sigil-unisex-premium-sweatshirt"
        },
        {
            image: `${haloT}`, 
            alt: "Halo t-shirt", 
            title: "Halo t-shirt", 
            price: "$25",
            url: "https://null-merch-store.myshopify.com/products/halo-t-shirt"
        }
    ]

    const renderCard = (card, index) => {
        return (
            <div className='shopCardContainer'>
                <div class="shopCards" key={index}>
                    <img class="shopImg" src={card.image} alt={card.alt}/>
                    <div class="shopCardText">
                        <div class="shopTitle">{card.title}</div>
                        <ul className='shopBody'>
                            <li>{card.date}</li>
                            <li>{card.location}</li>
                            <li>{card.time}</li>
                            <li className='shopPrice'>{card.price}</li>
                        </ul>
                            <a href={card.url} target="_blank" rel="noreferrer" className='shopBtn'>Buy</a>
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
                    <div className='shopCardContainer'>
                        {cardInfo.map(renderCard)}
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Shop