
/* Videos -----------------------------  */
function myVideoFunction(id) {
    if(id == 1) {
        document.getElementById("demo1").innerHTML = "Forugh/2021 <a href='https://vimeo.com/655337855?share=copy' target='_blank'>Link to video</a>";
    } 
    else if (id == 2) {
        document.getElementById("demo2").innerHTML = "I'm a woman./2022 <a href='https://vimeo.com/722377009?share=copy' target='_blank'>Link to video</a>";
    }
    else if (id == 3) {
        document.getElementById("demo3").innerHTML = "The Writing/2023 <a href='https://vimeo.com/843941610?share=copy' target='_blank'>Link to video</a>";
    }
    else if (id == 4) {
        document.getElementById("demo4").innerHTML = "UNMUTED/2023 <a href='https://vimeo.com/845161945?share=copy' target='_blank'>Link to video</a>";
    }
    else if (id == 5) {
        document.getElementById("demo5").innerHTML = "Conversation About Life/2023 <a href='https://vimeo.com/843952275?share=copy' target='_blank'>Link to video</a>";
    }
  }



 /* Animations ----------------------------- */
 function myAnimationFunction(id) {
    if(id == 1) {
        document.getElementById("anim1").innerHTML = "The Metamorphosis/2014 <a href='https://vimeo.com/465149407?share=copy' target='_blank'>Link to animation";
    } 
    else if (id == 2) {
        document.getElementById("anim2").innerHTML = "The Evolution of Love/2020 <a href='https://vimeo.com/464902031?share=copy' target='_blank'>Link to animation";
    }
    else if (id == 3) {
        document.getElementById("anim3").innerHTML = "The Buried Dream/2020 <a href='https://vimeo.com/465076402?share=copy' target='_blank'>Link to animation";
    }
}



/* Publication ----------------------------- */

function myPublicationFunction(id) {
    if(id == 1) {
        document.getElementById("Pub1").innerHTML = "Is It A Choice?/2022 <a href='is it a choice.html'>Link to full document";
    } 
    else if (id == 2) {
        document.getElementById("Pub2").innerHTML = "[un]seen Exhibition/2022";
    }  
}

/* Index */

function myIndexFunction(id) {
    if(id == 1) {
        document.getElementById("Index1").innerHTML = "Forugh Farrokhzad/2021";
    }  
}


/* Poster  */

function myPosterFunction(id) {
    if(id == 1) {
        document.getElementById("Poster1").innerHTML = "A Silent Voice/2020-2023";
    }  
}




/* Illustration -----------------------------  */

function myIllustrationFunction(id) {
    if(id == 1) {
        document.getElementById("Ilu1").innerHTML = "For You/2020";
    } 
}



/* visual identity ----------------------------- */
 
function myLogoFunction(id) {
    if (id == 1) {
        var logoElement = document.getElementById("Logo1");
        logoElement.innerHTML = "Baharestan/2019<br><span class='logo-text'>Identity, Logo</span>";
        
        var logoTextElement = logoElement.querySelector(".logo-text");
        logoTextElement.style.color = "lightgrey";
        logoTextElement.style.lineHeight = "2"; 
    }
    else if (id == 2) {
        var logoElement = document.getElementById("Logo2");
        logoElement.innerHTML = "Melody/2017<br><span class='logo-text'>Identity, Logo</span>";
        
        var logoTextElement = logoElement.querySelector(".logo-text");
        logoTextElement.style.color = "lightgrey";
        logoTextElement.style.lineHeight = "2";  
        
    }
    else if (id == 3) {
        var logoElement = document.getElementById("Logo3");
        logoElement.innerHTML = "Yazdan Art & Cultural Center/2017<br><span class='logo-text'>Identity, Logo</span>";
        
        var logoTextElement = logoElement.querySelector(".logo-text");
        logoTextElement.style.color = "lightgrey";
        logoTextElement.style.lineHeight = "2";  
        
    }
    else if (id == 4) {
        var logoElement = document.getElementById("Logo4");
        logoElement.innerHTML = "Aryamanesh Construction Co./2016<br><span class='logo-text'>Identity, Logo</span>";
        
        var logoTextElement = logoElement.querySelector(".logo-text");
        logoTextElement.style.color = "lightgrey";
        logoTextElement.style.lineHeight = "2";  
        
    }
    else if (id == 5) {
        var logoElement = document.getElementById("Logo5");
        logoElement.innerHTML = "Textile Co./2016<br><span class='logo-text'>Identity, Logo</span>";
        
        var logoTextElement = logoElement.querySelector(".logo-text");
        logoTextElement.style.color = "lightgrey";
        logoTextElement.style.lineHeight = "2";  
        
    }
}








