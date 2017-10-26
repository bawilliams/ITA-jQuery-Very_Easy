/*VERY EASY: Create and add three elements of your choice to the page.*/

function addElements() {             
    var paragraph = $("<p></p>").text("My First Paragraph.");  
    var headline = $("<h1></h1>").text("My First Headline.");
    var subheader = $("<h2></h2>").text("My First Subheader.");
    $("body").append(headline, subheader, paragraph);      
}

addElements();