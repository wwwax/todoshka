import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 1rem;
`;

const TodoCreator = () => {
  return (
    <StyledWrapper>
      <input type="text" placeholder="type here..." />
      <button>add todo</button>
    </StyledWrapper>
  );
};

export default TodoCreator;
