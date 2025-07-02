import { useDispatch, useSelector } from 'react-redux';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);

  const handleChange = e => {
    dispatch({ type: 'locale/set', payload: { lang: e.target.value } });
  };

  return (
    <select value={lang} onChange={handleChange}>
      <option value="uk">Українська</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};
