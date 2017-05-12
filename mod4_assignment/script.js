// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//


(function (window) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var prop in names) {

  if (names[prop].charAt().toLowerCase() == 'j') {
  byeSpeaker.speak(names[prop]);
  }

  else {
    helloSpeaker.speak(names[prop]);
       }
}

})(window);

