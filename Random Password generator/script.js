const passwordBox=document.getElementById("Password")
const length = 12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="@#$%^&!*()_+~[]<>/-=";
const allChars=upperCase+lowerCase+number+symbols;

function createPassword(){
    let Password="";
    Password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password+=number[Math.floor(Math.random()*number.length)];
    Password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>Password.length){
        Password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=Password;

}

function copyPassword() {
    // This grabs the text currently in the passwordBox
    const textToCopy = passwordBox.value;

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }
}
