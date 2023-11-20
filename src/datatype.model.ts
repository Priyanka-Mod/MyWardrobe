export interface User{
    name:string,
    email:string,
    gstin?:string,
    password:string,
    catagory:string,
    id:number
}
export interface Product{
    product_name:string,
    product_image:string,
    product_price:number,
    product_quantity:number,
    id:number
}