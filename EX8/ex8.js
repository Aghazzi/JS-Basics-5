function testvalue(i, minNumb, maxNumb,randNumb){

    numb=prompt(`Please enter your number -try ${9-i}/8- :`)
   
    var i,minNumb,maxNumb,randNumb; 
    if(numb<randNumb&&numb>minNumb && i>0){
        let minNumb=numb;
        i-=1
        alert("Too small")
        testvalue(i,minNumb,maxNumb,randNumb)
        
    }
    else if(numb>randNumb&&numb<maxNumb && i>0){
        let maxNumb=numb
        i-=1
        alert("Too large")
        testvalue(i,minNumb,maxNumb,randNumb)
        
    }
    else if(numb<minNumb||numb>maxNumb){
        alert("please put an acceptable number")
        testvalue(i,minNumb,maxNumb,randNumb)
    }
    else if(i==0){
        alert("Nice try and good luck next time")
    }
    else if(numb==randNumb){
        alert(`Hurray, Good Job You Did it with ${8-i} tries!`)
    }
}
document.getElementById("start").onclick=()=>{
let randNumb=Math.floor(Math.random() * 100);
testvalue(8,0,100,randNumb)
}