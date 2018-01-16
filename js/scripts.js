$(document).ready(function(){

  $("#terms").submit(function(event){ //

    event.preventDefault();
    var blanks = ["name", "adjective", "verb", "noun"];
    blanks.forEach(function(blank){
      var input = $("input#" + blank).val();
      $("." + blank).text(input);
      });

      $("#story").show();


  });

});

/*

First we use $ which selects the document. Then we call the ready method on the document, telling it to wait till document is loaded before running our JS.

The ready() takes a function as an argument, which takes an anonymous callback function.

Second, inside the function, we use $ to target the form with id #terms. We call a submit function on that form, which says when the form is

submitted do the following. The submit method takes an anonymous callback function which takes an event as an argument.

Inside our second anonymous callback function we run our code block which is the meat of our logic.

we create an array called blanks and give it 4 elements, which are 4 strings, and are the names of our 4

classes and 4 ideas, minus the . and # respectively.

Next we run a forEach method on our array. This method  takes a function as an argument,

which takes blank as an argument. (This means overtime the function runs it will return blank i.e. each element of the array).

Inside our third anonymous function we throw in some jQuery. We set a variable “input” equal to some jQuery code. This

code will select input# + blank, which will be input#name the first time. (The function will run as many times as there are elements

in the array, returning the element of its current loop). So next time the loop runs it’ll return input# + blank which will be input#adjective.

We call a .val() method on the selected object which pulls the value of what was inputed by the user.

Next we select . + blank which will be our classes each time it the loop runs (eg. .adjective).

We call a text() method on that class which takes in our input variable as an argument. The text method

will essentially append the variable and all its data in the span elements with our classes,

Finally we target our story div which is currency hidden via a css rule, and call the show() method.

Above the event.PreventDefault() method will essentially inhibit the jQuery from trying to submit the

form to a server by default and refreshing the page.

*/
