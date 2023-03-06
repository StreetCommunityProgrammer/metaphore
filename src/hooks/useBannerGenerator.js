import axios from "axios"
import randomEmoji from "../utils/randomEmoji"
import { useEffect, useState } from "react"

export default function (canonicalName, articleName, gradientColors = null, articleCategory = null, emoji = null) {
    const [image, setImage] = useState('')
    let bgColors = gradientColors === null ? ["#fc00ff", "#00dbde"] : gradientColors
    let categories = articleCategory === null ? 'opensource, metaphor' : articleCategory
    let emoticon = emoji === null ? randomEmoji() : emoji

    useEffect(() => {
        const generate = async () => {
            const request = await axios.post('https://spotless-cyan-shoe.cyclic.app/generator', {
                canonicalName,
                articleName,
                gradientColors: bgColors,
                articleCategory: categories,
                emoji: emoticon
            })
            const response = request.data
            setImage(response.image)
        }
        generate()
    }, [canonicalName, articleName, gradientColors, articleCategory, emoji])

    return image
}
