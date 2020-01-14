// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyB-ppxnmmh9N7Yh9Hvd4Dv654XCZxAwFdY",
    authDomain: "test-165e8.firebaseapp.com",
    databaseURL: "https://test-165e8.firebaseio.com",
    projectId: "test-165e8",
    storageBucket: "test-165e8.appspot.com",
    messagingSenderId: "24442279561",
    appId: "1:24442279561:web:60e21c29414ab066279858",
    measurementId: "G-Z48JHZJXX3"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('tutorInfo');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var major = getInputVal('major');
  var teach = getInputVal('teach');
  var available = getInputVal('available');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, major,teach,available,email, phone, message);

  // Show alert it is already in html, but i will appear after submit
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, major,teach,available,email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    major:major,
    teach:teach,
    available:available,
    email:email,
    phone:phone,
    message:message
  });




  newMessageRef.on("value",function(snapshot){
      snapshot.forEach( function(childSnapshot)
      {
          var data=childSnapshot.val();
          console.log(data)
      })
          
      });
  }