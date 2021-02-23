import Home from './index';
import React from 'react';
import ReactDOM from 'react-dom';
import mockResponse from '../../__mocks__/mockResponse.json';
import { render, act } from '@testing-library/react';

describe('Home Container', () => {
    describe('when rendered', () => {
        it('should fetch a list of shows', async () => {
            const getSpy = jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
            const el = document.createElement("div");
            await act(async () => {
                ReactDOM.render(<Home />, el);
                expect(el).toContainHTML(`<div class=\"flex justify-center\"><div class=\"lds-dual-ring\"></div></div>`);

                expect(el.querySelector('.list-fav')).toBeNull();

            });

            expect(getSpy).toBeCalled();
            expect(el.querySelector('.list-fav')).not.toBeNull();
            jest.restoreAllMocks();

        });
    });
});