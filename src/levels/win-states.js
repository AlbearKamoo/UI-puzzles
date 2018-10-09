function level1WinState(state) {
  return (state.email.length > 5 && state.password.length > 5);
}

const winStateFunctions = [
  level1WinState
]

export default winStateFunctions
