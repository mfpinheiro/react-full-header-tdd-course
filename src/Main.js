import React from 'react';
import PropTypes from 'prop-types';
import {
    headerStyle,
    titleStyle,
    subtitleStyle,
    containerStyle,
    videoStyle,
} from './Styles';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

const FullHeader = ({
    title,
    subtitle,
    bgColor,
    textColor,
    font,
    bgImg,
    video,
}) => {
    const headerStylesCombined = {
        ...headerStyle,
        backgroundImage: `url(${bgImg})`,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
    };
    const component = (
        <header style={headerStylesCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && (
                <video style={videoStyle} autoPlay muted loop src={video} />
            )}
        </header>
    );
    return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
