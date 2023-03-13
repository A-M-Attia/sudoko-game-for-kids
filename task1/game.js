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





login.addEventListener("click",(eo) => {

    usernameValidation()


    if(username.value)
        if(allLevels[0].selected) {
             eo.target.parentElement.classList.add("hide")
           
                gallery4.classList.remove("hide")
                
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

/////////////////////////board /////////////////////////////////

let board4 = "2.3.1.24......42".split("")
let solution4 = "2431132442133142".split("")

let str4 = ".4..1......3..4."





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
                      
                      start.innerHTML = `<img src= "g4-1/${num}.jpg"> `
                              
                          
                      
                       break;
                        }else if(group4Btn2){
                          start.innerHTML = `<img src= "g4-2/${num}.jpg"> `
                      break;
                            }else if(group4Btn3){
                              start.innerHTML = `<img src= "g4-3/${num}.jpg"> `
                      break;
                                }else if(group4Btn4){
                                  start.innerHTML = `<img src= "g4-4/${num}.jpg"> `
  
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



//////////////////////////////////////////////////////


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
  let row = sodokoTable4.firstElementChild.children[i]

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
          
  }
  
}
}




//////////////////////////////////////////////////////////


//  --------start-action---------------------

start.addEventListener("click", (e) => {
         e.preventDefault();
         
         if(allLevels[0].selected){

            if(timer == null){
                timer =  startTimer()
                time = 61
                }
         }
         
        
          spredImages4 ()
          arrowKeys4 ()
})

       

