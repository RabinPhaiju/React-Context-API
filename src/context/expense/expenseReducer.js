import {
  TRANSACTION_ADD,
  TRANSACTION_DELETE,
  TRANSACTION_EDIT,
  TRANSACTION_FETCH,
  TRANSACTION_SET_LOADING,
} from "../types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case TRANSACTION_SET_LOADING:
      return {
        ...state,
        tran_loading: true,
      };
    case TRANSACTION_DELETE:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      };
    case TRANSACTION_ADD:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case TRANSACTION_FETCH:
      return {
        ...state,
        transactions: action.payload,
        tran_loading: false,
      };
    case TRANSACTION_EDIT:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload_id
            ? { ...transaction, amount: action.payload_amount }
            : { ...transaction }
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
