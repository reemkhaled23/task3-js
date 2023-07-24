



var firstinput = document.getElementById(`nm`);
var secondinput = document.getElementById(`ur`);
var regexp = ("^https?://[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$")
 
   var bookmarks=[];
if (localStorage.getItem("bookmarks") != null) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    display();
}




function get() {
 if (secondinput.value != regexp) {
    window.alert(" URL not valid");

}
var bookmark={
   name :firstinput.value,
   url: secondinput.value,
}



bookmarks.push(bookmark);
console.log(bookmarks);
localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
cleardata()
display()

}


function cleardata() {
    firstinput.value=" ";
    secondinput.value=" ";
}



function display() {
var cartone ="";
for (var i = 0; i< bookmarks.length ; i++) {
   cartone +=   ` <tr>
        <td>`+ bookmarks[i].name +`</td>
        <td>`+bookmarks[i].url+`</td>
        <td><button class="btn " onclick="visit()">visit<a href="${bookmarks[i].url}" target="_blank" class="text-ecoration:none">  <a/></button></td>
        <td><button class="btn" onclick="deleteelement(${i})"> Delete </button>
        </td>
    </tr>`
    
}

 

    document.getElementById("bb").innerHTML= cartone
}



function deleteelement(i) {
    bookmarks.splice(bookmarks[i],1)
    display()
    
}


function visit() {
}









  
