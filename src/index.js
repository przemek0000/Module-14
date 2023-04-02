import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyledGlobal from './styled';
import store from './store';
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./errorPage/Error";
import AppTasks from './tasksListPage/features/tasks/tasks';
import Author from './author';
import TaskPage from './taskPage'
import { loader as loaderTask } from './taskPage';
import Demo from './demo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Demo /> },
      {
        path: "zadania",
        element: <AppTasks />
      },
      {
        path: "autor",
        element: <Author />
      },
      {
        path: "zadania/:zadaniaId",
        element: <TaskPage />,
        loader: loaderTask
      }
    ]
  }
], { basename: "/to-do-list" })

const theme = {
  colors: {
    done: {
      display: "hsl(120, 100%, 25%)",
      hover: "hsl(120, 100%, 28%)",
      active: "hsl(120, 100%, 31%)"
    },
    remove: {
      display: "hsl(0, 100%, 50%)",
      hover: "hsl(0, 100%, 62%)",
      active: "hsl(0, 100%, 68%)"
    }
  },
  breakPoints: {
    mobiles: 767
  },
  maxWidth: 1200
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <StyledGlobal />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
