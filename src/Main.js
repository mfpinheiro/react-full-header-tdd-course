import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title }) => <header>{title && <h1>{title}</h1>}</header>;

const propTypes = {
    title: PropTypes.string,
};

FullHeader.propTypes = propTypes;

export default FullHeader;
