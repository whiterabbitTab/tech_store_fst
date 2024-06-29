
export interface ISpecs {
    cpu: string;
    featured: string;
    io_ports: string;
}

export interface IProduct {
    id: string,
    type: string;
    category: string;
    price: number;
    discount: number;
    name: string;
    reviews: number;
    colors: string[];
    maker: string;
    description: string;
    image: string;
    image_about: string[];
    status: string;
    date_created: string;
    details: string[];
    specs: ISpecs;
}