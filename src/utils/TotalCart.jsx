function totalCart(cart) {
  cart.reduce((acc, cur) => {
    return (acc += cur.price * cur.quantity);
  });
}

export default totalCart;
