![plot](./readme/images/typescript.png) ![plot](./readme/images/react.png) ![plot](./readme/images/redux-tool.png)

# Introduction

This source has been created for a dynamic React project. We used some similar technology:

- [Reactjs](http://dev.nodeca.com) is core technology.
- [Redux](http://dev.nodeca.com) & [Redux-toolkit](http://dev.nodeca.com) for control application state (it's easy if you wanna change to [MobX](http://dev.nodeca.com)). Remove it if you won't use.
- [Typescript](http://dev.nodeca.com) to make our code to be more reliable.
- [React Router](https://reactrouter.com/en/main) for navigation in application.
- [Material UI](https://mui.com/) is our UIKit (do not depend on it), you can change to another without any effect.

<br>

# Let's start

- Recommended node 14 or later.
- Clone this repo using
  `git clone https://github.com/rintran720/react-redux-typescript.git <YOUR_PROJECT_NAME>`
- Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`
- Run `npm install` or `yarn` in order to install dependencies and clean the git repo.
- At this point you can run `npm run dev` or `yarn dev` to run at deployment.
- To run at production: `npm start` or `yarn start`.

# Document

The application will be implemented in `./src` folder

## 1. App.tsx

This file is master component of whole project. You should add all global providers in here.

## 2. Assets

All assets will be saved at `./src/assets`.

## 3. Navigation

To control screen views and register screens in you app. Update `RootNavigation` if you want to change the root navigation of whole application.
Please check document at [React Router](https://reactrouter.com/en/main).

## 4. Types

Keep your application types in here.

## 5. Modules

Divide your application to many domains, in `./src/modules` you keep the common domain and all custom domain.
In each domain, we have:

- `containers`: this is smart components with logic implement, can you components to show what you want. E.g. Facebook login button. To implement, you should use a component to show UI, keep all business logic in container and style at style file.
- `components`: this is pure components only with UI logic, they will render base on props. The component use UI base at `common` domain, recommended do not use library directly.
- `hooks`: useful custom hooks

<br>

Get more information at [Smart and dumb component or Stateful and stateless component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## 6. Pages

Get all pages you have in here, this idea come from [NextJs](https://nextjs.org/).

## 7. Constants

Keep constants in here.

## 8. Utils - Helpers

In this folder, I write all util/helper functions.

## 9. Api - HTTP Client

Make instance of Axios or other HTTP Client. More information at [Axios](https://github.com/axios/axios)

## 10. Store - Application state

To implement stores for application. In this case, I use [Redux](https://redux.js.org/) and [Redux-toolkit](https://redux-toolkit.js.org/) to manage application state.
If you wanna change to [Mobx](https://mobx.js.org/README.html), be free to do it.

<br>

\*Note: Should use dispatch, useSelector,... in containers.

## 11. Theme

Implement theme of application in here.Please check at [Material UI](https://mui.com/)

## 12. Language

In this folder, we save all custom language. To use it please check [i18next](https://react.i18next.com/)

<br>

# DevOps

Check devops process at [DevOps](./devops/README.md)

# Notes

## Strick Mode

In development mode you can see React call API twice, Don't worry! THIS IS A FEATURE of React.StrictMode. It's will be fine in production. You can remove React.StrictMode provider to disable, but I'm not recommended.

<br />

Check more information at [React.StrictMode](https://reactjs.org/docs/strict-mode.html)

<br/>

Discus about this at [Reddit](https://www.reddit.com/r/reactjs/comments/ugzopd/why_is_my_fetch_getting_called_twice/)
