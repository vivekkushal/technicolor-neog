import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
function Stars({ rating }) {
  const outOfFive = rating / 2;
  const outOfFiveStars = Array.from({ length: 5 }, (x, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {outOfFive >= index + 1 ? (
          <BsStarFill />
        ) : outOfFive >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">
        {/* star */}
        {outOfFiveStars}
        {/* end of star */}
      </div>
      <p className="reviews">({rating} / 10 rating)</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    color: var(--clr-grey-6);
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
