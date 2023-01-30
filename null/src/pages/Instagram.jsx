import React from "react";


export const Instagram = ({ feed }) => {
    console.log(feed)

    const images = feed
    return (
        <>
        <div>
            <div className="grid gird-cols-1 md:grid-cols-2 max-w-3xl px-4 sm:px-6 gap-3 mx-auto">
                {images && images.map(image => (
                    <div key={image.id}>
                        <img className="object-cover aspect-square" src={image.media_url} alt={image.caption}/>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export const getStaticProps = async () => {

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.IGTOKEN}`
    const data = await fetch(url)
    const feed = await data.json()

    console.log(feed)

    return {
        props: {
            feed,
        }
    }
}