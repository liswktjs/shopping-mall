import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Card from '../../@common/Card/Card';

import { ProductItemType } from '../../../types/serverProductData';
import { AiFillStar, AiFillDollarCircle } from 'react-icons/ai';
import { URL } from '../../../constant';

export type ProductCardProps = Pick<ProductItemType, 'id' | 'title' | 'image' | 'price' | 'rating'>;

const ProductCard = ({ id, title, price, image, rating }: ProductCardProps) => {
  const navigate = useNavigate();
  const onProductCardClick = () => {
    navigate(`${URL.PRODUCT_DETAIL}/${id}`);
  };

  return (
    <Card type={'md'}>
      <Container onClick={onProductCardClick}>
        <Img src={image} />
        <Title>{title}</Title>
        <InfoContainer>
          <span>
            <StarIcon /> {rating.rate}
          </span>
          <span>
            <DollarIcon />
            {price}
          </span>
        </InfoContainer>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;

  object-fit: cover;
  text-overflow: ellipsis;
`;
const Title = styled.div`
  width: 90%;
  margin: 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StarIcon = styled(AiFillStar)`
  margin-right: 10px;

  color: ${({ theme }) => theme.colors.YELLOW_500};
`;

const DollarIcon = styled(AiFillDollarCircle)`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.GREEN_600};
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    justify-content: center;
    margin: 10px;
  }
`;

export default ProductCard;
