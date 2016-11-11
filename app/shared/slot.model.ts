export class SlotModel  {
    public fullName: string;
    public contactPhone: string;

    constructor(public _id: Number, public from: Date, public to: Date) {  
        this.fullName = "";
        this.contactPhone = "";         
    }     
}