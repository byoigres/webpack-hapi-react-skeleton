const user = (state = null, action) => {
  if (action.type === 'user') {
    return state.user;
  }

  return state;
};

export default user;
