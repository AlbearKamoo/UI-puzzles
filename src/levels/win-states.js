function level1WinState(state) {
  return (state.email.length > 5 && state.password.length > 5);
}

function level2WinState(stat) {
  return (state.blockColor === 'rgb(153, 102, 255)');
}

const winStateFunctions = [
  level1WinState
]

export default winStateFunctions;
