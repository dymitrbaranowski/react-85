import styled from 'styled-components';

const getBorderColor = ({ level, theme }) => {
  // console.log(props);
  switch (level) {
    case 'beginner':
      return theme.colors.green;
    case 'intermediate':
      return theme.colors.orange;
    case 'advanced':
      return theme.colors.red;
    default:
      return null;
  }
};
export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(4)};
  border: 5px solid ${getBorderColor};
  border-radius: ${props => props.theme.radial.sm};
`;

export const Topic = styled.h2`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const MetaWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled.p`
  margin: 0;

  color: ${props => {
    return props.color;
  }};
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing(1)};
  margin: 0;
  border: none;

  :hover {
    color: green;
    background-color: blue;
  }

  svg {
    display: block;
    color: red;
  }
`;
