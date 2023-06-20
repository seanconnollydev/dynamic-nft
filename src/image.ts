import sharp from "sharp"

export const generateImage = async () => {
    return sharp("./layers/Background/Black#1.png").composite([
        ...conditional(await eyeball()),
        ...conditional(await eyeColor()),
        ...conditional(await iris()),
        ...conditional(await shine()),
        ...conditional(await bottomLid()),
        ...conditional(await topLid()),
        ...conditional(await goo()),
    ])
}

const conditional = (overlay: sharp.OverlayOptions | null) => {
    return overlay ? [overlay] : []
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

const goo = async (): Promise<sharp.OverlayOptions | null> => {
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