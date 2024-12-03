import { QuizForm } from './QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import quizItems from '../quiz-items.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <QuizForm />
      <SearchBar />
      <QuizList items={quizItems} />
      <GlobalStyle />
    </div>
  );
};
// QuizList({items: quizItems})
