Nathan's Pokemon TCG DB:

Link to Live App: https://nathanflanders1.github.io/jsd/

Overview:

Pokemon TCG (Trading Card Game) Database. Allowing the user to search the database by card name, or by Set List, and find the image and additional information for a particular card. 

Diagrams:


Screenshots:

To be added once styling completed

Technical Hurdles:

Many :D
Unable to get "Random Card" page working
Broken Image links that are missing from the API - how to get these to display a default image has been a challenge
Committing to the Github repo - This was initially caused by having 2 github accounts (enterprise for GA-JSD, and personal) with the same username, and then with Github not allowing password authentication through Ubuntu (had to create a passKey on the site)
Styling weakness - definitely need to go back and develop styling skills, this is less a technical hurdle and rather a me problem!

What have I learned:
Almost everything that this site shows is what I've learned through the course!
From basic Javascript in the console using basic functions, through to now creating this website using React (which I did not anticipate in our 2 React lessons!!!) - I still need to refer back class or homework notes, and do a lot of googling for problems that arise, however the fundamentals that I have gained through this course have been huge, it is definitely something that I will continue to pursue once the course finishes, solving a coding problem is a frustrating but satisfying process!

Where next? What to add?
I still want to crack the Random Card page, I feel it is a nice little addition that would be fun
Longer-term I would love to add the ability to store selected cards into an object that is then displayed on a separate "Deck" page for deckbuilding in the game. Along these lines would also be a storage for a "Collection" for users to mark off cards that they own and provide functionality around using that information in a helpful way. These are both what I believe would be "advanced" ideas and may require a lot of additional learning.

Where next in general? 
Either exploring advanced JS to continue in web dev, or look to learning a second language, potentially Python or Swift


Main Session 1:
 Created new react-app via Ubuntu, added components for axios and react-router-dom, removed .git folder
 Created Repsository on Github, ran commands for the first commit, but got stuck as Github does not allow commits using account password, now requires a special passkey or alternative method of commits. Attempted upload to Github via drag and drop of files, however figured out the passkey solution and was able to commit to repo through Ubuntu.
 Began initial setup of app utilising code and lessons from the GA JSD coursework and homework projects (particularly flickr-app-react and movie-database-react)
 Now have base functionality of the Homepage, SearchResults page, and Card Details page (essentially the bones of the projects minimum requirements).
 Next steps are to add functionality for other pages and styling for the project - (Styling has been a weakness of mine throughout the GA JSD course so I knew a lot of my time on the project would relate to styling)



 Issues so far:
  Adding the react-app into Github - solved by troubleshooting and finding the passkey option
  How to make a react-app show correctly when hosted by Github - solved by troubleshooting on Google - found multiple guides detailing the process of installing a gitpages npm command and changing attributes in the package.json file ("Homepage", "Pre-deploy", and "Deploy")
  Some cards in the API do not have an "image" link in the objects, so when these cards are displayed in SearchResults or the Card Page (detailspage) then the broken image shows the default browser snippet. This to be researched as the method for displaying img src in this app is different to the flickr or moviedb apps which I had found solutions for in the course/homework.

Code learned externally:
 npm gitpages installer for the document & package.json attributes to configure - multiple guides online through a google search

Lessons so far in final project:
 In the 2 lessons learning react, it felt like I was not understanding the processes that Luke was teaching, although some components were making sense, I was largely of the belief that my final project would be completed using base JS and that react would be for further learning post-course. This all seemed to change in the week8 homework converting the moviedb app into a react project. I started to click with a lot of the interactions of the system and the idea that I could use a similar format for the final project started. There are still many parts of it all that I am unsure of but each day spent on these projects something new becomes a lot clearer! 



 Main Session 2 & 3:

Added more styling to the page, have tried to make it consistent throughout, however still re-learning a lot of CSS basics - by the time the site is presented it is still going to look like a late 1990s webpage, but maybe that will add to the charm given the nostalgia of the Pokemon TCG given the age groups of the course??

Added set list functionality - was first having issues with displaying the set logos, but a bit of RTFM and inspecting the API endpoints further was successful!

Attempted a "Random Card" page - where a click would display a random card from amongst the 16000+ in the database, however this was stalled when trying to calculate the random aspect through Math. Something in the API was not liking my atttempts, so I instead decided to postpone this feature and make a start on the Set List.

Issues:
  unable to get the random card link working - currently postponed
  Still no solution for broken image links - have worked through a number of online queries and none have helped as yet. Will raise in the final class with the instructors for assistance, however it may need to go to presentation with the links. Thankfully these do not break the site functionality, but it would be a nice-to-have to improve visuals.
  Unable to display the set-name in the SearchResults page. Unfortunately the API does not capture that data in the end-point being used.


