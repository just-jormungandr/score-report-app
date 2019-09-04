/*
The application in this repo should print:

- 'Excellent', if score is HIGHER THAN 80
- 'Good Job' if score is IN THE RANGE OF 60 UNTIL 80 (60 and 80 is included)
- 'Don't give up' if score is BELOW 60
*/

let score = '80'

if(score > 80){
  console.log('Excellent')
} else if (score >= 60 && score <= 80){
  console.log('Good job')
} else {
  console.log('Don\'t give up')
}