interface IBasket {
    id_product: string,
    count: number
}

export interface IUser {
    username: string,
    id: string,
    email: string,
    password: string,
    basket: IBasket[],
    user_icon: string
}

export interface IUserCreate extends Omit<IUser, "id"> {}