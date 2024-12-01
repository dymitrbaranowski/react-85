// [<li>1</li>, <li>2</li>, <li>3</li>]

import { QuizCard } from './QuizCard';

export const QuizList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <QuizCard quiz={item} />
        </li>
      ))}
    </ul>
  );
};
