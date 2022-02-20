let bills = [125, 555, 44];

calcTip = _b => {
    if(_b >= 50 && _b <= 300){
        return _b * 0.15;
    }
    else if(_b < 0){
        console.log("Invalid input");
    }
    else{
        return _b * 0.2;
    }
}

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`Tip 1 = ${tips[0]}, Tip 2 = ${tips[1]}, Tip 3 = ${tips[2]},`);

let total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(`Total 1 (bill + tip) = ${total[0]}, Total 2 = ${total[1]}, Total 2 = ${total[2]}`);

