# Big Robot

This project was an adventure in 3d Modeling and Web GL. There are a couple of other fun things going on here as well. This was a fun project, but some features might not be well suited for real-world application due to possible performance issues.

## The Robot Model
The robot model was create with Maya. Using a three.js python script, I was able to convert the model file(.OBJ) to a JS file. From the js file, I was able to simply use three.js to display the model.

## Text Extrude
I wrote a javascript script to display text as a 3d object by use of css text-shadow.

## Ray Hover
I wrote a javascript script that causes "Rays" to "glow" as you hover your mouse over them. The rays are html polgon objects. An identical, but invisible set of polygons are overlayed. The mouse hover events are triggered using these invisible polygons.
The "glow" effect is created with controlling each polygons opacity with css/javascript. 


