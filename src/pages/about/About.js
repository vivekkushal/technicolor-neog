import styled from 'styled-components';
import aboutImg from '../../assets/hero-bcg.jpeg';

function About() {
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
            covered. At Technicolor, we're dedicated to celebrating the magic of
            the silver screen. Our goal is to provide you with a comprehensive
            and immersive experience that caters to your love for movies.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

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

  h2 {
    color: var(--clr-purple);
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
