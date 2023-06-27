import { generateImage } from "../image";
import { UserData } from "../user-data";

describe('image', () => {
  describe("generateImage", () => {
    it('should generate a default image', async () => {
      const image = await generateImage(defaultUserData);
      const buffer = await image.toBuffer();
      expect(buffer).toMatchImageSnapshot({
        customSnapshotIdentifier: "default",
      })
    });

    it.each([10, 15, 20, 39, 81])('should get sassy when user is level 10 or higher', async (level) => {
      const image = await generateImage({
        ...defaultUserData,
        level,
      });
      const buffer = await image.toBuffer();
      expect(buffer).toMatchImageSnapshot({
        customSnapshotIdentifier: `level-${level}`,
      })
    });
  })
});

const defaultUserData: UserData = {
  id: "1234",
  address: "0x1234",
  level: 1,
}