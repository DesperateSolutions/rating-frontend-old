# Rating frontend

React frontend for rating players in a league. Uses the glicko backend from [chess-rating](https://github.com/Molyna/chess-rating).

## Getting started

To build and run the Web app in your browser, you'll need the following tools:

* node.js and NPM
* gulp

To install them, install them via your favorite package manager. 

In Ubuntu, you can type the following to install them:

```
sudo apt-get install npm
sudo npm install -g gulp
```

### Point it to the backend!

The frontend relies on a glico-rater-backend running somewhere. Update the baseurl of `app/js/config/appConfig.js` to point to where you so desire.

### Install dependencies and build the Web app

The rating-frontend Web app relies on a number of libraries. To install them, use the NPM package manager:
```
npm install
```

This will download all dependencies and build the application.


### Run the app locally

Now, you need a Web server to serve the wonderfull Web app lying there all by it own on the harddrive.
The easiest way to do this, is by using the lightweight http-server. Install it globally using NPM:

```npm install -g http-server```

Launch it by telling it to serve the app folder:

```http-server app/```


### Launch a browser.
The Web server reports which port its using. Type `http://localhost:<port>` into your browser and you should now see the Web app.

### Code!

Everytime you make changes to the code, the application need to be rebuilt. You either build it by invoking `gulp build`, or use `gulp watch`. The last option tells gulp to watch for changes and rebuild the application automatically. Sweet life! And btw, you don't need to restart the http-server.
