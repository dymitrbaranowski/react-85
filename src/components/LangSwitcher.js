import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from 'redux/localeSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);

  // const handleChange = e => {
  //   dispatch({ type: 'locale/set', payload: { lang: e.target.value } });
  // };

  return (
    <select value={lang} onChange={e => dispatch(changeLang(e.target.value))}>
      <option value="uk">Українська</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};
