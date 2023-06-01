import React, {} from 'react'
import { currentShows } from '../data/shows'
import { pastShows } from '../data/shows'
import '../css/Shows.css'

export const Shows = () => {

  return (
    <>
        <main className="showBackground">
            <section>
                <div className="cardContainer">
                    {currentShows.map((card, index) => {
                        return (
                            <div className="showCardContainer">
                                <div class="showCards" key={index}>
                                    <a href={card.url} target="_blank" rel="noreferrer">
                                        <button>
                                            <img class="currentImg" src={card.image} alt={card.alt}/>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </section>
                <section>
                    <h3>Past Shows:</h3>
                    <div className="pastCardContainer">
                    {pastShows.map((card, index) => {
                        return (
                            <div className="pastShowCardContainer">
                                <div class="pastShowCards" key={index}>
                                    <img class="pastImg" src={card.image} alt={card.alt}/>
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