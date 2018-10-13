function level1WinState(state) {
  return (state.email.length > 5 && state.password.length > 5);
}

function level2WinState(state) {
  return (state.blockColor === 'rgb(153, 102, 255)');
}

function level3WinState(state) {
  return (state.left && state.middle && state.right);
}

const winStateFunctions = [
  level1WinState,
  level2WinState,
  level3WinState
]

export default winStateFunctions;
