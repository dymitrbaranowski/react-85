import { MetaWrapper, Topic, Wrapper, Text } from './QuizCard.styled';

export const QuizCard = ({ quiz: { topic, level, time, questions } }) => {
  return (
    <Wrapper>
      <Topic>{topic}</Topic>
      <MetaWrapper>
        <Text>
          <b>Level:</b> {level}
        </Text>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
    </Wrapper>
  );
};
