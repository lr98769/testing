const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

var optionsList

var file;
var fileURL;
      var summitButton=document.getElementById('uploadButton');
      //summitButton.style.visibility='hidden'; // hide the submit button
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


      var MaterialRef = firebase.database().ref('learningMaterial');
      MaterialRef.on('value',gotData)
      function gotData(data){
      var scores=data.val();// it is a dictionary
      var keys=Object.keys(scores);
      console.log(keys);

      // everytime their is a new stuff being added, remove all the child in addable_container,
      // there is no repeated adding stuff. 
      const lists = document.getElementById("addable_container");
      while (lists.firstChild) {
        lists.removeChild(lists.firstChild);
      }
    
    for (var i=0;i<keys.length;i++)
    {
    console.log(keys[i]) //keys[i] type is string
    
          var optDiv = document.createElement("div"); 
          optDiv.setAttribute("class","option");
          //optDiv.setAttribute("style","display:block")
    
          var mlabel=document.createElement('label');
          mlabel.innerHTML=keys[i];
          var minput = document.createElement('input');
          minput.type = 'radio';
          minput.setAttribute("class","radio")
          minput.setAttribute("id",keys[i])
          minput.setAttribute("name","category")
          optDiv.appendChild(minput);
          optDiv.appendChild(mlabel);
          lists.appendChild(optDiv);
    
    }

    optionsList= document.querySelectorAll(".option");


optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    console.log(selected.innerHTML,"i am selected")
  });
});
    
    
      }





selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});



searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};



 
    
      
var uploader = document.getElementById('uploader');
var fileButton =         document.getElementById('fileButton');
fileButton.addEventListener('change', function(e){
file = e.target.files[0];
summitButton.style.visibility='visible';
})

function uploadFile()

{

  var fileName=file.name;
var storageRef = firebase.storage().ref('/resources'+fileName);
var task = storageRef.put(file);
task.on('state_changed', function progress(snapshot) {
  var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  uploader.value = percentage;

}, function error(err) {


},function complete() {
  console.log("ok it is done")
  uploader.value=0;
  document.querySelector('.alert').style.display = 'block';
  var message=document.getElementById('message').value;
console.log(message)
var title=document.getElementById('title').value;

  task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
fileURL=downloadURL
summitButton.style.visibility='hidden'; 



// u need to put the below code below as it takes a while to get new url
//info to be stored in fairebase $$$$$$$$$$################


var courseIndex=selected.innerHTML;


console.log("message is "+message)
console.log("title is ",title)
var reference=firebase.database().ref('learningMaterial')

  var courseKey=reference.child(courseIndex).push()  // $$$$$$$$$$ it will create a child if it does not exist
      courseKey.set({
      message:message,
      downloadLocation:fileURL,
      title:title
        

      });






});

// Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);



// Clear form
//document.getElementById('fileButton').reset();
document.getElementById("fileButton").value = "";
document.getElementById('message').value="";
document.getElementById('title').value="";

//upload other info to dataBase



});
}



/*


  /*newMessageRef.on("value",function(snapshot){
      snapshot.forEach( function(childSnapshot)
      {
          var data=childSnapshot.val();
          console.log(data)
      })
          
      });
      */


  function AddIndex()
  {
    var newIndexLower=document.getElementById("inPutIndex").value;
    if (newIndexLower==""|| newIndexLower==" ")
    {
      alert("must type in index number");
      return false;
    }
    else
    {
      var newIndex = newIndexLower.toUpperCase();
      var reference=firebase.database().ref('learningMaterial')

      reference.once('value', function(snapshot) {
        //https://firebase.google.com/docs/reference/node/firebase.database.DataSnapshot
        if (snapshot.hasChild(newIndex)) {
          alert(newIndex+" already exists");
        }

        else
        {
          var courseKey=reference.child(newIndex).push()  // $$$$$$$$$$ it will create a child if it does not exist
          courseKey.set({
          emptyHead: true
            
    
          });
        }


      });


      document.getElementById('inPutIndex').value="";
      /*var newIndex = newIndexLower.toUpperCase();
      var lists = document.getElementById("addable_container");


      var optDiv = document.createElement("div"); 
      optDiv.setAttribute("class","option");

      var mlabel=document.createElement('label');
      mlabel.innerHTML=newIndex;
      var minput = document.createElement('input');
      minput.type = 'text';
      minput.setAttribute("class","radio")
      minput.setAttribute("id",newIndex)
      minput.setAttribute("name","category")
      optDiv.appendChild(minput);
      optDiv.appendChild(mlabel);
      lists.appendChild(optDiv);
      document.getElementById('inPutIndex').value="";
      */

    }



  }

