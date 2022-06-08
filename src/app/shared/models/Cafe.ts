export class Cafe{
    id!:number;
    name!:string;
    price!:number;
    quantity!:number;
    tags?:string[];
    favorite: boolean=false;
    stars:number=0; 
    imageUrl!:string;
    description?:string;
    feedback?:string; 
}