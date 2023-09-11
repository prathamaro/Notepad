function save(){
    var data = document.getElementById("content").value;  
    localStorage.setItem("notepadcontent", data);
   }

function clearContent(){
    localStorage.clear();
    alert("Local Storage items have been cleared");
}