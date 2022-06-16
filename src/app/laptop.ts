import { Brand } from "./brand";

export class Laptop {
    laptopId:number=0;
    laptopName:String="";
    version:String="";
    price:number=0;
    brandId:number=0;
    brand: Brand={
        brandId: 0,
        brandName: "",
        showroomId: ""
    }
}
