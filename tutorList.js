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



var messagesRef = firebase.database().ref('tutorInfo');
messagesRef.on('value',gotData)
function gotData(data){
var scores=data.val();// it is a dictionary
var keys=Object.keys(scores);
console.log(keys);




for (var i=0;i<keys.length;i++) //no. of entries
{

    var k=keys[i];
    var name=scores[k].name;
    var major=scores[k].major;
    var teach=scores[k].teach;
    var available=scores[k].available;
    var email=scores[k].email;
    var phone=scores[k].phone;
    var message=scores[k].message;
    // add all and format it in a list ......****************************************** look here
    var div = document.getElementById("tutor-list");
  


  //make new section for each new post
  var ul = document.createElement("ul");
  ul.className = "border";

  //add About Myself Title
  var aboutMyself = document.createElement("h2"); 
  aboutMyself.className = "aboutMyself";
  var aboutMyselfText = document.createTextNode("About Myself");
  aboutMyself.appendChild(aboutMyselfText); 
  ul.appendChild(aboutMyself);

  // name =  "Name: " + name;
  // major = "Major and Year of Study: " + major;
  // teach = "Subjects teaching: " + teach;
  // available = "Available Days: " + available;
  // email = "NTU email address: " + email;
  // phone = "Phone Number: " + phone;
  // message = "Description: "+ message;
  
  function createListItem(span, text, className){
    var li = document.createElement("li");
    var sn = document.createElement("span");
    var sn2 = document.createElement("span");
    sn.textContent = span;
    sn2.textContent = text;
    sn2.className = className;
    li.appendChild(sn);
    li.appendChild(sn2);
    return li;
  };

  //List of names of classes for each item
  // var classes = [
  //   name, major, teach, available, email, phone, message
  // ];

  var items= [
    createListItem("Name: ", name, "name"),
    createListItem("Major and Year of Study: ", major, "major"),
    createListItem("Subjects teaching: ", teach, "teach"),
    createListItem("Available Days: ", available, "available"),
    createListItem("NTU email address: ", email, "email"),
    createListItem("Phone Number: ", phone, "phone"),
    createListItem("Description: ", message, "message")
  ];

  //Add all other details
  items.forEach(function(li){
    ul.appendChild(li);
  });

  div.appendChild(ul);
  // div.setAttribute("id", "tutors");

  
  
}

}
