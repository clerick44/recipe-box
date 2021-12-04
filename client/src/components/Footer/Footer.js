import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
const location = useLocation();
const history = useHistory();
return (
    <footer className="w-100 mt-auto bg-secondary p-4">
    <div className="container text-center mb-5">
        {location.pathname !== '/' && (
        <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
        >
            &larr; Go Back
        </button>
        )}
        <h4>
        All the love and none of the headache!
        <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
        >
        ❤️
        </span>{' '}
        </h4>
    </div>
    </footer>
);
};

export default Footer;