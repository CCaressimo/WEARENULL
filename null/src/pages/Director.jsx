import React, {useState} from 'react'
import "../css/Director.css"
import "../css/Main.css"
import fence from "../assets/fence.mp4"
import HALO from "../imgs/HaloArt.png"
import PURPLE from "../imgs/purpleman.png"
import FENCE from "../imgs/fenceart.png"

export const Director = props => {
    return (
        <>
            <main>
                <video 
                    src={fence} autoPlay loop muted 
                    playsInline={true} 
                    disablePictureInPicture={true} 
                    className="video-container"/>

                <div className='director items-center'>
                    <a href="https://www.youtube.com/@WEARE_NULL" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={HALO} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STREAM ON YOUTUBE</h5>
                        </div>
                    </a>
                    <a href="https://open.spotify.com/artist/4sPUuytxwpAcIprvNPmcLz" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={FENCE} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STREAM ON SPOTIFY</h5>
                        </div>
                    </a>
                    <a href="https://music.apple.com/us/artist/null/1646846261" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={HALO} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STREAM ON APPLE MUSIC</h5>
                        </div>
                    </a>
                    <a href="https://null-merch-store.myshopify.com/" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={PURPLE} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BUY OUR MERCH</h5>
                        </div>
                    </a>
                </div>
            </main>
        </>
    )
}