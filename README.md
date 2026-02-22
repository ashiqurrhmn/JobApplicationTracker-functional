Answering the question no 1:
|. By getElementById we can catach the Id by id-name from html. 
||. By getElementsByClassName we can catch the classes by class-name from html.
|||. By querySelector we can catch id, class, tag etc from html. But querySelector only catch first matching element.
|V. By querySelectorAll we can also catch id, class, tag etc from html. But querySelectorAll catch all matching element.


Answering the question no 2:
Step 1: First we have to create a new element by using document.createElement()
Step 2: Then we can add text or content inside that element using innerText or innerHTML
Step 3: After that, we have to insert that element into the HTML page by using methods like appendChild().


Answering the question no 3:
Event Bubbling is when you press a child element like button, its event will not end at the button, it will move upwards to parent elements one at a time.
If you clicked on a button in a div, the button’s event will run first, then div’s event, then potentially to the body, then the document.


Answering the question no 4:
Event Delegation in JavaScript mean instead of adding event listener to every child elements, we add the event listener to their parent element. Because of event bubbling, when we click on a child element, 
the event goes to the parent so that parent can detect which child is clicked.

It is useful because:
It makes the code cleaner.
It improves performance because we use less event listeners.


Answering the question no 5:
If we want to stop default behave of browser then we use preventDefault().
stopPropagation() is used to stop event bubbling.
