import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subtitle }) => (
    <header>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
    </header>
);

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

FullHeader.propTypes = propTypes;

export default FullHeader;
