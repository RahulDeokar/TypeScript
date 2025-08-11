var Mobile = /** @class */ (function () {
    function Mobile(name, price, IMEINumber) {
        this.name = name;
        this.price = price;
        this.IMEINumber = IMEINumber;
    }
    Mobile.prototype.getMobileDetails = function () {
        return "Mobile name is " + this.name + " and price is " + this.price;
    };
    Mobile.prototype.getIMEINumber = function () {
        return this.IMEINumber;
    };
    Mobile.prototype.setIMEINumber = function (imei) {
        this.IMEINumber = imei;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    return Mobile;
}());
var Mobile1 = new Mobile("Lenovo", 56500.50, 123456789012345);
Mobile1.setPrice(58000); // Correct way to update protected field
console.log(Mobile1.name);
console.log(Mobile1.getMobileDetails());
console.log("IMEI Number:", Mobile1.getIMEINumber());
console.log("Price:", Mobile1.getPrice());
