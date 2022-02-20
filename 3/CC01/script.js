'use strict';

const calcAverage = (_a, _b, _c) => (_a + _b + _c) / 3;

let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(85,54,41);


function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins > avgKoalas * 2){
        console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if(avgKoalas > avgDolphins * 2){
        console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins})`);
    }
    else{
        console.log("There is no winner!");
    }
}

console.log(checkWinner(avgDolphins,avgKoalas));

const calcAge = function(_birthYear){
    return 2037 - _birthYear;
}


const years = [1990, 1967, 1950, 2001];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [years[0], years[1], years[years.length - 1]];
console.log(ages);
