
# Trail Guide

![alt text](https://github.com/dalewb/trail_guide_front_end/blob/master/images/app_image.png)

A guide for long distance hikers to plan mulit-day hikes.  Hikers are able to find new locations with descriptions, find items that they need to purchase, obtain or use, or create new items and services necessary to facilitate a fun filled adventure.  I came up with the idea to work on this app because I had hiked the Appalachian Trail and I thought it would be helpful to have an app where you could search different locations, determine when you would reach it and then add necessary items to that location in order to better plan your trip.  

Users can start by searching hiking and camping locations throughout the entire US.  This search is done using the [Trail API](https://market.mashape.com/trailapi/trailapi).  With this API, users are able to search for locations based on state and/or city and see a description of the location. 

![alt text](https://github.com/dalewb/trail_guide_front_end/blob/master/images/trail_api.png)

Once a location is chose and added to that user's inventory, the user can then search through the [Walmart API](https://developer.walmartlabs.com/) to find any product that is carried by Walmart.  If a user deems that item valuable or necessary, they can add it to their inventory and if they want, attach it to a specific location in their inventory.

![alt text](https://github.com/dalewb/trail_guide_front_end/blob/master/images/walmart_api.png)

### Future Functionality

With this app, I would like to buid out the ability for the chosen trails to be plotted using the [Google Maps API](https://cloud.google.com/maps-platform/) so that the user can choose the best path between their chosen locations.  This way they can decide how long it will take to arrive and it will allow them to efficiently pack or ship their required items for these locations.

## Built With 

Frontend: [React JS](https://reactjs.org/) & [Redux](https://redux.js.org/basics/usagewithreact)<br/>
Backend: [Rails](https://rubyonrails.org/)<br/>
Styling: [Semantic UI](https://semantic-ui.com/)


## Install

First, fork or clone the [backend](https://github.com/dalewb/trail_guide_back_end).  After you've done that, navigate into the folder where you saved the repo and run:
<br/><br/>
```$ rails s```
<br/><br/>
That will get the server for the back end up and running.

To run the frontend, you can install Node.js [here](https://nodejs.org/en/).
After you install Node.js, clone or fork this repo, navigate into the repo and run:
<br/><br/>
```$ npm start```
<br/><br/>

This should get the app running.


## Tests
No tests provided.


## Contribute
Contributions welcome. Please fork and clone this repository to do so.


## Authors 
William Dale - Creator


## License
This project is licensed under the MIT License

