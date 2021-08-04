import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const timeInterval = 1000;

const BtnShare = () => {
  const location = useLocation();
  const [recntCopied, setCopied] = useState(false);

  const copyEndPoint = (event) => {
    event.preventDefault();
    clipboardCopy(`http://localhost:3000${location.pathname}`);
    setCopied(true);
    setTimeout(() => setCopied(false), timeInterval);
  };

  return (
    <button
      type="submit"
      data-testid="share-btn"
      className="btn-share-recp"
      onClick={ (event) => copyEndPoint(event) }
    >
      {recntCopied ? 'Link copiado!' : <img src={ shareIcon } alt="share-button" />}
    </button>);
};

export default BtnShare;
