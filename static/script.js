document.getElementById("registerForm").addEventListener("submit",function(event){
    if(!document.getElementById("name").value||
    !document.getElementById("name").value||
    !document.getElementById("name").value){
        alert("all files are required!");
        event.preventDefault();
    }
});