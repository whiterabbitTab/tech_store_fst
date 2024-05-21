export interface IUser {
    username: string,
    id: string,
    email: string,
    password: string,
    basket: {
        id_product: number
    },
    user_icon: string
}

export interface IUserCreate extends Omit<IUser, "id"> {}