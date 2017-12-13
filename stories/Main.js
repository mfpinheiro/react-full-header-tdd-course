import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => {
        <FullHeader title="TDD" />;
    })
    .add('with title and subtitle', () => {
        <FullHeader title="TDD" subtitle="JS TDD COURSE xD" />;
    })
    .add('with title, subtitle and bgColor', () => {
        <FullHeader
            title="TDD"
            subtitle="JS TDD COURSE xD"
            bgColor="#329988"
        />;
    })
    .add('with title, subtitle, bgColor and textColor', () => {
        <FullHeader
            title="TDD"
            subtitle="JS TDD COURSE xD"
            bgColor="#329988"
            textColor="#FF9900"
        />;
    })
    .add('with title, subtitle, bgColor, textColor and font', () => {
        <FullHeader
            title="TDD"
            subtitle="JS TDD COURSE xD"
            bgColor="#329988"
            textColor="#FF9900"
            font="Cursive"
        />;
    })
    .add('with title, subtitle, bgImage', () => {
        <FullHeader
            title="TDD"
            subtitle="JS TDD COURSE xD"
            bgColor="#329988"
            textColor="#FF9900"
            font="Cursive"
        />;
    });
