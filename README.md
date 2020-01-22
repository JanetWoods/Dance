
# Welcome to Where's The Dance?!
I created this app because I wish I had it when I started square dancing.

## To see how this works, fork it or clone it down to your laptop then:
  Open 2 windows using Gitbash, one at the directory it is in, the other command line at the API directory within the Dance directory.
  Run: 'npm start' in the window at the root Dance directory level
  Run: 'json-server -p 8080 -w dance.json' in the window at the API directory

You can register as a new user or loggin as an existing user. Users 'Janet' and 'Rob' both have the password '123'.  Janet is power-user.  Loggin as Janet to add new events and see how that works. Events will be visible in all user views until the date has passed.

<!--
[View Deployed Site](https://wheresthedance.herokuapp.com/) **This is not a secure site. It is for demo purposes only.  You can register as a new user or loggin as an existing user. Users 'Janet' and 'Rob' both have the password '123'.  Janet is power-user.  Loggin as Janet to add new events and see how that works. Events will be visible in all user views until the date has passed.
Events with dates prior to today will not be displayed so at some point you will have to add new events to see how it works.
-->


### List of events, power view:
![List of events, power view](/src/images/ListOfEventsPowerView.png)

### List of events, regular view:
![List of events](/src/images/RegularViewListOfEvents.PNG)

### List of clubs, power view:
![List of clubs, power view](/src/images/ListOfClubsPowerView.png)

### List of clubs, regular view:
![List of clubs, Regular view](/src/images/ListOfClubsRestrictedView.png)
