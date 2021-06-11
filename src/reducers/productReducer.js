import { ActionTypes } from "../constants/action-types";

const initialState = {
	product: [
		{
			id: 1,
			title: "iamndeleva",
			category: "frontend-developer",
		},
	],
};
export const productReducer = (state, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};
