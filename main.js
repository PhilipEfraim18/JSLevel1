var pennies = 0;
var pennyAmount = 0;
var nickels = 0;
var nickelAmount = 0;
var dimes = 0;
var dimeAmount = 0;
var quarters = 0;
var quarterAmount = 0;
var totalAmount = 0;
function addPennies(){
    pennies++;
    pennyAmount += .01;
    totalAmount += .01;
    let y = document.getElementById("totalPennies");
    y.innerHTML = "Total Pennies: " + pennies;
    let x = document.getElementById("totalAmountPennies");
    x.innerHTML = "Total Amount in Pennies: $" + Math.round(pennyAmount * 100) / 100;
    let z = document.getElementById("TotalAmount");
    z.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;

}
function subtractPennies(){
    if(pennies > 0){
        pennies--;
        pennyAmount -=.01;
        totalAmount -= .01;
        let y = document.getElementById("totalPennies");
        y.innerHTML = "Total Pennies: " + pennies;
        let x = document.getElementById("totalAmountPennies");
        x.innerHTML = "Total Amount in Pennies: $" + Math.round(pennyAmount * 100) / 100;
        let z = document.getElementById("TotalAmount");
        z.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;
    }
}
function addNickels(){
    nickels++;
    nickelAmount += .05;
    totalAmount += .05;
    let y1 = document.getElementById("totalNickels");
    y1.innerHTML = "Total Nickels: " + nickels;
    let x1 = document.getElementById("totalAmountNickels");
    x1.innerHTML = "Total Amount in Nickels: $" + Math.round(nickelAmount * 100) / 100;
    let z1 = document.getElementById("TotalAmount");
    z1.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;

}
function subtractNickels(){
    if(nickels > 0){
        nickels--;
        nickelAmount -=.05;
        totalAmount -= .05;
        let y = document.getElementById("totalNickels");
        y.innerHTML = "Total Nickels: " + nickels;
        let x = document.getElementById("totalAmountNickels");
        x.innerHTML = "Total Amount in Nickels: $" + Math.round(nickelAmount * 100) / 100;
        let z = document.getElementById("TotalAmount");
        z.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;
    }
}
function addDimes(){
    dimes++;
    dimeAmount += .10;
    totalAmount += .10;
    let y1 = document.getElementById("totalDimes");
    y1.innerHTML = "Total Dimes: " + dimes;
    let x1 = document.getElementById("totalAmountDimes");
    x1.innerHTML = "Total Amount in Dimes: $" + Math.round(dimeAmount * 100) / 100;
    let z1 = document.getElementById("TotalAmount");
    z1.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;

}
function subtractDimes(){
    if(dimes > 0){
        dimes--;
        dimeAmount -=.10;
        totalAmount -= .10;
        let y = document.getElementById("totalDimes");
        y.innerHTML = "Total Dimes: " + dimes;
        let x = document.getElementById("totalAmountDimes");
        x.innerHTML = "Total Amount in Dimes: $" + Math.round(dimeAmount * 100) / 100;
        let z = document.getElementById("TotalAmount");
        z.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;
    }
}
function addQuarters(){
    quarters++;
    quarterAmount += .25;
    totalAmount += .25;
    let y1 = document.getElementById("totalQuarters");
    y1.innerHTML = "Total Quarters: " + quarters;
    let x1 = document.getElementById("totalAmountQuarters");
    x1.innerHTML = "Total Amount in Quarters: $" + Math.round(quarterAmount * 100) / 100;
    let z1 = document.getElementById("TotalAmount");
    z1.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;

}
function subtractQuarters(){
    if(quarters > 0){
        quarters--;
        quarterAmount -=.25;
        totalAmount -= .25;
        let y = document.getElementById("totalQuarters");
        y.innerHTML = "Total Quarters: " + quarters;
        let x = document.getElementById("totalAmountQuarters");
        x.innerHTML = "Total Amount in Quarters: $" + Math.round(quarterAmount * 100) / 100;
        let z = document.getElementById("TotalAmount");
        z.innerHTML = "Total Amount : $" + Math.round(totalAmount * 100) / 100;
    }
}



