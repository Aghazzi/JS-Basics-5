function generateRandom(maxLimit = 100){
    let rand = Math. random() * maxLimit;
    console. log(rand);
    ​
    rand = Math. floor(rand); // 99.
    ​
    return rand;
    }