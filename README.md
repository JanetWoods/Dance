
# Welcome to Where's The Dance?!
I created this app because I wish I had it when I started square dancing.

## To see how this works clone it down to your laptop then:
  Open 2 directory windows using Gitbash: One at dance/api, the other at dance/src.
  In the api directory run: 'json-server -p 8080 -w dance.json'
  In the src directory run: 'npm start'

You can register as a new user or loggin as an existing user.
Existing users 'Janet' and 'Rob' both have the password '123'.
Janet is power-user.
Loggin as Janet to add new events or edit old ones.
After making those changes log out, log back in as a regular user and notice the changes.

Future events will be visible in all user views.  Past events will not appear.


### List of events, power view:
![List of events, power view](/src/images/ListOfEventsPowerView.png)

### List of events, regular view:
![List of events](/src/images/RegularViewListOfEvents.PNG)

### List of clubs, power view:
![List of clubs, power view](/src/images/ListOfClubsPowerView.png)

### List of clubs, regular view:
![List of clubs, Regular view](/src/images/ListOfClubsRestrictedView.png)
