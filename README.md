## Project Structure

The project is seperated into `server/` and `client/` code bases along with `Sql/` within the `src/` folder.

Within `server/`, you will find a few folders for database connection and utils (`db/`), controllers for business logic (`controllers/`), functions for express middlewars (`middlewares/`), server routes (`routes/`), and configuration (`config/`).

Within `client/`, you will find the `App.jsx` to start, along with other folders for frontend organization.

Within `Sql/`, you will find the necessary files for the mysql db.

## Important Note About Ports
Frontend is sending requests to port 8080, which means the server needs to run on port 8080.

## Installing dependencies

Make sure before cloning the project to use the `local` branch as that is the one that will work with localhost on your personal machine.

To install the MySql file to workbench, make sure to check `import from self-contained file`, and then click `start import`.

To install dependencies for the client, you just need to `cd client` and run `npm install`. For the server folder, it's the same; `cd server` and run `npm install`. 

Read [Frontend Project Structure](./src/client/README.md#project-structure) and [Backend Project Structure](./src/server/README.md#project-structure) for more details on the respective `/client` and `/server/` organization.

## Issues

You can also contact any contributors with details.

## Contributors

[Ben Bryant](https://github.com/Bryantellius)
