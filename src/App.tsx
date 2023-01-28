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

  // Populate Random Products
  useEffect(() => {
    // const getProducts = async () => {
    //   const response = await axios.get('https://crudcrud.com/api/5b74cdc0521a48d28b8bff1159253fc2/products');
    //   const { data } = response;

    //   if (data.length) {
    //     console.log(data);
    //   } else {
    //     setProducts();
    //   }
    // };

    // const setProducts = async () => {
    //   await axios.post('https://crudcrud.com/api/5b74cdc0521a48d28b8bff1159253fc2/products', {
    //     products: [
    //       {
    //         "id": 86,
    //         "CategoryId": 14,
    //         "categoryName": "Cemilan",
    //         "sku": "MHZVTK",
    //         "name": "Ciki ciki",
    //         "description": "Ciki ciki yang super enak, hanya di toko klontong kami",
    //         "weight": 500,
    //         "width": 5,
    //         "length": 5,
    //         "height": 5,
    //         "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
    //         "harga": 30000
    //       },
    //       {
    //         "id": 86,
    //         "CategoryId": 14,
    //         "categoryName": "Cemilan",
    //         "sku": "MHZVTK",
    //         "name": "Ciki ciki",
    //         "description": "Ciki ciki yang super enak, hanya di toko klontong kami",
    //         "weight": 500,
    //         "width": 5,
    //         "length": 5,
    //         "height": 5,
    //         "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
    //         "harga": 30000
    //       }
    //     ]
    //   });
    // }

    // getProducts();

    // try {
    //   await axios.post('http://52.74.166.134:3000/api/signup', { name, email, password });

    //   setRegistered(true);
    // } catch (error) {
    //   if (error.response) {
    //     const { message } = error.response.data.response;

    //     setMessage({ type: 'error', content: message });
    //   } else {
    //     console.log('Error:', error.message);
    //   }
    // }

    // const productsArray = [];

    // const categoryMap: CategoryMapType = {
    //   1: 'Electronic',
    //   2: 'Food',
    //   3: 'Fashion',
    //   4: 'Gaming',
    // };

    // for (let i = 0; i < 3; i++) {
    //   const id = Math.floor(Date.now() + (Math.random() + i));
    //   const categoryIndex = randomNumber(1, 4);

    //   productsArray.push({
    //     "id": id,
    //     "CategoryId": categoryIndex,
    //     "categoryName": categoryMap[categoryIndex],
    //     "sku": `BRIK${id}`,
    //     "name": `Product ${id}`,
    //     "description": `Well, this is the description for Product ${id}`,
    //     "weight": randomNumber(100, 500),
    //     "width": randomNumber(1, 5),
    //     "length": randomNumber(1, 5),
    //     "height": randomNumber(1, 5),
    //     "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
    //     "harga": randomNumber(10000, 100000),
    //   });
    // }

    // setProducts(products)
  }, []);

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
