export interface IBasket {
    id: string;
    count: number;
    price: number;
}

export interface IUser {
    username: string,
    id: string;
    email: string;
    password: string;
    user_icon: string;
    firstname?: string;
    surname?: string;
    basket: IBasket[];
}

export interface IUserCreate extends Omit<IUser, "id"> {
    confirmpass?: string
}

export interface IUserChange extends Omit<IUser, "id"> {}

export interface IPassChange {
    password: string;
    confirmpassword: string;
    newpassword: string;
}