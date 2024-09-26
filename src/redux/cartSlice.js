import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		cart_items: [],
		ids: [],
	},
	reducers: {
		rdx_add_to_cart: function (state, { payload }) {
			// console.log('cart_items', payload)

			let found = false;

			state.cart_items = state.cart_items.map((product) => {
				if (product.id === payload.id) {
					product.count++;

					found = true;
				}

				return product;
			});

			if (!found) {
				state.cart_items.push({
					id: payload.id,
					product: payload,
					count: 1,
				});
				state.ids.push(payload.id);
			}
		},
	},
});

export default cartSlice.reducer;

export const { rdx_add_to_cart } = cartSlice.actions;

// console.log('cartSlice', cartSlice)
