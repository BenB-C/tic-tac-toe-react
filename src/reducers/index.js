import calculateWinner from './../helpers/calculateWinner';

const initialState = {
  history: [{squares: Array(9).fill(null)}],
  stepNumber: 0,
  xIsNext: true
};

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_MOVE':
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.i]) {
        return state;
      }
      squares[action.i] = state.xIsNext ? "X" : "O";
      const newState = {
        history: history.concat([{squares: squares}]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };

      return newState;

    case 'JUMP_TO':
      const jumpState = {
        ...state,
        stepNumber: action.step,
        xIsNext: (action.step % 2) === 0
      };

      return jumpState

    default:
      return state;
  }
}

export default rootReducer;
