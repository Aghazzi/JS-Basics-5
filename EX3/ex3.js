document.getElementById("calc").onclick=()=>{
    sum=0
    numb=document.getElementById("numb").value;
    for(i=0;i<numb;i++){
            sum+=i+1

    }
    alert(sum)
}