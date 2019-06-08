import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
    <p>  This isn't a real quiz, there are no skill points to distribute so...you did well.</p>
    <div className ="imageResults"> <img src = "https://ganstapenguin.com/blog/wp-content/uploads/2019/04/vault-boy.png" />
       </div><p> and you would have gotten the skill{props.quizResult} in Fallout 3! </p> </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
