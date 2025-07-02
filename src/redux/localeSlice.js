// This reducer is not used in the current implementation, but can be used for future enhancements
export const localeReducer = (state = { lang: 'uk' }, action) => {
  switch (action.type) {
    case 'locale/set':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
