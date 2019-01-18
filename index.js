document.addEventListener("DOMContentLoaded", (e) => {
  
 document.getElementById("title").innerHTML = movies.Titanic.title;
 document.getElementById("director").innerHTML = movies.Titanic.director;
 document.getElementById("genre").innerHTML = movies.Titanic.genre;
 document.getElementById("filmRating").innerHTML = movies.Titanic.filmRating;
 document.getElementById("poster").setAttribute("src", movies.Titanic.poster);
 document.getElementById("audienceScore").innerHTML = movies.Titanic.audienceScore;
 document.getElementById("description").innerHTML = movies.Titanic.description;
 

 
 
 for (let i = 0; i < movies.Titanic.cast.length; i++) {
   for (key in movies.Titanic.cast[i]) {
     console.log(movies.Titanic.cast[i][key])
   }} 


 for (let i = 0; i < movies.Titanic.cast.length; i++) {
     let JSONrole = movies.Titanic.cast[i]["role"];
     let JSONactor = movies.Titanic.cast[i]["actor"];
     let output = JSONrole + ": " + JSONactor + "<br><br>";
     document.getElementById("cast").innerHTML += output;
   } 


 for (let i = 0; i < movies.Titanic.reviews.length; i++) {
     let JSONusername = movies.Titanic.reviews[i]["username"];
     let JSONcontent = movies.Titanic.reviews[i]["content"];
     let output = JSONusername + ": " + JSONcontent + "<br><br>";
     document.getElementById("reviews").innerHTML += output;
   }



 
 })
 
 
 const titanic = document.getElementById("Titanic");
 titanic.addEventListener("click", (e) => {
    
   
   document.getElementById("title").innerHTML = movies.Titanic.title;
 document.getElementById("director").innerHTML = movies.Titanic.director;
 document.getElementById("genre").innerHTML = movies.Titanic.genre;
 document.getElementById("filmRating").innerHTML = movies.Titanic.filmRating;
 document.getElementById("poster").setAttribute("src", movies.Titanic.poster);
 document.getElementById("audienceScore").innerHTML = movies.Titanic.audienceScore;
 document.getElementById("description").innerHTML = movies.Titanic.description;
 

 document.getElementById("cast").innerHTML = "";
 document.getElementById("reviews").innerHTML = "";
 
 for (let i = 0; i < movies.Titanic.cast.length; i++) {
   for (key in movies.Titanic.cast[i]) {
     console.log(movies.Titanic.cast[i][key])
   }} 


 for (let i = 0; i < movies.Titanic.cast.length; i++) {
     let JSONrole = movies.Titanic.cast[i]["role"];
     let JSONactor = movies.Titanic.cast[i]["actor"];
     let output = JSONrole + ": " + JSONactor + "<br><br>";
     document.getElementById("cast").innerHTML += output;
   } 


 for (let i = 0; i < movies.Titanic.reviews.length; i++) {
     let JSONusername = movies.Titanic.reviews[i]["username"];
     let JSONcontent = movies.Titanic.reviews[i]["content"];
     let output = JSONusername + ": " + JSONcontent + "<br><br>";
     document.getElementById("reviews").innerHTML += output;
   }
   
 })
 
 const terminator = document.getElementById("Terminator 2");
 terminator.addEventListener("click", (e) => {
    
    
    document.getElementById("title").innerHTML = movies["Terminator 2"].title;
 document.getElementById("director").innerHTML = movies["Terminator 2"].director;
 document.getElementById("genre").innerHTML = movies["Terminator 2"].genre;
 document.getElementById("filmRating").innerHTML = movies["Terminator 2"].filmRating;
 document.getElementById("poster").setAttribute("src", movies["Terminator 2"].poster);
 document.getElementById("audienceScore").innerHTML = movies["Terminator 2"].audienceScore;
 document.getElementById("description").innerHTML = movies["Terminator 2"].description;
 

 document.getElementById("cast").innerHTML = "";
 document.getElementById("reviews").innerHTML = "";
 
 for (let i = 0; i < movies["Terminator 2"].cast.length; i++) {
   for (key in movies["Terminator 2"].cast[i]) {
     console.log(movies["Terminator 2"].cast[i][key])
   }} 


 for (let i = 0; i < movies["Terminator 2"].cast.length; i++) {
     let JSONrole = movies["Terminator 2"].cast[i]["role"];
     let JSONactor = movies["Terminator 2"].cast[i]["actor"];
     let output = JSONrole + ": " + JSONactor + "<br><br>";
     document.getElementById("cast").innerHTML += output;
   } 


 for (let i = 0; i < movies["Terminator 2"].reviews.length; i++) {
     let JSONusername = movies["Terminator 2"].reviews[i]["username"];
     let JSONcontent = movies["Terminator 2"].reviews[i]["content"];
     let output = JSONusername + ": " + JSONcontent + "<br><br>";
     document.getElementById("reviews").innerHTML += output;
   }
 
 })



