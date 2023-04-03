import styled from '@emotion/styled';
import { ProductDetailType } from '../../../types/serverProductData';
import Card from '../../@common/Card/Card';
import Chip from '../../@common/Chip/Chip';
import { theme } from '../../../style/theme';

const ProductDetailContent = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductDetailType) => {
  return (
    <Container>
      <CardContainer>
        <Card type="md">
          <CardContainer>
            <Img src={image} alt="상품이미지" />
          </CardContainer>
        </Card>

        <Info>
          <p>
            <Chip name={'카테고리'} color={theme.colors.GREEN_500} />
            <span>{category}</span>
          </p>
          <p>
            <Chip name={'이름'} color={theme.colors.BLUE_500} />
            <span>{title}</span>
          </p>
          <p>
            <Chip name={'가격'} color={theme.colors.GREEN_600} />
            <span>{price}$</span>
          </p>
        </Info>
      </CardContainer>
      <Desc>{description}</Desc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: block;
  width: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;

  span {
    display: block;
    margin-top: 15px;
  }
`;

const Desc = styled.div`
  width: 65%;
  margin-top: 20px;
  line-height: 30px;
`;

export default ProductDetailContent;
