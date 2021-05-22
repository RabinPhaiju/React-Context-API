const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "FETCH_TRANSACTION":
      return {
        ...state,
        transactions: action.payload,
      };
    case "FETCH_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "EDIT_TRANSACTION":
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
