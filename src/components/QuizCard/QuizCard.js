import { MetaWrapper, Topic, Wrapper, Text, Button } from './QuizCard.styled';
import { FaBeer } from 'react-icons/fa';
import { HiCalendar } from 'react-icons/hi';

export const QuizCard = ({ quiz: { topic, level, time, questions } }) => {
  return (
    <Wrapper level={level}>
      <Topic>{topic}</Topic>
      <MetaWrapper>
        <Text color="red">
          <b>Level:</b> {level}
        </Text>
        <Text color="green">
          <b>Time:</b> {time}
        </Text>
        <Text color="">
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <Button>
        <HiCalendar size={20} />
      </Button>
    </Wrapper>
  );
};
