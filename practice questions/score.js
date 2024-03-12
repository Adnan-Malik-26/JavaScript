let score = prompt ("Enter Your Score: ");


if (score >=80) {
    console.log("You have 'A' Grade");
} else if(score<=79 && score >=70) {
    console.log("You have 'B' grade");
} else if(score <=69 && score >=50){
    console.log("You have 'C' Grade");
}else if(score<=49 && score>=40){
    console.log("You have 'D' Grade");
}else {
    console.log("You have Failed and Your Grade is 'F'");
}