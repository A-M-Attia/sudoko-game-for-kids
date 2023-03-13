// let picSelected = null;
// let error = 0;

// // username = Request.Form["username"];



// console.log(username, required)


// let bord = ["2..3,3.2.,4.31,...."]

// let solution = ["2413,3124,4231,1342"]



// window.addEventListener("load",(eo) => {
//     getstart()
    
// })

// function getstart(){

//     for (let i = 0; i < 9; i++) {
//         let number = document.createElement("div")
//         number.id = i;
//         number.innerText = i;
//         number.classList.add
        
//     }
// }



async function getUserName(){
    
    try{
    
        let response =await fetch("http://127.0.0.1:5507/game.html") 
        
         let userName =await response.json()


        return userName
        } 
        
    
    catch(error){
        console.log(error)

    }
    
 }
 
 
 let username = getUserName()
 username.then((userName) =>{                // promise  returned data


    
     
    console.log(userName)
    
    
    })

