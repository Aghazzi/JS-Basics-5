document.getElementById("calc").onclick=()=>{
    numb=document.getElementById("numb").value;
    multArray=[]
    for(i=1;i<=12;i++) {
        multArray.push(numb*i)
    }
    alert(multArray)
}
