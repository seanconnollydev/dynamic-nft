import sharp from "sharp"
import { UserData } from "./user-data"

export const generateImage = async (userData: UserData) => {
    return sharp("./layers/Background/background_1.png")
    .resize(1082)
    .composite([
        ...conditional(await cat()),
        ...conditional(await eyes(userData)),
        ...conditional(await mouth(userData)),
    ])
}

const conditional = (overlay: sharp.OverlayOptions | null) => {
    return overlay ? [overlay] : []
}

const cat = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Cat/cat_1.png").resize(1080)
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 2,
    }
}

const eyes = async (userData: UserData): Promise<sharp.OverlayOptions | null> => {
    const assetPath = userData.level < 10 ? "./layers/Eyes/eyes_1.png" : "./layers/Eyes/eyes_2.png"
    const overlay = sharp(assetPath).resize(560)
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 190,
        left: 234,
    }
}

const mouth = async (userData: UserData): Promise<sharp.OverlayOptions | null> => {
    const assetPath = userData.level < 10 ? "./layers/mouth/mouth_1.png" : "./layers/mouth/mouth_2.png"
    const overlay = sharp(assetPath).resize(338)
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 320,
        left: 345,
    }
}
