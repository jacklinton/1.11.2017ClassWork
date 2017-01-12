function checkUsername() {
    var username = document.getElementById("userName").value

    var characters = username.split("")

    var presence = characters.map(function(element) {
        return Number.isInteger(parseInt(element))
    });


    if (presence.indexOf(true) !== -1) {
        return true
    } else {
        return false
    }
}
function checkForm() {
                var password = document.getElementById("password").value
                if (password == "12345678" && checkUsername() == true) {
                    document.getElementById("changeMe").innerHTML="<h1>You're In!</h1>"
                }
                else {
                    alert("Wrong!")
                }
                
}