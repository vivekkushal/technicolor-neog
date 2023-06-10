import styled from 'styled-components';

function Contact() {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Subscribe now and get awesome discounts!</h3>
        <div className="content">
          <p>
            Sign up now! Discover the ultimate destination for movie
            enthusiasts! Explore our extensive collection, stream the latest
            releases, and own your favorites. Join us for an unforgettable
            cinematic experience.
          </p>
          <form
            action="https://formspree.io/f/mknalkvb"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    color: var(--clr-purple);
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-6);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-blue-light);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black-light);
  }
  .submit-btn:hover {
    background: var(--clr-purple);
    color: var(--clr-black-light);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
