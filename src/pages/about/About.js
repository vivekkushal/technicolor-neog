import styled from 'styled-components';
import aboutImg from '../../assets/hero-bcg.jpeg';

const About = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="movies poster" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Technicolor, your ultimate destination for all things
            movies! Whether you're a passionate cinephile, a casual moviegoer,
            or just someone looking for a captivating escape, we've got you
            covered.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-7);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default About;
