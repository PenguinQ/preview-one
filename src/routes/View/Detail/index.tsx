/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import BrikContext from '../../../providers';
import { ENDPOINT } from '../../../common/constant';
import { Container } from './styles';

const Detail = () => {
  // @ts-ignore
  const { contextValue } = useContext(BrikContext);
  const [params] = useSearchParams();
  const [product, setProduct]: any = useState(null);
  const productId = params.get('id');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const query = await axios.get(`https://crudcrud.com/api/${ENDPOINT}/products`);
      const { data } = query;
      const filtered = data.filter((item: any) => item._id === productId);

      setProduct(filtered[0]);
    } catch (error) {
      throw Error(error as any);
    }
  };

  return (
    <div css={Container}>
      {product ? (
        <div data-kl-product>
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
        </div>
      ) : (
        <h2 style={{ textAlign: 'center', margin: '64px 0' }}>Wait a minute...</h2>
      )}
    </div>
  )
};

export default Detail;
