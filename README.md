#question-and-answer

This is my attempt to create a clone of stackoverflow in a working sense hosted on github pages.

When complete, the application should have all the same functionality that stackoverflow.com has, with the exception of styling.

####Non authenticated users should be able to

* Search for questions
* Results should be sortable
* View question answers
* View the tag cloud
* Authenticate

####Authenticated users should be able to

* View own profile
* View own Badges
* View own favorites
* View own answers
* Upvote, downvote and favorite answers and questions
* Log out

####Technology Used:

*Angular.js
Angular is fast and provides a robust and enjoyable user experience between transitions.  It manages data well and allows for the easy update of data between objects and views

*Angular-ui/Bootstrap
Bootstrap has baked in responsiveness. While I couldnt use the full bootstrap suite, due to wanting to write this as pure Angular, there is a plugin that allowed me to utilize the CSS of bootstrap (the grid system) and to connect with some of the other functions by way of Angular, notably the responsive top fixed navigational bar

*LESS preprocessor
This allows for greater flexiblity when creating styles, and keeps errors from cropping up while developing due to the need for compiling of the styles into a stylesheet.  Also - easy to follow because styles are nested (most of the time).
