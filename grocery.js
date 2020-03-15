var Grocery = /** @class */ (function () {
    function Grocery(itemName, itemQuantity, itemPrice, itemDeal) {
        this.itemName = itemName;
        this.itemQuantity = itemQuantity;
        this.itemPrice = itemPrice;
        this.itemDeal = itemDeal;
        this.name = itemName;
        this.quantity = itemQuantity;
        this.price = itemPrice;
        this.onDeals = itemDeal;
    }
    return Grocery;
}());
function cartItem(cartList) {
    return "Your cart item is " + cartList.itemName + " $" + cartList.itemPrice + "  and" + " " + "items count: " + cartList.itemQuantity;
}
var apples = new Grocery("Michigan Apples", 2, 5, true);
var bread = new Grocery("Sara Lee", 3, 2, false);
var grapes = new Grocery("Charlies grape ", 3, 9, false);
var milk = Grocery("Almond Milk", 6, 25, true);
var eggs = Grocery("Just Eggs", 11, 45, true);

document.body.innerHTML = cartItem(grapes);
document.body.innerHTML = cartItem(apples);
console.log("Hello world");
