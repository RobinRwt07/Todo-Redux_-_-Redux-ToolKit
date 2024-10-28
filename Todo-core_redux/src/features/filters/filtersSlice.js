export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
}

const initialState = {
  status: StatusFilters.All,
  colors: [],
}

export function colorFilterChange(color, changeType) {
  return {
    type: "filters/colorFilterChange",
    payload: { color, changeType }
  }
}

export function statusFilterChanged(status) {
  return {
    type: "filters/statusFilterChanged",
    payload: status
  }
}

export default function filterReducers(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload
      }
    }

    case 'filters/colorFilterChange': {
      let { color, changeType } = action.payload;
      switch (changeType) {
        case "added": {
          if (state.colors?.includes(color)) {
            return state;
          }
          return {
            ...state,
            colors: state.colors?.concat(color)
          }
        }
        case 'removed': {
          return {
            ...state,
            colors: state.colors.filter(oldColor => oldColor != color)
          }
        }
        default: {
          return state
        }
      }
    }
    default:
      return state;
  }
}