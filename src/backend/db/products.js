import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    price: 9.99,
    releaseYear: 1994,
    rating: 9.3,
    description:
      'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
    image:
      'https://www.themoviedb.org/t/p/w1280/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  },
  {
    _id: uuid(),
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    price: 8.99,
    releaseYear: 1972,
    rating: 9.2,
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image:
      'https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
  },
  {
    _id: uuid(),
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    price: 7.99,
    releaseYear: 1994,
    rating: 8.9,
    description:
      "Various interconnected stories revolve around the Los Angeles underworld, including hitmen, a mobster's wife, and a boxer.",
    image:
      'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
  },
  {
    _id: uuid(),
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    price: 9.99,
    releaseYear: 2008,
    rating: 9.0,
    description:
      'When the menace known as The Joker emerges from his mysterious past, Batman must confront him to save Gotham City.',
    image:
      'https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    featured: true,
  },
  {
    _id: uuid(),
    title: "Schindler's List",
    director: 'Steven Spielberg',
    price: 8.99,
    releaseYear: 1993,
    rating: 8.9,
    description:
      'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    image:
      'https://www.themoviedb.org/t/p/w1280/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
  },
  {
    _id: uuid(),
    title: 'Fight Club',
    director: 'David Fincher',
    price: 7.99,
    releaseYear: 1999,
    rating: 8.8,
    description:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    image:
      'https://www.themoviedb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  },
  {
    _id: uuid(),
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    price: 8.99,
    releaseYear: 1994,
    rating: 8.8,
    description:
      'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
    image:
      'https://www.themoviedb.org/t/p/w1280/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
  },
  {
    _id: uuid(),
    title: 'Inception',
    director: 'Christopher Nolan',
    price: 9.99,
    releaseYear: 2010,
    rating: 8.7,
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    image:
      'https://www.themoviedb.org/t/p/w1280/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
  },
  {
    _id: uuid(),
    title: 'The Matrix',
    director: 'The Wachowski Brothers',
    price: 7.99,
    releaseYear: 1999,
    rating: 8.7,
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    image:
      'https://www.themoviedb.org/t/p/w1280/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
  },
  {
    _id: uuid(),
    title: 'Goodfellas',
    director: 'Martin Scorsese',
    price: 8.99,
    releaseYear: 1990,
    rating: 8.7,
    description:
      'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
    image:
      'https://www.themoviedb.org/t/p/w1280/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
  },
  {
    _id: uuid(),
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    price: 9.99,
    releaseYear: 2001,
    rating: 8.8,
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    image:
      'https://www.themoviedb.org/t/p/w1280/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
  },
  {
    _id: uuid(),
    title: 'The Lord of the Rings: The Two Towers',
    director: 'Peter Jackson',
    price: 9.99,
    releaseYear: 2002,
    rating: 8.7,
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    image:
      'https://www.themoviedb.org/t/p/w1280/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
  },
  {
    _id: uuid(),
    title: 'The Lord of the Rings: The Return of the King',
    director: 'Peter Jackson',
    price: 9.99,
    releaseYear: 2003,
    rating: 8.9,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image:
      'https://www.themoviedb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
  },
  {
    _id: uuid(),
    title: 'Seven',
    director: 'David Fincher',
    price: 7.99,
    releaseYear: 1995,
    rating: 8.6,
    description:
      'Two detectives, a rookie, and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    image:
      'https://www.themoviedb.org/t/p/w1280/6yoghtyTpznpBik8EngEmJskVUO.jpg',
  },
  {
    _id: uuid(),
    title: 'The Silence of the Lambs',
    director: 'Jonathan Demme',
    price: 8.99,
    releaseYear: 1991,
    rating: 8.6,
    description:
      'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    image:
      'https://www.themoviedb.org/t/p/w1280/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
  },
  {
    _id: uuid(),
    title: 'The Usual Suspects',
    director: 'Bryan Singer',
    price: 7.99,
    releaseYear: 1995,
    rating: 8.5,
    description:
      'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
    image:
      'https://www.themoviedb.org/t/p/w1280/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg',
  },
  {
    _id: uuid(),
    title: 'Saving Private Ryan',
    director: 'Steven Spielberg',
    price: 8.99,
    releaseYear: 1998,
    rating: 8.6,
    description:
      'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    image:
      'https://www.themoviedb.org/t/p/w1280/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
    featured: true,
  },
  {
    _id: uuid(),
    title: 'The Lion King',
    director: 'Roger Allers, Rob Minkoff',
    price: 7.99,
    releaseYear: 1994,
    rating: 8.5,
    description:
      "A lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
    image:
      'https://www.themoviedb.org/t/p/w1280/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
    featured: true,
  },
  {
    _id: uuid(),
    title: 'Interstellar',
    director: 'Christopher Nolan',
    price: 9.99,
    releaseYear: 2014,
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      'https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    _id: uuid(),
    title: 'Back to the Future',
    director: 'Robert Zemeckis',
    price: 7.99,
    releaseYear: 1985,
    rating: 8.5,
    description:
      'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
    image:
      'https://www.themoviedb.org/t/p/w1280/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg',
  },
];
