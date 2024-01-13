// function cutEmail(){
//     var emailInput=document.getElementById("emailInput");
//     if(emailInput.value.includes("@")){ //ممكن هنا استخدم indexof وترجعلي -1 
        
    
//     // console.log(emailInput)
//     var indexOf = emailInput.value.indexOf("@");
//     // console.log(indexOf);
//     var nameInput=document.getElementById("nameInput");
//     var domain =document.getElementById("domain");
//     nameInput.value=emailInput.value.slice(0,indexOf);

//     domain.value=emailInput.value.slice(indexOf+1);}
//     else{
//         alert("Enter vaild email");
//     }

// }


function cutEmail(){
    var emailInput=document.getElementById("emailInput");
    if(emailInput.value.indexOf("@")!= -1){ 
        
    
    // console.log(emailInput)
    var indexOf = emailInput.value.indexOf("@");
    // console.log(indexOf);
    var nameInput=document.getElementById("nameInput");
    var domain =document.getElementById("domain");
    nameInput.value=emailInput.value.slice(0,indexOf);

    domain.value=emailInput.value.slice(indexOf+1);}
    else{
        alert("Enter vaild email");
    }

}



