 /*01.-> for Loop*/
  /* -> 1.1  Table Till 50
    for (let i = 1; i <= 50; i++) {
            console.log(`Table of  ${i}`);
        console.log();
        for (let j = 1; j <= 10; j++) {
           //console.log(` innner  ${j}`);
            console.log(i+"*"+j+"="+i*j);
            
        }
        console.log();
    } 
  */
  /*->  1.2   Array in for loop

    let myArray=["flash","Superman","Batman"];
for (let i = 0; i <myArray.length; i++) {
     console.log(`Value of My Array is :${myArray[i]}`);  
     
}
*/
/* 02-> Break and Continue*/
for(let i=1;i<=20;i++){
    if(i%5==0)
     {
     console.log(`Multiple of 5 detected`);
      continue;
    }
    // else if(i%15==0){
    //  console.log(`Multiple of  ${i} Detected`);
    //  continue;
    // }
    console.log(`the value id ${i}`);
}





