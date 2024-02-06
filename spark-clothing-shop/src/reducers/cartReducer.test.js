
import cartReducer from './cartReducer';

describe('cartReducer', () => {
  it('should add an item to the cart', () => {
    const initialState = [];
    const action = { type: 'ADD_TO_CART', payload: { id: 1, name: 'item1' } };
    const expectedState = [{ id: 1, name: 'item1' }];

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the same state if the action type is not recognized', () => {
    const initialState = [{ id: 1, name: 'item1' }];
    const action = { type: 'UNKNOWN', payload: { id: 2, name: 'item2' } };
    const expectedState = [{ id: 1, name: 'item1' }];

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});
