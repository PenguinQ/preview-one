interface ReducerStateItem {
  value: string | number;
  error: boolean;
  message: string;
  number: boolean;
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
  payload?: string | number;
}

export const ACTIONS = {
  TEXT: 'text',
  NUMBER: 'number',
  RESET: 'reset',
};

export const initialState: ReducerState = {
  name: {
    value: '',
    error: false,
    message: '',
    number: false,
  },
  sku: {
    value: '',
    error: false,
    message: '',
    number: false,
  },
  description: {
    value: '',
    error: false,
    message: '',
    number: false,
  },
  weight: {
    value: 0,
    error: false,
    message: '',
    number: true,
  },
  width: {
    value: 0,
    error: false,
    message: '',
    number: true,
  },
  length: {
    value: 0,
    error: false,
    message: '',
    number: true,
  },
  height: {
    value: 0,
    error: false,
    message: '',
    number: true,
  },
  image: {
    value: 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b',
    error: false,
    message: '',
    number: false,
  },
  price: {
    value: 0,
    error: false,
    message: '',
    number: true,
  },
  category: {
    value: '',
    error: false,
    message: '',
    number: false,
  },
};

export const reducer = (state: ReducerState, action: ReducerAction) => {
  const { type, field, payload } = action;

  switch (type) {
    case ACTIONS.TEXT:
      let errorText = false, messageText = '';

      if (payload === '') {
        errorText = true;
        messageText = 'Cannot be empty';
      }

      return {
        ...state,
        [field as string]: {
          value: payload,
          error: errorText,
          message: messageText,
          number: false,
        },
      };
    case ACTIONS.NUMBER:
      const regexp = new RegExp(/^\d+$/);
      let errorNumber = false, message = '';

      if (payload === 0) {
        errorNumber = true;
        message = 'Cannot be 0'
      } else if (!regexp.test(payload as string)) {
        errorNumber = true;
        message = 'Invalid characters, ony numbers allowed'
      }

      return {
        ...state,
        [field as string]: {
          value: payload,
          error: errorNumber,
          message: message,
          number: true,
        },
      };
    case ACTIONS.RESET:
      return {
        ...initialState,
      }
    default:
      return state;
  }
};
