function getVowels(str){
    const m = str.match(/[aeiou]/gi); //ตรวจสอบว่าแมทไหม แล้วไม่สนใจว่าจะตัวเล็กรึตัวใหญ่
    if(m===null){
        return 0
    }
    return m.length;
}
console.log(getVowels("seeing"));