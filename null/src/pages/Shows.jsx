import React, {} from 'react'
import { cardInfo } from '../data/shows'
import '../css/Shows.css'

export const Shows = () => {

  return (
    <>
        <main className="showBackground">
            <section>
                <div className="cardContainer">
                    {cardInfo.map((card, index) => {
                        return (
                            <div className="showCardContainer">
                                <div class="showCards" key={index}>
                                    <a href={card.url} target="_blank" rel="noreferrer">
                                        <button>
                                            <img class="showImg" src={card.image} alt={card.alt}/>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    </>
  )
}