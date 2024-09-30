import { Promo } from "./Promo";
import { v4 as UUID } from "uuid";

export class Product {
    private id: string;
    private name: string;
    private description: string;
    private price: number;
    private imageURL: string | URL;
    private promo: Promo | null;
    

    constructor(
        name: string, 
        price: number,
        description: string,
        imageURL: string | URL ,
        promo: Promo | null
    ){
        this.id = UUID();
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
        this.promo = promo;
    }

    /* Accesseurs */

    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }

    public getImageURL(): URL | string {
        return this.imageURL;
    }

    public getInitialPrice(): number {
        return this.price;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPromo(): Promo | null {
        return this.promo;
    }
}
