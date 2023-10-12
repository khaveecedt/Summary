function check_sara(word){
    let sara = []
    let countoa = 0
    if('์' == word.slice(-1)){
        word = word.slice(0,word.length-2)
    }
    for(let i = 0;i<word.length;i++){
        if (word[i] == 'ะ' || word[i] == 'ั'){
            sara.push('อะ')
        }
        else if(word[i] == 'ิ') {
            sara.push('อิ')
        }
        else if(word[i] == 'ุ'){
            sara.push('อุ')
        }
        else if(word[i] == 'ึ'){
            sara.push('อึ')
        }            
        else if(word[i] == 'ี')  {
            sara.push('อี')
        }          
        else if(word[i] == 'ู'){
            sara.push('อู')
        }             
        else if(word[i] == 'ื'){
            sara.push('อือ')
        }          
        else if(word[i] == 'เ'){
            sara.push('เอ')
        } 
        else if(word[i] == 'แ'){
            sara.push('แอ')
        } 
        else if(word[i] == 'า'){
            sara.push('อา')
        } 
        else if(word[i] == 'โ') {
            sara.push('โอ')
        }
        else if(word[i] == 'ำ') {
            sara.push('อำ')
        }
        else if(word[i] == 'อ') {
            countoa += 1
            sara.push('ออ')
        }
        else if(word[i] == 'ั' && word.includes('ว')) {
            sara.push('อัว')
        }
        else if(word[i] == 'ไ' || word[i] == 'ใ') {
            sara.push('ไอ')
        }
        else if(word[i] == '็'){
            sara.push('ออ')
        }
        else if(word.includes('รร')) {
            if(check_marttra(word) == 'กม'){
                sara.push('อำ')
            }
            else{
                sara.push('อะ')
            }
        }
    }
    if(countoa == 1 && word.slice(-1).includes('อ') &&  !(word.includes('เ'))){
        sara.filter(function(e) { return e !== 'ออ' })
    }
    let countA = 0
    for(let i = 0;i<sara.length;i++){
        if(sara[i] == 'เอ'){
            countA = countA + 1
        }
        if (countA > 1){
            sara.filter(function(e) { return e !== 'เอ' })
            sara.filter(function(e) { return e !== 'เอ' })
            sara.push('แ')
        }
    }
    if(sara.includes('เอ') && sara.includes('อะ')){
        sara.filter(function(e) { return e !== 'เอ' })
        sara.filter(function(e) { return e !== 'อะ' })
        sara.push('เอะ')
    }
    else if(sara.includes('แอ')&& sara.includes('อะ') ){
        sara.filter(function(e) { return e !== 'แอ' })
        sara.filter(function(e) { return e !== 'อะ' })
        sara.push('แอะ')
    }

    if(sara.includes('เอะ') && sara.includes('ออ')){
        sara.filter(function(e) { return e !== 'เอะ' })
        sara.filter(function(e) { return e !== 'ออ' })
        sara.push('เออะ')
    }
    else if(sara.includes('เอ') && sara.includes('อิ')){
        sara.filter(function(e) { return e !== 'เอ' })
        sara.filter(function(e) { return e !== 'อิ' })
        sara.push('เออ')
    }
    else if(sara.includes('เอ') && sara.includes('ออ') && word.includes('อ',word.length)){
        sara.filter(function(e) { return e !== 'เอ' })
        sara.filter(function(e) { return e !== 'ออ' })
        sara.push('เออ')
    }
    else if(sara.includes('โอ') && sara.includes('อะ')){
        sara.filter(function(e) { return e !== 'โอ' })
        sara.filter(function(e) { return e !== 'อะ' })
        sara.push('โอะ')
    }
    else if( sara.includes('เอ') &&  sara.includes('อี')){
        sara.filter(function(e) { return e !== 'เอ' })
        sara.filter(function(e) { return e !== 'อี' })
        sara.push('เอีย')
    } 
    else if(sara.includes('เอ') && sara.includes('อือ')){
        sara.filter(function(e) { return e !== 'เอ' })
        sara.filter(function(e) { return e !== 'อือ' })
        sara.push('อัว') 
    }
    else if (sara.includes('เอ') && sara.includes('อา')){
        sara.filter(function(e) { return e !== 'เอ' })
        sara.filter(function(e) { return e !== 'อา' })
        sara.push('เอา') 
    }
    else if(word.includes('เ') && word.includes('า') && word.includes('ะ')){
        sara = []
        sara.push('เอาะ')
    }

    if (sara.includes('อือ') && sara.includes('เออ')){
        sara.filter(function(e) { return e !== 'เออ' })
        sara.filter(function(e) { return e !== 'อือ' })
        sara.filter(function(e) { return e !== 'เอือ' })
    }
    else if(sara.includes('ออ') && sara.length > 1){
        sara.filter(function(e) { return e !== 'ออ' })  
    }
              
    else if(word.includes('ว') && sara.length == 0){
        sara.push('อัว')
    }
    if(word.includes('ั') && check_marttra(word) == 'กา'){
        sara = []
        sara.push('ไอ')
    }

    if(word == 'เออะ'){
        sara = []
        sara.push('เออะ')
    }
    else if(word == 'เออ'){
        sara = []
        sara.push('เออ')
    }
    else if(word == 'เอ'){
        sara = []
        sara.push('เอ')
    }
    else if(word == 'เอะ'){
        sara = []
        sara.push('เอะ')
    }
    else if(word == 'เอา'){
        sara = []
        sara.push('เอา')
    }
    else if(word == 'เอาะ'){
        sara = []
        sara.push('เอาะ')
    }
 
    if(word.includes('ฤา') || word.includes('ฦา')){
        sara = []
        sara.push('อือ') 
    }

    else if(word.includes('ฤ') || word.includes('ฦ')){
        sara = []
        sara.push('อึ') 
    }

    if(sara.length == 0 && word.length == 2){
        if(word.slice(-1) != 'ร'){
            sara.push('โอะ')
        } 
        else{
            sara.push('ออ')
        }
    }
    
    else if(sara.length == 0 && word.length == 3){
        sara.push('ออ')
    }
    if('บ่' == word){
        sara = []
        sara.push('ออ')
    }
    if(word.includes('ํ')){
        sara = []
        sara.push('อำ')
    }
    if(word.includes('เ') && word.includes('ื') && word.includes('อ')){
        sara = []
        sara.push('เอือ')
    }
    if(word.slice(-1) == 'ว' && word.slice(-2)[0] == 'ั'){
        sara = []
        sara.push('อัว')
    }

    if(sara.length == 0) {
        return 'Cant find Sara in this word'
    } 
    else{
        return sara[0]
    }
}
function check_marttra(word){
    if('์' == word.slice(-1)){
        word = word.slice(0,word.length-2)
    }
            
    if('ร' == word.slice(-1) && ['ต','ท'].includes(word.slice(-2)[0])){
        word = word.slice(0,word.length-1)
    }
    if(word.includes('ำ') || (word.includes('ํ') && word.includes('า')) ||  word.includes('ไ') ||  word.includes('ใ')){
        return 'กา'
    }
    else if(['า','ะ','ิ','ี','ุ','ู','อ'].includes(word.slice(-1)) || (word.includes('ี') && word.slice(-1).includes('ย')) || (word.includes('ื') && word.slice(-1).includes('อ'))){
        return 'กา'
    }
    else if(['ง'].includes(word.slice(-1))){
        return 'กง'
    }
        
    else if(['ม'].includes(word.slice(-1))){
        return 'กม'
    }
        
    else if(['ย'].includes(word.slice(-1))){
        if(word.includes('ั')){
            return 'กา'
        }
        else{
            return 'เกย'
        }
            
    }
    else if(['ว'].includes(word.slice(-1))){
        return 'เกอว'
    }
    else if(['ก','ข','ค','ฆ'].includes(word.slice(-1))){
        return 'กก'
    }
    else if(['จ','ช','ซ','ฎ','ฏ','ฐ','ฑ','ฒ','ด','ต','ถ','ท','ธ','ศ','ษ','ส'].includes(word.slice(-1))){
        return 'กด'
    }
    else if(['ญ',', ณ' ,'น' ,'ร' ,'ล' ,'ฬ'].includes(word.slice(-1))){
        return 'กน'
    }
    else if(['บ', 'ป', 'พ', 'ฟ', 'ภ'].includes(word.slice(-1))){
        return 'กบ'
    }
    else{
        if(word.includes('็')){
            return 'กา'
        }
        else{
            return 'Cant find Marttra in this word'
        }
    }
}

function issumpus(word1,word2){
    marttra1 = check_marttra(word1)
    marttra2 = check_marttra(word2)
    sara1 = check_sara(word1)
    sara2 = check_sara(word2)
    if(sara1 == 'อะ' && marttra1 == 'เกย'){
        sara1 = 'ไอ'
        marttra1 = 'กา'
    }
    else if(sara2 == 'อะ' && marttra2 == 'เกย'){
        sara2 = 'ไอ'
        marttra2 = 'กา'
    }
    if(sara1 == 'อำ' && marttra1 == 'กม'){
        sara1 = 'อำ'
        marttra1 = 'กา'
    }
    else if(sara2 == 'อำ' && marttra2 == 'กม'){
        sara2 = 'อำ'
        marttra2 = 'กา'
    }

    if(marttra1 == marttra2 && sara1 == sara2 || (word1 == 'หนด' && word2 == 'ลด')|| (word1 == 'ลด' && word2 == 'หนด')|| (word1 == 'หัด' && word2 == 'อัด')|| (word1 == 'อัด' && word2 == 'หัด')){
        return true
    }
    else{
        return false
    }
}

function klon8(arr){
    let error = []
    if(arr.length %4 != 0){
        return false
    }
    else{
        let pass_wak = ""
        poembug = {};
        for(let i = 1; i<=arr.length;i++){
            poembug[i] = [];
        }
        console.log(pass_wak)
        for(let i = 1; i<=arr.length;i++){
            if(i%4 == 1){
                // console.log(arr[i-1].at(-1))
                // console.log(arr[i].at(2),arr[i].at(3),arr[i].at(4))
                if(issumpus(arr[i-1].at(-1),arr[i].at(2)) || issumpus(arr[i-1].at(-1),arr[i].at(4))){
                    
                }
                else{
                    poembug[i].push(-1)
                    poembug[i+1].push(2)
                    poembug[i+1].push(4)
                    // error.push("วรรคที่" + String(i) + "คําว่า " + arr[i-1].at(-1) + " ไม่สำผัสกับวรรคที่" + Number(i+1));
                }
            }
            else if(i%4 == 2 && i == 2){
                if(issumpus(arr[i-1].at(-1),arr[i].at(-1))){
                    
                }else{
                    poembug[i].push(-1)
                    poembug[i+1].push(-1)
                    // error.push("วรรคที่" + String(i) + "คําว่า " + arr[i-1].at(-1) + " ไม่สำผัสกับวรรคที่" + Number(i+1) +"คำว่า " + arr[i].at(-1));
                }
            }
            else if(i%4 == 3){
                if(issumpus(arr[i-1].at(-1),arr[i].at(2)) || issumpus(arr[i-1].at(-1),arr[i].at(4))){
                    
                }else{
                    poembug[i].push(-1)
                    poembug[i+1].push(2)
                    poembug[i+1].push(4)
                    // error.push("วรรคที่" + String(i) + "คําว่า " + arr[i-1].at(-1) + " ไม่สำผัสกับวรรคที่" + Number(i+1) +"คำว่า " + arr[i].at(-1));
                }
            }else if(i%4 == 0){
                pass_wak = arr[i-1].at(-1)
            }
            else if(i%4 == 2 && i != 2){
                if(issumpus(arr[i-1].at(-1),arr[i].at(-1)) == false){
                    poembug[i].push(-1)
                    poembug[i+1].push(-1)
                    // error.push("วรรคที่" + String(i) + "คําว่า " + arr[i-1].at(-1) + " ไม่สำผัสกับวรรคที่" + Number(i+1) +"คำว่า " + arr[i].at(-1));
                }
                
                if(issumpus(arr[i-1].at(-1),pass_wak) == false){
                    poembug[i-2].push(-1)
                    poembug[i].push(-1)
                    // error.push("วรรคที่" + String(i) + "คําว่า " + arr[i-1].at(-1) + " ไม่สำผัสกับวรรคสุดท้ายบทก่อนหน้าคำว่า " + pass_wak);
                }
                else{
                    
                }
            }
        }
    }
    return poembug
    
    
}
function loop_check_words(text_arr,err = [],br=false){
    text = ""
    if(err == []){
        for(let i =0;i<text_arr.length;i++){
            text += text_arr[i]
        }
        return text
    }else{
        for(let i =0;i<text_arr.length;i++){
            if(err.includes(i)){
                text += '<span style="color:red;">'+text_arr[i]+'</span>'
            }
            else if(i == text_arr.length-1 && err.includes(-1)){
                text += '<span style="color:red;">'+text_arr[i]+'</span>'
                break
            }
            else{
                text += text_arr[i]
            }

        }
        if(br==true){
            return text+"<br>"
        }else{
            return text+" "
        }
        
    }

}
async function logPoem() {
    
    let allLine = Array();
    let lines = document.getElementById("kon").value.split(/[\s\n]+/);
    for(let i =0;i<lines.length;i++){
        try{
            const response = await fetch(`https://cutpyangs.onrender.com/cut/${lines[i]}`);
            const kum = await response.json();
            allLine.push(kum['cut'])
        }
        catch{
            return 'error cant link word tokenize'
        }
    }
    poem_out = document.getElementById('show_poem');
    err = klon8(allLine)
    all_text = ""
    for(let i=0;i<allLine.length;i++){
        if(i%2!=0){
            all_text += "<div class='ibm'>"+loop_check_words(allLine[i],err[i+1],br=false)+"</div>";
        }else{
            all_text += "<div class='ibm'>"+loop_check_words(allLine[i],err[i+1],br=false)+"</div>";
        }
    }
    poem_out.innerHTML = all_text;
    document.getElementById("headtextID").style.paddingBottom = "1100px";

}


// console.log(klon8([['คิด', 'ถึง', 'น้อง', 'นวล', 'นาง', 'ที่', 'รัก', 'ยิ่ง'],
// ['ด้วย', 'ใจ', 'ลิง', 'ที่', 'พี่', 'นี้', 'ถวิล', 'หา'],
// ['พี่', 'รัก', 'น้อง', 'สุด', 'แล้ว', 'แม่', 'แก้ว', 'ปลา'],
// ['สุข', 'อุ', 'รา', 'ยาม', 'ได้', 'มา', 'รู้', 'จัก', 'กัน'],['คิด', 'ถึง', 'น้อง', 'นวล', 'นาง', 'ที่', 'รัก', 'ยิ่ง'],
// ['ด้วย', 'ใจ', 'จริง', 'ที่', 'พี่', 'นี้', 'ถวิล', 'สรรค์'],
// ['พี่', 'รัก', 'น้อง', 'สุด', 'แล้ว', 'แม่', 'แก้ว', 'นัน'],
// ['สุข', 'อุ', 'รา', 'ยาม', 'ได้', 'มา', 'รู้', 'จัก', 'กัน']]));