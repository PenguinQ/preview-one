import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import axios from 'axios';
import Header from './components/Header';
import BrikContext from './providers';

interface CategoryMapType {
  [key: number]: string;
}

const randomNumber = (start: number, end: number) => {
  return Math.floor((Math.random() * end) + start)
};

const App = () => {
  const storageValue = localStorage.getItem('brikStorage');
  const [contextValue, setContextValue] = useState(storageValue);
  const [products, setProducts] = useState(null);

  const headerItems = [
    {
      title: "List",
      url: "/"
    },
    {
      title: "Add",
      url: "add"
    },
  ];

  return (
    <BrikContext.Provider value={{ contextValue, setContextValue }}>
      <div className="App">
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap");

            html {
              box-sizing: border-box;
            }

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }

            body {
              color: #100B20;
              font-family: "Nunito Sans", sans-serif;
              font-size: 14px;
              line-height: 18px;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              padding: 0;
              margin: 0;
            }

            .App {
              padding: 65px 14px 0;
            }

            main {
              margin-top: 14px;
            }

            @media (min-width: 480px) {
              main {
                max-width: 1024px;
                margin-right: auto;
                margin-left: auto;
              }
            }
          `}
        />
        <Header items={headerItems} />
        <main>
          <Outlet />
        </main>
      </div>
    </BrikContext.Provider>
  );
}

export default App;
