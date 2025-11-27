const priceRose = 8;
const priceLily = 10;
const priceTulip = 2;

let qtyRose = 70;
let qtyLily = 50;
let qtyTulip = 120;

displayInventory(priceRose, qtyRose, priceLily, qtyLily, priceTulip, qtyTulip);

qtyRose -= 20;
qtyLily -= 30;

displayInventory(priceRose, qtyRose, priceLily, qtyLily, priceTulip, qtyTulip);

function displayInventory(priceRose, qtyRose, priceLily, qtyLily, priceTulip, qtyTulip) {
    let valueRose = priceRose * qtyRose;
    let valueLily = priceLily * qtyLily;
    let valueTulip = priceTulip * qtyTulip;

    let totalValue = valueRose + valueLily + valueTulip;

    console.log("Rose - unit price:", priceRose, ", quantity:", qtyRose, ", total value:", valueRose);
    console.log("Lily - unit price:", priceLily, ", quantity:", qtyLily, ", total value:", valueLily);
    console.log("Tulip - unit price:", priceTulip, ", quantity:", qtyTulip, ", total value:", valueTulip);
    console.log("Total: ", totalValue);
}