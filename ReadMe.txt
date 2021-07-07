I was unable to implement all the features that were in the project description. Early on I made a big mistake by using an HTML5 canvas. I have made several games using the canvas and thought it would be the perfect way to display the grid. The problem with this approach is that it is much harder to interpret clicks to the proper box*, which a DOM element such as a <div> can do quite easily by adding an event listener to this element. It would also be much easier to add the text and close button (an ‘x’) by using CSS.

In my opinion though, just making the grid work and update when the dropdowns were changed was quite a feat. I do believe though, that if I had been working on a team, I would be able to discuss the decision to use canvas or DOM elements. Also, someone on my team may know a way to help me add and remove the boxes on the canvas.

I simply ran out of time so I could not redo the project using DOM elements. Also, I’m not the greatest designer, but I am pretty good at replicating a designer’s design. The red borders indicate where I would have put the navbar and the footer.


* Note: I would have to get the mouse coordinates in a mouse click event, then interpret that to a box on the grid. The way to do that would be to check that the mouse.x > x and mouse.x  < x + width. Then the y coordinate would be calculated mouse.y > y and mouse.y < y + height. This would give me the box that I clicked on.
