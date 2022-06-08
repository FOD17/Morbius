import React from 'react';

export default function UserReview() {
  const [reviews, setReviews] = React.useState([
    {
      quote: `My wife and I were having marriage problems and seeing this movie
      with her really helped out relationship. Morbius not only saves the
      day, but saves an ordinary's man marriage!`,
      person: 'Daryl',
    },
    {
      quote: `I walked into the wrong movie theater, but it was one time in my
      life I didn't walk into a mistake. The special effects are next
      level, af!`,
      person: 'Tim',
    },
    {
      quote: `I was mopin', but now I am MORBIN!`,
      person: 'Morbius, Probably',
    },
    {
      quote: `I want a sequl, prequel, and everything in between.`,
      person: 'Ralph',
    },
  ]);
  return (
    <>
      <div className="review-header">
        <h3>Certified Fan Review</h3>
      </div>
      <div className="reviews">
        {reviews.map((review, key) => {
          return (
            <div className="review" key={key}>
              <p className="review-quote">{review.quote}</p>
              <p>-"{review.person}"</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
