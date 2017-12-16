import React from 'react';
import chai, { expect } from 'chai';
import { chaiEnzyme } from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme);

describe('<FullHeader />', () => {
    it('should should header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title are passed', () => {
            const wrapper = shallow(<FullHeader title="Title" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
        it('should not have h1 when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });
        it('should have h1 with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 when subtitle are passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Subtitle" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });
        it('should not have h2 when subtitle are not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });
        it('should have h2 with the string passed', () => {
            const wrapper = shallow(<FullHeader subtitle="curso" />);
            expect(wrapper.find('h2').props().children).to.be.equal('curso');
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper)
                .to.have.styles('background-color')
                .equal('#ccc');
        });
    });
});
