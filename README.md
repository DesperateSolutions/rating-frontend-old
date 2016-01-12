# Rating frontend

React frontend for rating players in a league. Uses the glicko backend from [chess-rating](https://github.com/Molyna/chess-rating).


## Installing and building frontend dependencies

Install and build frontend dependencies with:

```
npm install
```

This bundles all javascript code into the file app/build/App.jsx.


### Run the app locally
To run the frontend locally you can install the lightweight http-server by typing into a terminal:

```npm install -g http-server```

Next, you can serve all files in the app folder by typing: 

```http-sever app/```

## Developing tips
Gulp can build automatically whenever it notices a file has changed. Start it with:

```gulp watch```