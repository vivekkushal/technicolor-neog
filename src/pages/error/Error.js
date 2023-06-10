import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Dude! Where's my page?</h3>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: var(--clr-black-light);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default Error;
