# repoprovas

## About
In this app students can upload graduation tests pdf links to other students to see!\
\
This app was already deployed, click [here](https://repoprovas-frontend-two.vercel.app/) to use the app!\
This app uses a deployed API, so you don't need to download anything to use this app! But if you want to see the backend of this app, access it [here](https://github.com/lfelipelizeu/repoprovas-backend).

## Tools
This API was made using NodeJS, Typescript and Postgres, with some libs like [express](https://www.npmjs.com/package/express), [pg](https://www.npmjs.com/package/pg) and [typeorm](https://www.npmjs.com/package/typeorm).

## Preparing
First, you need to have npm installed!\
\
Then, clone this repository to your computer: 
#### `git clone https://github.com/lfelipelizeu/repoprovas-frontend`
\
Now to install the dependencies, access the cloned folder by the terminal and use:
#### `npm i`
\
If you don't want to use the deployed API, change the constant `BASE_URL` at [`src/services/repoprovas.js`](https://github.com/lfelipelizeu/repoprovas-frontend/blob/main/src/services/repoprovas.js) to your API link.

## Running
Now the only thing you need to do is to start the application by using:
#### `npm start`
