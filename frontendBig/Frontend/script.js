let backend_path = "http://khaveecedt.bounceme.net:3222/"
var Username = ""
var counter = 0
function signup(){
    let username = document.getElementById("signup_username").value;
    let email = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_password").value;
    (async () => {
        const rawResponse = await fetch(backend_path+"users/sign_up", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, email: email,password:password})
        });     
        if(rawResponse.status == 201){
            Username = username;
            sign_er = document.getElementById('signup-error').innerText = '';
            document.getElementById('register').style.display = "none";
            document.getElementById('select').style.display = "none";
            document.getElementById('login-click').style.display = "none";
            // document.getElementById('wellc').style.display = "block";
            document.getElementById('usernameCard').innerText = Username;
        }else{
            sign_er = document.getElementById('signup-error').innerText = 'something wrong please try again';
        }
    })();
}

async function signin(){
    let username = document.getElementById("login_name").value;
    let password = document.getElementById("login_pass").value;
    const rawResponse = await fetch(backend_path+"users/login", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username,password:password})
    })
    if(rawResponse.status == 201 || rawResponse.status == 200){
        Username = await rawResponse.text();
        sign_er = document.getElementById('login-error').innerText = '';
        document.getElementById('login').style.display = "none";
        document.getElementById('select').style.display = "none";
        document.getElementById('login-click').style.display = "none";
        document.getElementById('usernameCard').innerText = Username;
    }else{
        sign_er = document.getElementById('login-error').innerText = 'something wrong please try again';
    }
}

async function fetch_all(){
    document.getElementById("all_poem_ul").innerHTML = '';
    document.getElementById("all_list_ul").innerHTML = '';
    const rawResponse = await fetch(backend_path+"users/allsubmissions");     
    let jso = await rawResponse.json();
    for(let i = 0;i<jso.length;i++){
        let klon = ""
        for(let j=0;j<4;j++){
            if(jso[i]["klon"][j] != undefined){
                klon += jso[i]["klon"][j]+ "\n"
            }
        }
        let write = jso[i]["username"]
        let li = document.createElement("li");
        let k = document.createElement("p");
        k.innerHTML = klon;
        k.classList.add('postedlist');
        li.appendChild(k)
        let writer = document.createElement("div");
        writer.classList.add('writer');
        let p_writer = document.createElement("p");
        p_writer.innerHTML = write
        writer.appendChild(p_writer);
        li.appendChild(writer)
        document.getElementById("all_poem_ul").appendChild(li)
        let klon2 = ""
        for(let j=0;j<jso[i]["klon"].length;j++){
            if(jso[i]["klon"][j] != undefined){
                klon2 += jso[i]["klon"][j]+ "\n"
            }
        }
        li = document.createElement("li");
        let div1 = document.createElement("div");
        div1.classList.add('postedtext');
        let p1 = document.createElement("p");
        p1.innerHTML = klon2;
        div1.appendChild(p1);
        li.appendChild(div1)

        let div2 = document.createElement("div");
        div2.classList.add('writeby');
        let p2 = document.createElement("p");
        p2.innerHTML = "แต่งโดย: " + write;
        div2.appendChild(p2);
        li.appendChild(div2)
        document.getElementById("all_list_ul").appendChild(li)
    }
    
}

async function postData(){
    let input = document.getElementById("kon").value.split(/[\s\n]+/);
    if(Username != ""){
        if(input.length <4){
            alert("กรอกอย่างน้อย4วรรค")
        }
        else{
            const postconfirm = confirm('ต้องการโพสต์กลอนนี้ใช่หรือไม่?');
            const rawResponse = await fetch(backend_path+"users/submit", {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: Username, klon: input})
            });  
            fetch_all()
        }

    }
    else{
        alert("กรุณาเข้าสู่ระบบ")
    }
    
}

async function search_sample(){
    let input = document.getElementById('searchSample').value;
    document.getElementById("all_poem_ul").innerHTML = '';
    const rawResponse = await fetch(backend_path+"users/allsubmissions");     
    let jso = await rawResponse.json();
    for(let i = 0;i<jso.length;i++){
        let klon = ""
        for(let j=0;j<4;j++){
            if(jso[i]["klon"][j] != undefined){
                klon += jso[i]["klon"][j]+ "\n"
            }
        }
        let write = jso[i]["username"]
        // console.log(write,input)
        if(write.includes(input) || klon.includes(input)|| input == ""){
            let li = document.createElement("li");
            let k = document.createElement("p");
            k.innerHTML = klon;
            k.classList.add('postedlist');
            li.appendChild(k)
            let writer = document.createElement("div");
            writer.classList.add('writer');
            let p_writer = document.createElement("p");
            p_writer.innerHTML = write
            writer.appendChild(p_writer);
            li.appendChild(writer)
            document.getElementById("all_poem_ul").appendChild(li)

        }
    }
}

async function search_all(){
    let input = document.getElementById('searchAll').value;
    document.getElementById("all_list_ul").innerHTML = '';
    const rawResponse = await fetch(backend_path+"users/allsubmissions");     
    let jso = await rawResponse.json();
    for(let i = 0;i<jso.length;i++){
        let klon = ""
        for(let j=0;j<4;j++){
            if(jso[i]["klon"][j] != undefined){
                klon += jso[i]["klon"][j]+ "\n"
            }
        }
        let write = jso[i]["username"]
        // console.log(write,input)
        let klon2 = ""
        for(let j=0;j<jso[i]["klon"].length;j++){
            if(jso[i]["klon"][j] != undefined){
                klon2 += jso[i]["klon"][j]+ "\n"
            }
        }
        li = document.createElement("li");
        let div1 = document.createElement("div");
        div1.classList.add('postedtext');
        let p1 = document.createElement("p");
        p1.innerHTML = klon2;
        div1.appendChild(p1);
        li.appendChild(div1)
        if(write.includes(input) || klon.includes(input)|| input == ""){
            let div2 = document.createElement("div");
            div2.classList.add('writeby');
            let p2 = document.createElement("p");
            p2.innerHTML = "แต่งโดย: " + write;
            div2.appendChild(p2);
            li.appendChild(div2)
            document.getElementById("all_list_ul").appendChild(li)
        }

    }
}

async function del(idm){
    // console.log(idm)
    if (confirm("กดยืนยันเพื่อลบกลอน") == true) {
        const rawResponse = await fetch(backend_path+"users/delete", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:idm})
        });
        let del_success = await rawResponse.json();
        doc = document.getElementById(idm);
        doc.remove();
        fetch_all();
      } else {
      }
}

// function unhidden profile card
var card = document.getElementById("card");
var profile=document.getElementById("profile");
profile.addEventListener("click",function()
{   
    if(Username != ""){
        card.classList.toggle("hidden")
    }
});
var history_btn=document.getElementById("history")
var his=document.getElementById("history-page")
history_btn.addEventListener("click",async function()
{   
    his.classList.toggle("hidden")
    let rawResponse = await fetch(backend_path+"users/allsubmissions");
    let jso = await rawResponse.json();
    let jso_select = []
    for(let i =0;i<jso.length;i++){
        if(jso[i]["username"] == Username){
            console.log(jso_select)
            jso_select.push(jso[i])
        }
    }
    console.log(jso_select)
        for(let i = 0;i<jso_select.length;i++){
            // console.log(jso_select[i]["klon"][0])
            let klon = ""
            for(let j=0;j<jso_select[i]["klon"].length;j++){
                if(jso_select[i]["klon"][j] != undefined){
                    klon += jso_select[i]["klon"][j]+ "\n"
                }
            }
            let li = document.createElement("li");
            let div1 = document.createElement("div");
            div1.classList.add('text');
            div1.innerText = klon;
            li.appendChild(div1);
            let div2 = document.createElement("div");    
            div2.innerHTML = '<div onclick=(del("'+jso_select[i]['_id'] +'")) class="delete ="><svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="delete-model" d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
            li.appendChild(div2)
            li.id = jso_select[i]['_id']
            document.getElementById("his_poem").appendChild(li)
        }
    counter++;
    if(counter%2 ==0){
        document.getElementById("his_poem").innerHTML = "";
    }
});