/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BrikContext from '../../../providers';
import { ENDPOINT } from '../../../common/constant';
import Pagination from '../../../components/Pagination';
import { ProductContainer } from './styles';

const paginate = (items: any, page: number, per_page: number) => {
  let pages = page || 1;
  let per_pages = per_page || 10;
  let offset = (page - 1) * per_page;

  const paginatedItems = items.slice(offset).slice(0, per_page);
  const total_pages = Math.ceil(items.length / per_page);

  return {
    page: pages,
    per_page: per_pages,
    prev_page: pages - 1 ? pages - 1 : null,
    next_page: (total_pages > pages) ? pages + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
  };
};

const List = () => {
  // @ts-ignore
  const { contextValue, setContextValue } = useContext(BrikContext);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [products, setProducts]: any = useState(null);
  const [pagedProducts, setPagedProducts]: any = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const query = await axios.get(`https://crudcrud.com/api/${ENDPOINT}/products`);
      const { data } = query;

      setProducts(data);
      setPagedProducts(paginate(data, page, perPage));
    } catch (error) {
      throw Error(error as any);
    }
  };

  useEffect(() => {
    if (products && pagedProducts) {
      const paginated = paginate(products, page, perPage);

      setPagedProducts(paginated);
    }
  }, [page, perPage]);

  return products && products.length ? (
    <>
      <Pagination
        page={page}
        numberOfPages={Math.ceil(products.length/perPage)}
        onClick={(e) => setPage(e)}
        onClickNext={() => pagedProducts.next_page && setPage(pagedProducts.next_page)}
        onClickPrev={() => pagedProducts.prev_page && setPage(pagedProducts.prev_page)}
      />
      <div css={ProductContainer}>
        {pagedProducts.data.map((product: any) => (
          <Link key={product.id} to={`detail?id=${product._id}`} data-kl-product>
            <picture>
              <img src={product.image} alt={product.name} />
            </picture>
            <div data-kl-info>
              <h3 data-kl-name>{product.name} {product.id}</h3>
              <p data-kl-description>{product.description}</p>
              <div data-kl-detail>
                <dl>
                  <dt>Category</dt>
                  <dd>{product.categoryName}</dd>
                  <dt>SKU</dt>
                  <dd>{product.sku}</dd>
                  <dt>Price</dt>
                  <dd>{product.harga}</dd>
                </dl>
                <dl>
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
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        page={page}
        numberOfPages={Math.ceil(products.length/perPage)}
        onClick={(e) => setPage(e)}
        onClickNext={() => pagedProducts.next_page && setPage(pagedProducts.next_page)}
        onClickPrev={() => pagedProducts.prev_page && setPage(products.prev_page)}
      />
    </>
  ) : (
    <h2 style={{ textAlign: 'center', margin: '64px 0' }}>Looks like there's no item yet, try adding a new product!</h2>
  );
};

export default List;
