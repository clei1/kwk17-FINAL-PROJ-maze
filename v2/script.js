function preload() {
 var apparateSpells = document.getElementsByClassName("apparate");
 var disApparateSpells = document.getElementsByClassName("disapparate");
 for (var i = 0; i < apparateSpells.length; i++) {

  if (apparateSpells[i].getAttribute("id") == "upside") {
   apparateSpells[i].addEventListener("click", function() {
    flipCamera()
    moveCamera(this, false)
   })
  }
  else {
   apparateSpells[i].addEventListener("click", function() {
    moveCamera(this, false)
   })
  }

  disApparateSpells[i].addEventListener("click", function() {
    moveCamera(this, false)
    reflipCamera()
   })
 }
}

  function moveCamera(spell, mist) {
   var cam = document.getElementById("camera");
   var positionsphere = spell.getAttribute("position");
   var movement = document.createElement("a-animation");
   movement.setAttribute("attribute", "position");
   movement.setAttribute("dur", "2000");
   if (!mist) {
    movement.setAttribute("to", positionsphere.x + " 1.6 " + positionsphere.z);
   }
   else {
    movement.setAttribute("to", "-" + positionsphere.x + " 1.6 " + positionsphere.z);
   }
   cam.appendChild(movement)
   console.log(cam.getAttribute("position"))
  }

  // Golden Mist
  function spawnGoldenMist() {
   var mistAdd = document.getElementById("mists")
   var area = document.getElementById("mist")

   var coordinate = area.getAttribute("position")

   coordinates = coordinate.split(" ")

   var height = area.getAttribute("height") / 2
   var depth = area.getAttribute("depth") / 2
   var width = area.getAttribute("width") / 2
   console.log(coordinate)
   for (var i = 0; i < 700; i++) {
    let light = document.createElement("a-sphere")
    let x = ((Math.random() * 2) - 1) * width + parseInt(coordinates[0])
    let y = ((Math.random() * 2) - 1) * height + parseInt(coordinates[1])
    let z = ((Math.random() * 2) - 1) * depth + parseInt(coordinates[2])

    // console.log(x)
    // console.log(y)
    // console.log(z)

    let position = x + " " + y + " " + z

    // console.log(position)

    light.setAttribute("position", position)
    light.setAttribute("color", "yellow")
    light.setAttribute("radius", Math.random() * .05 + .025)
    light.setAttribute("opacity", Math.random() * .3)

    mistAdd.appendChild(light)
   }
  }

  preload()
  spawnGoldenMist()

  function flipCamera() {
   flip.emit("spin")
  }

  function reflipCamera() {
   flip.emit("respin")
  }


  // Sphinx Obstacle 
  var riddleAnswers = ["Fire", "Stamp", "Teapot", " A Cold"];

  function sphinxClick() {
   //grab sphinx from doc
   var Sphinx = document.getElementById("sphinx")
   console.log(Sphinx.getAttribute("clicked"))
   //check if sphinx was clicked
   if (Sphinx.getAttribute("clicked") == "false") {
    //if not clicked, ad the text onto the sphinx
    var SphinxText = document.createElement("a-text");
    SphinxText.setAttribute("value", "If I drink I die, if I eat I grow, what am I?");
    SphinxText.setAttribute("color", "yellow");
    // <a-text value="If I drink I die, if I eat I grow, what am I?" text="width:3;color:#ff0a16;wrapCount:20" color="yellow" position="-2 1 5" id="sphinxtxt"></a-text>

    // <a-text value="If I drink I die, if I eat I grow, what am I?" text="wrapCount:30;color:#ff0a16" color="yellow" position="-0.56 -4.839 4.23" id="sphinxtxt"></a-text>
    SphinxText.setAttribute("position", "-1.2 1 5");
    SphinxText.setAttribute("text", "width:3;wrapCount:20;color:#ff0a16;")
    SphinxText.setAttribute("id", "sphinxtxt");
    SphinxText.setAttribute("rotation", "0 0 0");
    document.getElementById("sphinx").appendChild(SphinxText);
   }
   else {
    //if it has been clicked before, move it's position (AKA you already solved it)
    Sphinx.setAttribute("position", "-5 0 14")
   }
   var X = 3.5;
   //iterate and create boxes
   for (var i = 0; i < 4; i++) {
    var answers = document.createElement("a-box");
    answers.setAttribute("id", "answer" + i)
    answers.setAttribute("class", "boxes")
    answers.setAttribute("position", `21 ${X} -13`);
    answers.setAttribute("color", "grey")
    console.log(riddleAnswers[i])
    answers.setAttribute("onclick", `answerRiddle(${i})`);
    answers.setAttribute("scale", "1 1 1");
    var txt = document.createElement("a-text");
    txt.setAttribute("value", `${riddleAnswers[i]}`);
    txt.setAttribute("id", "text" + i)
    txt.setAttribute("color", "yellow");
    txt.setAttribute("scale", "1 1 1")
    txt.setAttribute("position", `-.4 0 .5`);
    //txt.setAttribute("rotation", "0 180 0");
    document.getElementById("scene").appendChild(answers);
    answers.appendChild(txt);
    // answers.addEventListener("click", answerRiddle(riddleAnswers[i]));
    X += 1.5
   }
  }

  function answerRiddle(i) {
   // Correct answer
   var currBox = document.getElementById("text" + i)
   userAnswer = currBox.getAttribute("value")
   console.log(userAnswer)
   console.log("tried to answer")
   var Sphinx = document.getElementById("sphinx")
   console.log(userAnswer);
   if (userAnswer == "Fire") {
    var boxes = document.getElementsByClassName("boxes")
    for (var i = 0; i < boxes.length; i++) {
     boxes[i].setAttribute("visible", "false")
    }


    Sphinx.setAttribute("position", "2 0 14");
    Sphinx.setAttribute("clicked", "true");
    Sphinx.setAttribute("visible", "false")
   }
   // Incorrect answer
   else {
    Sphinx.setAttribute("clicked", "false")
   };
  }

  // Trophy End Game Function
  function endGame() {
   alert("Congrats, you've completed the Triwizard tournament!");
   document.location.reload();
  }
