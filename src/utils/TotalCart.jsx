function totalCart(cart) {
  cart.reduce((acc, cur) => {
    return (acc += cur.price * cur.quantity);
  }, 0);
}

export default totalCart;
