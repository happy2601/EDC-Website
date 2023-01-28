var firebaseConfig = {
    apiKey: "AIzaSyCz3xNaYGQo9RydexCX08exuM5raYvJdo8",
    authDomain: "edc-contactform.firebaseapp.com",
    projectId: "edc-contactform",
    storageBucket: "edc-contactform.appspot.com",
    messagingSenderId: "682817736810",
    appId: "1:682817736810:web:5037d4db097baa889f7a13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference contactinfo
let contactInfo = firebase.database().ref("infos")


//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm)

//Get values
function submitForm(e) {
    e.preventDefault()
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let number = document.querySelector(".number").value;
    let message = document.querySelector(".message").value;
    save_contact_info(name, email, number, message);
    document.querySelector(".contact-form").reset();
}

//save info to firebase
function save_contact_info(name, email, number, message) {
    let newInfo = contactInfo.push()
    newInfo.set({
        name: name,
        email: email,
        number: number,
        message: message,
    });
}