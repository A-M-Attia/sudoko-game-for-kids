 login = document.getElementById("login")


 username = document.getElementById("user_login")

 required = document.getElementById("required")

  allLevels = document.querySelectorAll("select[name=select] option ")


 
 let gallery9 = document.querySelector(".gallery9")
 let gallery4 = document.querySelector(".gallery4")

 allgroupBtn = document.querySelectorAll(".groupBtn")
  groupBtn4 = document.querySelectorAll(".groupBtn4")
 groupBtn9 = document.querySelectorAll(".groupBtn9")

selectedGroup = document.querySelector("userGroup")
 container4 = document.querySelector(".playcontainer4")
 picDivHeader4 = document.querySelector(".pic-4")
 picDivHeader9 = document.querySelector(".pic-9")


 container9 = document.querySelector(".playcontainer9")
 sodokoContainer = document.querySelector(".sodokoContainer")
 sodokoTable9 = document.querySelector(".table9")
 sodokoTable4 = document.querySelector(".table4")
 selectedPics = document.querySelectorAll(".imgContainer")
welcome = document.querySelector(".welcome")
let welcome4 = document.getElementById("welcome")
let start = document.getElementById("start")
let timeSection4 = document.getElementById("time4")
let timeSection9 = document.getElementById("time9")

let group9Btn1 =false;
let group9Btn2 =false;
let group9Btn3 =false;
let group9Btn4 =false;
let userArr = [];

function activeGroup9Btn1() { group9Btn1 = true }
function activeGroup9Btn2() { group9Btn2 = true }
function activeGroup9Btn3() { group9Btn3 = true }
function activeGroup9Btn4() { group9Btn4 = true }



function usernameValidation (){

    username.addEventListener("blur", (e) => {
        if(username.value == ""){
            required.classList.remove("hide")
        }else{
            required.classList.add("hide")
            login.removeAttribute("disabled")
            login.classList.add("hover")
           


        }
    })
   
}
usernameValidation()



// function redirectToGalleryPage(url) {

    
//     window.location.href = url;
// }



 




login.addEventListener("click",(eo) => {

    usernameValidation()


    if(username.value)
        if(allLevels[0].selected) {
             eo.target.parentElement.classList.add("hide")
           
                gallery4.classList.remove("hide")
                
        }else{
            eo.target.parentElement.classList.add("hide")

                gallery9.classList.remove("hide")

                
            }

            
        
        
    

    
})

/////////////////////////redirect to play/////////////////////////////////

groupBtn4.forEach(element => {
    
    element.addEventListener("click", (eo) => {
       
        eo.target.parentElement.parentElement.parentElement.classList.add("hide")
        container4.classList.remove("hide")
        picDivHeader4.classList.remove("hide")
        sodokoContainer.classList.remove("hide")
        sodokoTable4.classList.remove("hide")
       
        picDivHeader4.innerHTML = eo.target.parentElement.querySelector(".imgContainer").innerHTML    
        welcome4.innerText = `welcome ${username.value }`


        

    })
});



groupBtn9.forEach(element => {
    
    element.addEventListener("click", (eo) => {
        
        
        eo.target.parentElement.parentElement.parentElement.classList.add("hide")
        container9.classList.remove("hide")
        picDivHeader9.classList.remove("hide")
        sodokoContainer.classList.remove("hide")
        sodokoTable9.classList.remove("hide")
       
        picDivHeader9.innerHTML = eo.target.parentElement.querySelector(".imgContainer9").innerHTML     
        welcome.innerText = `welcome ${username.value}`

    })
});

 board4 = "2.3.1.24......42".split("")
let solution4 = "2431132442133142".split("")
let str4 = ".4..1......3..4."





let board = "..8.9.5..1.4...6..57....2..2.3.......56..9.2.89..231..3.17..9..765.3.41898.5...6.".split("")

let solution = "628197534134258679579364281213475896456819327897623145341786952765932418982541763".split("")

let str = ".41.......3...9..8..9....34123.65..9.578...2.....23..5......89.814972.5...5..8.4."



function tableArr (str){


    let arr = []
for (let i = 0; i < 9; i++) {

    let internalArr = []
    for (let j = 0; j < 9; j++) {
        internalArr.push(str[9 * i + j]);
        
    }
    arr.push(internalArr)
}
return arr
}




function spredImages (){
for (let i = 0; i < sodokoTable9.firstElementChild.children.length; i++) {
    let row = sodokoTable9.firstElementChild.children[i]
    

    for (let t = 0; t < row.children.length; t++) {

let cell = tableArr(board)[i][t]

if(cell == "."){
    
    cell= 0;
   
}
              if(group9Btn1){
            row.children[t].innerHTML = `<img  src="g1/${cell}.jpg"/>`
              }else if(group9Btn2){
                row.children[t].innerHTML = `<img  src="g2/${cell}.jpg"/>`
                  }else if(group9Btn3){
                    row.children[t].innerHTML = `<img  src="g3/${cell}.jpg"/>`
                      }else if(group9Btn4){
                        row.children[t].innerHTML = `<img  src="g4/${cell}.jpg"/>`
                          }
            // console.log(row.children[t].data , row.children[t].data)
    }
    
}
}


//////////////////////////////arror-key/////////////////////////////

function arrowKeys (){
let start = document.querySelector(".table9 tr td");

start.focus();
start.style.backgroundColor = '#50b988';
start.style.color = 'white';

const changeStyle = (sibling) => {
  if (sibling !== null) {
    start.focus();
    start.style.backgroundColor = '';
    start.style.color = '';
    sibling.focus();
    sibling.style.backgroundColor = '#50b988';
    sibling.style.color = 'white';
    start = sibling;
  }
}

const checkKey = (event) => {
  event = event || window.event;
  const idx = start.cellIndex;

  if (event.keyCode === 38){
    // up arrow
    const previousRow = start.parentElement.previousElementSibling;
    if (previousRow !== null) {
      const previousSibling = previousRow.cells[idx];
      changeStyle(previousSibling);
    }
  } else if (event.keyCode === 40) {
    // down arrow
    const nextRow = start.parentElement.nextElementSibling;
    if (nextRow !== null) {
      const nextSibling = nextRow.cells[idx];
      changeStyle(nextSibling);
    }
  } else if (event.keyCode === 37) {
    // left arrow
    const previousSibling = start.previousElementSibling;
    changeStyle(previousSibling);
  } else if (event.keyCode === 39) {
    // right arrow
    const nextsibling = start.nextElementSibling;
    changeStyle(nextsibling);
  }else if(true){

    document.body.addEventListener("keydown",(eo) => {
        
            console.log(eo.key)
        for (let num = 1; num <= 9; num++) {
           
            if(eo.key== num){
          
                if(group9Btn1){
                    if(start.className != ("dimt")){
                    start.innerHTML = `<img src= "g1/${num}.jpg"> `}
                            
                        
                    
                     break;
                      }else if(group9Btn2){
                        if(start.className != ("dimt")){
                        start.innerHTML = `<img src= "g2/${num}.jpg"> `}
                    break;
                          }else if(group9Btn3){
                            if(start.className != ("dimt")){
                            start.innerHTML = `<img src= "g3/${num}.jpg"> `}
                    break;
                              }else if(group9Btn4){
                                if(start.className != ("dimt")){
                                start.innerHTML = `<img src= "g4/${num}.jpg"> `}

                    break;
                                  }
                
        
                 
            }
        }
        
     })
  }
 
}

document.onkeydown = checkKey;
}


//////////////////////////////start////////////////////////////////////////

 time = 60
 let timer = null

 function startTimer(){
   return  setInterval(() => {
    time--
    timeSection4.innerText = time
       
        
    
        if(time < 1){
            clearInterval(timer);
            timer = null
            alert("Lost!! Try again")
            time = 60
        }
        
    }, 1000);
 }






//  function playGame () { 
//      currentCell = document.querySelector(".table9 tr td");
   

    
//      currentCell.addEventListener("keydown",(eo) => {
//         currentCell.focus();
//         if(currentCell.innerText == 1)
//         currentCell.innerHTML = 
//      })

//   }

//  --------start-action---------------------

start.addEventListener("click", (e) => {
         e.preventDefault();
         
         if(allLevels[0].selected){

            if(timer == null){
                timer =  startTimer()
                time = 61
                }
                spredImages4 ()
         arrowKeys4 ()
                
         }else if(allLevels[1].selected){
            time = 121
            if(timer == null){
           timer = setInterval(() => {
                
                   
                    time--
            timeSection9.innerText = time

                
                    if(time < 1){
                        clearInterval(timer);
                        timer = null
                        alert("Lost!! Try again")
                        
                    }
                    
                }, 1000);
            }
            spredImages()
                arrowKeys ()
         }
         
         

})







function tableArr4 (str4){


    let arr = []
for (let i = 0; i < 4; i++) {

    let internalArr = []
    for (let j = 0; j < 4; j++) {
        internalArr.push(str4[4 * i + j]);
        
    }
    arr.push(internalArr)
}
return arr
}

let group4Btn1 =false;
let group4Btn2 =false;
let group4Btn3 =false;
let group4Btn4 =false;

function activeGroup4Btn1() { group4Btn1 = true }
function activeGroup4Btn2() { group4Btn2 = true }
function activeGroup4Btn3() { group4Btn3 = true }
function activeGroup4Btn4() { group4Btn4 = true }


function spredImages4 (){
for (let i = 0; i < sodokoTable4.firstElementChild.children.length; i++) {
     row = sodokoTable4.firstElementChild.children[i]

    for (let t = 0; t < row.children.length; t++) {
        console.log(row.children.length)

let cell = tableArr4(board4)[i][t]

if(cell == "."){
    
    cell= 0;
   
}
              if(group4Btn1){
            row.children[t].innerHTML = `<img  src="g4-1/${cell}.jpg"/>`
              }else if(group4Btn2){
                row.children[t].innerHTML = `<img  src="g4-2/${cell}.jpg"/>`
                  }else if(group4Btn3){
                    row.children[t].innerHTML = `<img  src="g4-3/${cell}.jpg"/>`

                      }else if(group4Btn4){
                        row.children[t].innerHTML = `<img  src="g4-4/${cell}.jpg"/>`
                          }
            // console.log(row.children[t].data , row.children[t].data)
    }
    
}

}


//////////////////////////////arror-key/////////////////////////////


function arrowKeys4 (){
let start = document.querySelector(".table4 tr td");

start.focus();
start.style.backgroundColor = '#50b988';
start.style.color = 'white';

const changeStyle = (sibling) => {
  if (sibling !== null) {
    start.focus();
    start.style.backgroundColor = '';
    start.style.color = '';
    sibling.focus();
    sibling.style.backgroundColor = '#50b988';
    sibling.style.color = 'white';
    start = sibling;
  }
}

const checkKey = (event) => {
  event = event || window.event;
  const idx = start.cellIndex;

  if (event.keyCode === 38){
    // up arrow
    const previousRow = start.parentElement.previousElementSibling;
    if (previousRow !== null) {
      const previousSibling = previousRow.cells[idx];
      changeStyle(previousSibling);
    }
  } else if (event.keyCode === 40) {
    // down arrow
    const nextRow = start.parentElement.nextElementSibling;
    if (nextRow !== null) {
      const nextSibling = nextRow.cells[idx];
      changeStyle(nextSibling);
    }
  } else if (event.keyCode === 37) {
    // left arrow
    const previousSibling = start.previousElementSibling;
    changeStyle(previousSibling);
  } else if (event.keyCode === 39) {
    // right arrow
    const nextsibling = start.nextElementSibling;
    changeStyle(nextsibling);
  }else if(true){

    document.body.addEventListener("keydown",(eo) => {
        
            console.log(eo.key)
        for (let num = 1; num <= 4; num++) {
           
            if(eo.key== num){
          
                if(group4Btn1){
                    
                    if(start.className != ("dimt")){
                    start.innerHTML = `<img src= "g4-1/${num}.jpg"> `}
                   
                     
                     break;
                      }else if(group4Btn2){
                        if(start.className != ("dimt")){
                        start.innerHTML = `<img src= "g4-2/${num}.jpg"> `}
                    break;
                          }else if(group4Btn3){
                            if(start.className != ("dimt")){
                            start.innerHTML = `<img src= "g4-3/${num}.jpg"> `}
                    break;
                              }else if(group4Btn4){
                                if(start.className != ("dimt")){
                                start.innerHTML = `<img src= "g4-4/${num}.jpg"> `}

                    break;
                                  }
                
        
                 
            }
        }
     

     })
  }
 
}

document.onkeydown = checkKey;
}

// function xxx () { 

     
//         document.body.addEventListener("keydown",(eo) => {
//             let gameImg = document.createElement("img")
//             gameImg.classList.add("responsice-img")
//                 console.log(eo.key)
//             for (let num = 1; num <= 9; num++) {
               
//                 if(eo.key== num){
              
//                     if(group9Btn1){
//                         gameImg.src  = `g1/${num}.jpg`
//                         sodokoTable9
//                         break;
//                           }else if(group9Btn2){
//                             gameImg.src  = `g2/${num}.jpg`
//                         break;
//                               }else if(group9Btn3){
//                                 gameImg.src  = `g3/${num}.jpg`
//                         break;
//                                   }else if(group9Btn4){
//                                     gameImg.src  = `g4/${num}.jpg`
//                         break;
//                                       }
                    
            
                     
//                 }
//             }
            
//          })
    
//  }
