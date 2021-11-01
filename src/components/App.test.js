import React from 'react';
import { render } from 'enzyme';
import App from './App.js';

const app = render(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});