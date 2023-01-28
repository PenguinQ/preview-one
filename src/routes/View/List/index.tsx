/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, ProductContainer } from './styles';
import sampleData from './data';

import Pagination from '../../../components/Pagination';

const List = () => {
  const [products, setProducts]: any = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const paginate = (items: any, page: number, per_page: number) => {
    let pages = page || 1;
    let per_pages = per_page || 10;
    let offset = (page - 1) * per_page;

    const paginatedItems = items.slice(offset).slice(0, per_page);
    const total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  };

  // console.log(products.length / 3);
  // console.log(paginate(products, 1, 3));
  // console.log(paginate(products, 2, 3));

  useEffect(() => {
    // const getProducts = async () => {
    //   const query = await axios.get('https://crudcrud.com/api/9bba4cfd4a2d4dc8988c123140824b8d/products');
    //   const { data } = query;

    //   setProducts(data);
    // }

    // getProducts();
    const paginated = paginate(sampleData, page, perPage);

    setProducts(paginated.data);
  }, [page, perPage]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  const renderPager = () => {
    const dom = [];

    for (let i = 1; i <= Math.ceil(sampleData.length/perPage); i++) {
      dom.push(
        <button onClick={() => handlePage(i)}>Button {i}</button>
      );
    }

    return dom;
  };

  return (
    <>
      <div css={Container}>
        <div>
          {renderPager()}
          <Pagination pages={Math.ceil(sampleData.length/perPage)} />
        </div>
        <div css={ProductContainer}>
          {products && products.map((product: any) => (
            // @ts-ignore
            <Link key={product.id} to={`detail/${product.id}`} data-kl-product>
              {/* <div>{product.id}</div> */}
              {/* <div>{product.CategoryId}</div> */}
              {/* <div>{product.image}</div> */}
              <picture>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" alt={product.name} />
              </picture>
              <div>
                <h3 data-kl-name>{product.name} {product.id}</h3>
                <p data-kl-description>{product.description}</p>
                <dl data-kl-list>
                  <dt>Category</dt>
                  <dd>{product.categoryName}</dd>
                  <dt>SKU</dt>
                  <dd>{product.sku}</dd>
                  <dt>Price</dt>
                  <dd>{product.harga}</dd>
                </dl>
              </div>
              <div>
                <dl data-kl-list>
                  <dt>Weight</dt>
                  <dd>{product.weight}</dd>
                  <dt>Width</dt>
                  <dd>{product.width}</dd>
                  <dt>Length</dt>
                  <dd>{product.length}</dd>
                  <dt>Height</dt>
                  <dd>{product.height}</dd>
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
};

export default List;
