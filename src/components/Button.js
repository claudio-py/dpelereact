import React from 'react';


const Button = ({ text, onClick, url }) => {
  const handleClick = () => {
    if (url) {
      window.location.href = url;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      <p>{text}</p> <i className="fa-solid fa-arrow-right-long"></i>
    </button>
  );
};

export default Button;