document.getElementById("registerForm").addEventListener("submit",function(event){
    if(!document.getElementById("name").value||
    !document.getElementById("email").value||
    !document.getElementById("password").value){
        alert("all files are required!");
        event.preventDefault();
    }
});