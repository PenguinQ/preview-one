/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Textarea from '../../../components/Textarea';
import Textfield from '../../../components/Textfield';
import { Container } from './styles';

interface ReducerStateItem {
  value: string | number;
  error: boolean;
  message: string;
}

interface ReducerState extends Record<string, any> {
  name: ReducerStateItem,
  sku: ReducerStateItem,
  description: ReducerStateItem,
  weight: ReducerStateItem,
  width: ReducerStateItem,
  length: ReducerStateItem,
  height: ReducerStateItem,
  image: ReducerStateItem,
  price: ReducerStateItem,
  category: ReducerStateItem,
}

interface ReducerAction {
  type: string;
  field?: string;
  payload?: string;
  callback?: Dispatch<SetStateAction<boolean>>;
}

const ACTIONS = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECTION: 'selection',
  SUBMIT: 'submit',
  RESET: 'reset',
  VALIDATE: 'validate',
  UPDATE: 'UPDATE',
};

const initialState: ReducerState = {
  name: {
    value: '',
    error: false,
    message: '',
  },
  sku: {
    value: '',
    error: false,
    message: '',
  },
  description: {
    value: '',
    error: false,
    message: '',
  },
  weight: {
    value: 0,
    error: false,
    message: '',
  },
  width: {
    value: 0,
    error: false,
    message: '',
  },
  length: {
    value: 0,
    error: false,
    message: '',
  },
  height: {
    value: 0,
    error: false,
    message: '',
  },
  image: {
    value: '',
    error: false,
    message: '',
  },
  price: {
    value: 0,
    error: false,
    message: '',
  },
  category: {
    value: '',
    error: false,
    message: '',
  },
};

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return {
        ...state,
        [action.field as string]: {
          value: action.payload,
        },
      }
    case ACTIONS.TEXT:
      let errorText = false;
      let messageText = '';

      return {
        ...state,
        [action.field as string]: {
          value: action.payload,
          error: errorText,
          message: messageText,
        },
      };
    case ACTIONS.NUMBER:
      const regexp = new RegExp(/^\d+$/);
      let error = false;
      let message = '';

      if (!regexp.test(action.payload as string) && action.payload) {
        error = true;
        message = 'Must not contain any characters besides a number'
        action.callback && action.callback(true);
      }

      return {
        ...state,
        [action.field as string]: {
          value: action.payload,
          error: error,
          message: message,
        },
      };
    case ACTIONS.SUBMIT:
      return {
        ...state,
        [action.field as string]: {
          error: true,
          message: action.payload,
        }
      }
    case ACTIONS.RESET:
      return {
        ...initialState,
      }
    case ACTIONS.VALIDATE:
      return {
        ...initialState,
      }
    default:
      return state;
  }
};

const Add = () => {
  const [error, setError] = useState(false);
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

    let error = 0;

    Object.keys(state).map(item => {
      if (state[item].value === '' || parseInt(state[item].value) === 0) {
        // dispatch({
        //   type: ACTIONS.VALIDATE,
        //   field: item,
        //   payload: 'This field cannot be empty',
        // });
        // setError(true);
        error += 1
      } else {
        error -= 1
        // setError(false);
      }
    });

    if (error !== 0) {
      alert('Don submit');
    } else {
      alert('Submit');
    }

    // if (error) {
    //   alert(`There's still some error, please check it!`);
    // } else {
    //   const post = await axios.post('https://crudcrud.com/api/2862f1e318ae4c718192cb2d8476d78d/products', {
    //     "CategoryId": parseInt((state.category.value as string).split('-')[0]),
    //     "categoryName": (state.category.value as string).split('-')[1],
    //     "sku": state.sku.value,
    //     "name": state.name.value,
    //     "description": state.description.value,
    //     "weight": parseInt((state.weight.value as string)),
    //     "width": parseInt((state.width.value as string)),
    //     "length": parseInt((state.length.value as string)),
    //     "height": parseInt((state.height.value as string)),
    //     "image": state.image.value,
    //     "harga": parseInt((state.price.value as string)),
    //   });

    //   const { status } = post;

    //   if (status === 201) {
    //     if (window.confirm(`${state.name.value} has been successfully added!`)) {
    //       dispatch({ type: ACTIONS.RESET });
    //     }
    //   }
    // }
  };

  return (
    <>
      <h2>Add Product</h2>
      {error ? 'ada error' : 'tidak ada error'}
      <form css={Container} onSubmit={handleSubmit}>
        <div className="form-group">
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
        </div>
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
            label="Weight"
            name="weight"
            value={state.weight.value}
            error={state.weight.error}
            message={state.weight.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type: ACTIONS.NUMBER,
              field: e.target.name,
              payload: e.target.value,
              callback: setError,
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
        </div>
        <div className="form-group">
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
          {categoryList.map(category => (
            <option value={`${category.id}-${category.name}`}>{category.name}</option>
          ))}
        </Select>

        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default Add;
