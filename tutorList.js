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
for (var i=0;i<keys.length;i++)
{

    var k=keys[i];
    var name=scores[k].name;
    var phone=scores[k].phone;
    // add all and format it in a list ......****************************************** look here
    var ul = document.getElementById("tutor-list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
}

}