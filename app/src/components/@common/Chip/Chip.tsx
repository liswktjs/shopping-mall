import styled from '@emotion/styled';

export interface ChipProps {
  name: string;
  color: string;
}
const Chip = ({ name, color }: ChipProps) => {
  return <Container color={color}>{name}</Container>;
};

const Container = styled.div<{ color: string }>`
  width: fit-content;
  padding: 8px;
  border-radius: 10px;

  background-color: ${({ color }) => color};
`;

export default Chip;
