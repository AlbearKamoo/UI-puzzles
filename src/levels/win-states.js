const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function level1WinState(state) {
  return (emailRe.test(state.email) && state.password.length > 5 );
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
