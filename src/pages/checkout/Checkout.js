import styled from 'styled-components';
// import { PageHero, StripeCheckout } from '../components';
// import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <main>
      <Wrapper className="page">
        <h1>Thank you for shopping! 😀</h1>
        <h3>Enjoy your movies 🎥 🍿</h3>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Checkout;
