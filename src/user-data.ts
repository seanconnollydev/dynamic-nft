export interface UserData {
    id: string;
    address: string;
    level: number;
}

export const getUserData = async (userId: string): Promise<UserData> => {
    // This is where you can map any user data to the UserData interface
    return {
        id: userId,
        address: "0x1234",
        level: 1,
    }
}