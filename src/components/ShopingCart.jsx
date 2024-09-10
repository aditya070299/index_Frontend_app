import React, { useState } from "react";
const items = [
  { id: 1, name: "Maggie", price: 12 },
  { id: 2, name: "Idli", price: 12 },
  { id: 3, name: "Dosa", price: 12 },
  { id: 4, name: "Vada Pav", price: 12 },
  { id: 5, name: "Manchurian", price: 12 },
];

function ShopingCart() {
  const [cartItem, setcartItem] = useState([]);

  console.log(cartItem);
  const HandleCart = (item) => {
    setcartItem((previousItems) => {
      const itemExsist = previousItems.find((i) => i.id === item.id);
      if (itemExsist) {
        return previousItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...previousItems, { ...item, quantity: 1 }];
      }
    });
  };
  const deleteCartItem = (itemid) => {
    setcartItem((previousItems) => {
      return previousItems.filter((i) => i.id !== itemid);
    });
  };
  const deleteOneFormCart = (item) => {
    setcartItem((previousItems) => {
      const itemExsist = previousItems.find((i) => i.id === item.id);

      if (itemExsist.quantity > 1) {
        return previousItems.map((i) =>
          i.id === item.id
            ? i.quantity > 1
              ? { ...item, quantity: i.quantity - 1 }
              : null
            : i
        );
      } else {
        return [...previousItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <h3>Exercise 7 :ShopingCart</h3>
      <div>
        <div>
          <h4>Shop Now</h4>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignContent: "cneter",
                }}
              >
                <div>
                  <p>
                    {item.name} : {item.price}
                  </p>
                </div>
                <div>
                  <button onClick={() => HandleCart(item)}>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h4>Cart</h4>
          {cartItem.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "cneter",
              }}
              key={item.id}
            >
              <p>{item.name}</p>
              <p>quant :- {item.quantity}</p>
              <p>Price :- {item.price * item.quantity}</p>
              <button onClick={() => deleteCartItem(item.id)}>
                delete from cart
              </button>
              <button
                onClick={() => deleteOneFormCart(item)}
                disabled={item.quantity === 1 ? true : false}
              >
                -1
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopingCart;
