/**
 * Redux counter reducer
 * @param {string} action The action to perform
 * @return {object} state
 */
export default function counter(state = 0, action = {}) {
  if (ON_TEST) {
    require('./counter_spec');
  }

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;

    case 'DECREMENT_COUNTER':
      return state - 1;

    default:
      return state;
  }
}
