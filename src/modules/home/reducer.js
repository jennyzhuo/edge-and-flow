import { TOGGLE_PROJECT_MENU_OPEN } from './constants'

export default function reducer(state = { isProjectMenuOpen: false }, action) {
  switch (action.type) {
    case TOGGLE_PROJECT_MENU_OPEN:
      return { ...state, isProjectMenuOpen: !state.isProjectMenuOpen };
  }
  return state;
}