import React from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import calculateWinner from './../helpers/calculateWinner';


class Game extends React.Component {

  jumpTo(step) {
    const action = {
      type: 'JUMP_TO',
      step: step
    }
    this.props.dispatch(action)

  }

  render() {
    console.log('Game props', this.props);
    const history = this.props.history;
    console.log('history', history);
    const current = history[this.props.stepNumber];
    console.log('current', current);
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Game);
