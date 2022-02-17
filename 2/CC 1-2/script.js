const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark/heightMark**2;
const BMIjohn = massJohn/heightJohn**2;
const markHigherBMI = BMImark > BMIjohn;
console.log(BMIjohn,BMImark, markHigherBMI);

if(markHigherBMI){
    console.log(`Mark's BMI ${BMImark} is higher than John's! ${BMIjohn} `)
} else {
    console.log(`John's BMI ${BMIjohn} is higher than Mark's! ${BMImark} `)
}