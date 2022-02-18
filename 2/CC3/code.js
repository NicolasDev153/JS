let Dscore = 96;
let Dscore1 = 112;
let Dscore2 = 89;

let Kscore = 88;
let Kscore1 = 91;
let Kscore2 = 110;

const Davg = (Dscore + Dscore1 + Dscore2)/3;
const Kavg = (Kscore + Kscore1 + Kscore2)/3;
const minScore = 100;

console.log(Davg,Kavg);


if(Davg > Kavg && Davg >= minScore) {
    console.log(`Dolphins won(${Davg}) by ${Davg - Kavg}`);
}
else if(Davg < Kavg && Kavg >= minScore){
    console.log(`Dolphins won(${Kavg}) by ${Kavg - Davg}`);
}
else if(Davg === Kavg && Davg >= minScore && Kavg >= minScore){
    console.log('Draw');
}