const selectItem = (data) => {
    return (dispatch) => {
		dispatch({
			type: 'SETITEM',
			payload: data,
		});
	};
};

const selectCategory = (data) => {
    return (dispatch) => {
		dispatch({
			type: 'SETCATEGORY',
			payload: data,
		});
	};
};

const addItem = (data) => {
    return (dispatch) => {
		dispatch({
			type: 'ADDITEM',
			payload: data,
		});
	};
};

export { selectItem, selectCategory, addItem };
