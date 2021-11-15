let cart = [
    {id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000},
    {id: 2, productName: "Bardak", quantity: 2, unitPrice: 30},
    {id: 3, productName: "Kalem", quantity: 1, unitPrice: 20},
    {id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100},
    {id: 5, productName: "portmanto", quantity: 3, unitPrice: 30},
    {id: 6, productName: "matara", quantity: 5, unitPrice: 150}
]

cart.map(e => {
    console.log(e.productName + ": " + e.unitPrice * e.quantity)
})

let total = cart.reduce((acc, product)=> acc + product.unitPrice * product.quantity, 0)

console.log("sepet: " + total)

let quantityOver2 = cart.filter(e => e.quantity > 2)

console.log(quantityOver2)

// function addToCart(sepet) {
//     sepet.push({id: 7, productName: "monitör", quantity: 8, unitPrice: 2000})
// }

// addToCart(cart)

// console.log(cart)

// let sayi = 10

// function sayiTopla(number) {
//     number += 1
//     console.log(number)
// }

// sayiTopla(sayi)
// console.log(sayi)