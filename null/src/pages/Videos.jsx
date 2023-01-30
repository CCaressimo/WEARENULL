import React from "react";
import { videoClips } from "../data/content";
import '../css/Videos.css'

export const Videos = () => {
    return (
        <>
            <div className="videoContainer">
                {videoClips.map((video, index) => {
                    return (
                        <div className="videoCardContainer">
                            <span key={index}>
                                <a 
                                    href={video.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    >
                                    <button className="videoClips">
                                        <video 
                                            src={video.videoClip} autoPlay loop muted 
                                            playsInline={true} 
                                            disablePictureInPicture={true} />
                                        <h3 className="videoTitle">{video.title}</h3>
                                    </button>
                                </a>
                            </span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}