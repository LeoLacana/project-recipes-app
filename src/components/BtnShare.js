import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const timeInterval = 1000;

const BtnShare = ({ endPoint, listIndex }) => {
  const location = useLocation();
  const [recntCopied, setCopied] = useState(false);
  const testId = typeof listIndex === 'number'
    ? `${listIndex}-horizontal-share-btn` : 'share-btn';

  const copyEndPoint = (event) => {
    event.preventDefault();
    if (endPoint) {
      clipboardCopy(`http://localhost:3000${endPoint}`);
    } else {
      clipboardCopy(`http://localhost:3000${location.pathname}`);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), timeInterval);
  };

  return (
    <button
      type="submit"
      className="btn-share-recp"
      onClick={ (event) => copyEndPoint(event) }
    >
      {recntCopied
        ? 'Link copiado!'
        : <img src={ shareIcon } alt="share-button" data-testid={ testId } />}
    </button>);
};

BtnShare.propTypes = {
  endPoint: PropTypes.string,
  listIndex: PropTypes.number,
};
BtnShare.defaultProps = {
  endPoint: null,
  listIndex: null,
};

export default BtnShare;
