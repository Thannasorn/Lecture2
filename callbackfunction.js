function createQuote(quote, callback){ //ไป2
    let myQuote = "Like I always say, " + quote; //เอา 2 กับ 10 มาต่อกัน ไป3
    callback(myQuote) //2  เรียกหาฟังชันที่ส่งไปแต่แรก ข้ามไป6
}

function logQuote(quote){  //ทำงานฟังชัน
    console.log(quote + ' Yes..');
}

createQuote(" you will getting better!", logQuote); //เริ่มที่นี้ ไปบรรทัด1