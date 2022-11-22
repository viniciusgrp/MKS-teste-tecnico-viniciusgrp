const cartModal = (state = false, action: any) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return true;
    case "HIDE_MODAL":
      return false;
    default:
      return state;
  }
};

export default cartModal;
