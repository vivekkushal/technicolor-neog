import styled from 'styled-components';

function ProductImage({ image }) {
  return (
    <Wrapper>
      <img src={image} alt="poster" className="main" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main {
    height: 600px;
    width: 400px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    // object-fit: cover;
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
      width: 200px;
    }
  }
  @media (min-width: 850px) {
    .main {
      height: 600px;
      width: 400px;
    }
  }
`;

export default ProductImage;
