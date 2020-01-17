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



var messagesRef = firebase.database().ref('lectureReview');
messagesRef.on('value',gotData)
function gotData(data){
var scores=data.val();// it is a dictionary
var keys=Object.keys(scores);
console.log(keys);

for (var i=0;i<keys.length;i++) //no. of entries
{

    var k=keys[i];
    var NameStu=scores[k].name;
    var CourseIndex=scores[k].index;
    var StudyTips=scores[k].tips;
    var LecRev=scores[k].info;
    
    // add all and format it in a list ......****************************************** look here
    var div = document.getElementById("review-list");

  //make new section for each new post
  var ul = document.createElement("ul");
  ul.className = "border";
  
  function createListItem(span, text, className){
    var li = document.createElement("li");
    var sn = document.createElement("span");
    var sn2 = document.createElement("span");
    sn.textContent = span;
    sn2.textContent = text;
    sn.className = "head";
    sn2.className = className;
    li.appendChild(sn);
    li.appendChild(sn2);
    li.className = "list";
    li.className = className + "list";
    return li;
  };

// 1.NameStu
// 2.CourseIndex
// 3.StudyTips
// 4.LecRev

  var items= [
    createListItem("", NameStu, "NameStu"),
    createListItem("Course Index: ", CourseIndex, "CourseIndex"),
    createListItem("Study Tips: ", StudyTips, "StudyTips"),
    createListItem("Lecture Review : ", LecRev, "LecRev")
  ];

  //Add all other details
  items.forEach(function(li){
    ul.appendChild(li);
  });

  div.appendChild(ul);
  // div.setAttribute("class", "tut");

}

}
