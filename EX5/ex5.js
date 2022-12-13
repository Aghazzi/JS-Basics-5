document.getElementById("calc").onclick=()=>{
    choice=document.getElementById("choice").value
    numb=document.getElementById("numb").value;
    if(choice=="+"){
    sum=0
    for(i=0;i<numb;i++){
            sum+=i+1

    }
    alert("The Sum is:\n"+sum)
    }
    else if(choice=="x"){
    mult=1
    for(i=numb;i>1;i--){
        mult=mult*i
    }
    alert(mult)
    }
    else{
        alert("plz submit an acceptable operation x or +")
    }
}