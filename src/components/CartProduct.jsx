import React from "react";

const CartProduct = ({product}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>R{product.price}</td>
      <td><button>Remove</button></td>
    </tr>
  );
};

export default CartProduct;
