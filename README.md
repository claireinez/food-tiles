#Coding challenge

This app was started using `create-react-app` and uses simulated data for a call to the Deliveroo API. You can view the structure of the API data in `fitzrovia.js`.

#### How to run
```bash
npm i
npm start
```
Then navigate to `http://localhost:3000`.


#### Main tech used
+ react
+ prop-types
+ enzyme
+ jest

#### What I didn't have time for
+ Full styling: I would love to style the app fully in accordance with the provided designs, including official brand fonts.
+ The country dropdown in the `NavBar`.
+ Integrating with a real API: I tried to imagine the most basic structure of data that I would need from an API to render the requested app, but the structure I have created probably varies greatly from the real Deliveroo API. When dealing with a real API, I would use `redux` to store the data, and I would possibly use `normalizr` to coax the data into a format that is more suitable for the UI.
