import sharp from "sharp"
import { UserData } from "./user-data"

export const generateImage = async (userData: UserData) => {
    return sharp("./layers/Background/background_1.png")
    .resize(1082)
    .composite([
        ...conditional(await cat()),
        ...conditional(await eyes()),
        ...conditional(await mouth()),
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

const eyes = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Eyes/eyes_1.png").resize(560)
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 190,
        left: 234,
    }
}

const mouth = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/mouth/mouth_1.png").resize(338)
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 320,
        left: 345,
    }
}

const bottomLid = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Bottom lid/High#20.png")
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}

const eyeColor = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Eye color/Cyan#1.png")
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}

const eyeball = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Eyeball/Red#50.png")
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}

const goo = async (userData: UserData): Promise<sharp.OverlayOptions | null> => {
    // Only show goo for users with level 10 or higher
    if (userData.level < 10) {
        return null
    }
    const overlay = sharp("./layers/Goo/Green#1.png").resize(512)
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}

const iris = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Iris/Large#20.png")
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}

const shine = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Shine/Shapes#100.png")
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}

const topLid = async (): Promise<sharp.OverlayOptions | null> => {
    const overlay = sharp("./layers/Top lid/High#30.png")
    const buffer = await overlay.toBuffer()
    return {
        input: buffer,
        top: 0,
        left: 0,
    }
}