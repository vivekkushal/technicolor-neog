import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <h5>
        © {new Date().getFullYear()}
        <span> Technicolor</span>
        <div>Made with ❤️ by Vivek Kushal</div>
      </h5>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black-light);
  text-align: center;
  span {
    color: var(--clr-purple);
  }
  h5 {
    color: var(--clr-grey-7);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  div {
    font-size: 0.875rem;
  }
  @media (min-width: 800px) {
    flex-direction: row;
  }
  div {
    font-size: 1rem;
  }
`;

export default Footer;
