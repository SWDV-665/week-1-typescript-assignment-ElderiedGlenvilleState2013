 

 class Grocery {
    name : string;
    quantity : number;
    price : number;
    onDeals : boolean;

    constructor(public itemName : string, public itemQuantity : number, public itemPrice : number, public itemDeal : boolean) {
        this.name = itemName;
        this.quantity = itemQuantity;
        this.price = itemPrice;
        this.onDeals = itemDeal;
    }
        
    


}

interface ShoppingList {
    itemName : string,
    itemQuantity : number,
    itemPrice : number,
    itemDeal : boolean,
}

function  cartItem(cartList: ShoppingList) {
    return "Your cart item is " + cartList.itemName + " " + cartList.itemPrice;
}

let apples = new Grocery("Michigan Apples", 2, 5, true);

let bread = new Grocery("Sara Lee", 1, 2, false);

let grapes = new Grocery("Charlies grape ", 3, 9, false);

document.body.textContent = cartItem(grapes);
document.body.innerHTML = cartItem(grapes);

console.log("Hello world");
