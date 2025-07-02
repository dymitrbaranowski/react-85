import { type } from '@testing-library/user-event/dist/type';

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

export const changeLang = newLang => {
  return {
    type: 'locale/set',
    payload: { lang: newLang },
  };
};
