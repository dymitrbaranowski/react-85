import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { fetchQuizzes } from './api';

export class App extends Component {
  state = {
    quizItems: [],
    filters: {
      topic: '',
      level: 'all',
    },
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem('quiz-filters');
    if (savedFilters !== null) {
      this.setState({ filters: JSON.parse(savedFilters) });
    }

    try {
      const quizzes = await fetchQuizzes();
      console.log(quizzes);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
    }
  }
  addQuiz = newQuiz => {
    this.setState(prevState => ({
      quizItems: [
        ...prevState.quizItems,
        {
          id: nanoid(),
          ...newQuiz,
        },
      ],
    }));
  };

  deleteQuiz = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
    }));
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        level: newLevel,
      },
    }));
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        topic: newTopic,
      },
    }));
  };

  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  getVisibleQuizItems = () => {
    const { quizItems, filters } = this.state;

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());

      if (filters.level === 'all') {
        return hasTopic;
      }
      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleQuizItems();

    return (
      <Layout>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          level={filters.level}
          topic={filters.topic}
          onChangeLevel={this.changeLevelFilter}
          onChangeTopic={this.changeTopicFilter}
          onReset={this.resetFilters}
        />
        <QuizList items={visibleItems} onDelete={this.deleteQuiz} />
        <GlobalStyle />
      </Layout>
    );
  }
}
