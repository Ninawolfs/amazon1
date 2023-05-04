export const initialState = {
  basket: [
    {
      id: "12321342",
      title: "King of Battle and Blood",
      price: 23.52,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617457059i/56651967.jpg",
    },
    {
      id: "12321342",
      title: "King of Battle and Blood",
      price: 23.52,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617457059i/56651967.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket

      //we cloned the basket
      let newBasket = [...state.basket];

      //we check to see if product exists
      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        //if the item is not in the basket
        console.warn(
          `Can't remve product (id: ${action.id}) as it's not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
