import { generateImage } from "../image";

describe('image', () => {
  describe("generateImage", () => {
    test('default', async () => {
      const image = await generateImage();
      const buffer = await image.toBuffer();
      expect(buffer).toMatchImageSnapshot({
        customSnapshotIdentifier: "default",
      })
    });
  })
  
});