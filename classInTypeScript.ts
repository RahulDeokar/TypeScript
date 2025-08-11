class Mobile {
    public name: string;
    protected price: number;
    private IMEINumber: number;

    constructor(name: string, price: number, IMEINumber: number) {
        this.name = name;
        this.price = price;
        this.IMEINumber = IMEINumber;
    }

    getMobileDetails(): string {
        return "Mobile name is " + this.name + " and price is " + this.price;
    }

    getIMEINumber(): number {
        return this.IMEINumber;
    }

    setIMEINumber(imei: number): void {
        this.IMEINumber = imei;
    }

    setPrice(newPrice: number): void {
        this.price = newPrice;
    }

    getPrice(): number {
        return this.price;
    }
}

let Mobile1 = new Mobile("Lenovo", 56500.50, 123456789012345);

Mobile1.setPrice(58000);  // Correct way to update protected field

console.log(Mobile1.name); 
console.log(Mobile1.getMobileDetails());
console.log("IMEI Number:", Mobile1.getIMEINumber());
console.log("Price:", Mobile1.getPrice());
