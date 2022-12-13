document.getElementById("calc").onclick=()=>{
    primeArray=[]
    const numb1 = parseInt(document.getElementById("numb1").value);
    const numb2 = parseInt(document.getElementById("numb2").value);
    console.log(`The prime numbers between ${numb1} and ${numb2} are:`);
if(numb1>numb2){
    alert("The second number should be higher than the first number!")
}
else{
    for (i = numb1; i <= numb2; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i >= 1 && flag == 0) {
            primeArray.push(i);
        }
    }
    alert(primeArray)
    }
}