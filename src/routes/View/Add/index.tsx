/** @jsxImportSource @emotion/react */
import React, { useReducer } from 'react';
import axios from 'axios';
import { ENDPOINT } from '../../../common/constant';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Textarea from '../../../components/Textarea';
import Textfield from '../../../components/Textfield';
import { ACTIONS, reducer, initialState } from './reducer';
import { Container } from './styles';

const Add = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const categoryList = [
    {
      id: 1,
      name: 'Electronic',
    },
    {
      id: 2,
      name: 'Food',
    },
    {
      id: 3,
      name: 'Fashion',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let error = false;

    Object.keys(state).map((item) => {
      if (state[item].number) {
        const regexp = new RegExp(/^\d+$/);
        const value = state[item].value;

        if (value === 0 || !regexp.test(value)) {
          dispatch({ type: ACTIONS.NUMBER, field: item, payload: value });
          error = true;
        }
      } else {
        if (state[item].value === '') {
          dispatch({ type: ACTIONS.TEXT, field: item, payload: state[item].value });
          error = true;
        }
      }
    });

    if (error) {
      alert(`There's still some error, please check the form`);
    } else {
      try {
        const post = await axios.post(`https://crudcrud.com/api/${ENDPOINT}/products`, {
          "CategoryId": parseInt((state.category.value as string).split('-')[0]),
          "categoryName": (state.category.value as string).split('-')[1],
          "sku": state.sku.value,
          "name": state.name.value,
          "description": state.description.value,
          "weight": parseInt((state.weight.value as string)),
          "width": parseInt((state.width.value as string)),
          "length": parseInt((state.length.value as string)),
          "height": parseInt((state.height.value as string)),
          "image": state.image.value,
          "harga": parseInt((state.price.value as string)),
        });

        const { status } = post;

        if (status === 201) {
          if (window.confirm(`${state.name.value} has been successfully added!`)) {
            dispatch({ type: ACTIONS.RESET });
          }
        }
      } catch (error) {
        throw Error(error as any);
      }
    }
  };

  return (
    <>
      <h2 style={{ fontSize: 26, lineHeight: '1.5', margin: '32px 0 16px' }}>Add Product</h2>
      <form id="add-form" css={Container} onSubmit={handleSubmit}>
        <Textfield
          label="Name"
          name="name"
          value={state.name.value}
          error={state.name.error}
          message={state.name.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
            type: ACTIONS.TEXT,
            field: e.target.name,
            payload: e.target.value,
          })}
        />
        <Textarea
          label="Description"
          name="description"
          value={state.description.value}
          error={state.description.error}
          message={state.description.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch({
            type: ACTIONS.TEXT,
            field: e.target.name,
            payload: e.target.value,
          })}
        />
        <div className="form-group">
        <Textfield
            label="SKU"
            name="sku"
            value={state.sku.value}
            error={state.sku.error}
            message={state.sku.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.TEXT,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
          <Textfield
            label="Price"
            name="price"
            value={state.price.value}
            error={state.price.error}
            message={state.price.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.NUMBER,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
          <Textfield
            label="Image Link"
            name="image"
            value={state.image.value}
            error={state.image.error}
            message={state.image.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.TEXT,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
          <Select
            name="category"
            label="Category"
            value={state.category.value}
            error={state.category.error}
            message={state.category.message}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch({
              type: ACTIONS.TEXT,
              field: e.target.name,
              payload: e.target.value,
            })}
          >
            <option value="" disabled>Pick the category</option>
            {categoryList.map((category, key) => (
              <option key={key} value={`${category.id}-${category.name}`}>{category.name}</option>
            ))}
          </Select>
        </div>
        <div className="form-group">
          <Textfield
            label="Weight"
            name="weight"
            value={state.weight.value}
            error={state.weight.error}
            message={state.weight.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.NUMBER,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
          <Textfield
            label="Width"
            name="width"
            value={state.width.value}
            error={state.width.error}
            message={state.width.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.NUMBER,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
          <Textfield
            label="Length"
            name="length"
            value={state.length.value}
            error={state.length.error}
            message={state.length.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.NUMBER,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
          <Textfield
            label="Height"
            name="height"
            value={state.height.value}
            error={state.height.error}
            message={state.height.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.NUMBER,
              field: e.target.name,
              payload: e.target.value,
            })}
          />
        </div>
      </form>
      <Button form="add-form" full type="submit" margin="0 0 32px">Add</Button>
    </>
  );
};

export default Add;
