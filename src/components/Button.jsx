import React from 'react';

const Button = ({ onClick, isVisible }) =>
  isVisible && (
    <button type="button" className="button-load-more" onClick={onClick}>
      Load more
    </button>
  );

export default Button;
