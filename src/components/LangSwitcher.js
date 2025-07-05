import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from 'redux/localeSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);

  return (
    <select
      value={lang}
      onChange={e => dispatch(setLocale({ lang: e.target.value }))}
    >
      <option value="uk">Українська</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};
