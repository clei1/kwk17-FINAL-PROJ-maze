2017 Kode With Klossy Level 2
------
##### Final Project by Ilana Hope and Connie Lei (with help from TAs)
##### August 30th to September 1st

Throughout Kode With Klossy, we learned how to use all the tools listed below for our final project:
- HTML
- CSS
- Bootstrap
- Javascript
- p5 (Javascript library similar to Processing)
- DOM manipulation
- AFrame

We were both drawn to the creative capabilties of A-Frame. When brainstorming ideas, we were extremely excited about being able to live our fantasies, from Harry Potter to Tinkerbell, etc. We eventually decided to persue the idea of remaking the Triwizard Cup third task maze experience.

#### Goals:
Create a circular maze similar to that of the movie
Have music/sound effects playing that changed once you encountered an obstacle
Create 5 obstacles mentioned in the book:
    -golden mist that orientated you upside down
    -Sphinx that asked you a riddle
    -Blast-Ended Skrewt
    -Boggart/Dementor
    -Acromantula

#### Current version:
Circular mazes were difficult for movement so we changed the walls to be flat. Music and sound affects are buggy right now and we were only able to implement the first two obstacles.

#### Difficulties:
- **Ilana**
    * *AFrame text is tricky to work with and so finding the correct positions for the texts was extremely trying. Once text is in place, having an onclick function on the text doesn't work so a plane had to be created for the text to sit on. The onclick function works on the plane so this was a work around.*
    * *Getting the music to load interfered with how the maze, fog and obstacles loaded meaning we had to find a work around for that. Music also has to be in very short snipets so it can load. Music can work in browser, but doesn't work in VR so it is disabled so it can be fixed later.*
- **Connie**
    * *Having the sensation of flipping/rotating your entire body was difficult. While some rotations worked in browser, VR goggles are apparently too smart and auto rotate your camera so you are standing face up each time. Three different implementations were tried. The rotation is still a bit messy, but we were under a time crunch and couldn't find a more elegant solution so this is just a hurried patch.*
    * *Creating the golden mist particles lagged out the browser and so we had to settle for random yellow sphere generation that act as the golden mist. Using the particles was also tricky because they aren't centralized to a single location if using dust. Using color lagged everything. Link to the particles we originally tried is https://www.npmjs.com/package/aframe-particle-system-component.*

#### Instructions:
Visit https://clei1.github.io/kwk17-FINAL-PROJ-maze/ in **Google Chrome** to try it out. Experiencing the maze in VR goggles is an entirely different experience than viewing in browser. Make sure to click on the goggles. You are not allowed to use a keyboard if viewing in browser. While wearing VR goggles, you can only tap the white orbs to move around so only use your mouse to look around and move. Orbs are that size and transparency because tapping on them wearing VR goggles is difficult. 
