document.getElementById("calc").onclick=()=>{
    sum=0
    numb=document.getElementById("numb").value;
    for (i = 0; i <= numb; i++)
    if (i%3 == 0 || i%5 == 0) {
            sum = sum+i
    }
    alert(sum)
}