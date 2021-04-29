/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Lucas Spirandeli
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import * as mock from './mocks';

import {Filter} from '..';
let component;

let handleClick = jest.fn();

describe('given filter is enabled', () => {
  beforeEach(async () => {
    handleClick = jest.fn();
    component = await render(<Filter onClick={handleClick} />);
  });

  it('then it is not selected', () => {
    expect(component.getByRole('button')).not.toHaveAttribute('aria-pressed');
  });

  describe('when filter is clicked', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByRole('button'));
    });

    xit('then it emits the event with correct data', () => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    xit('then it is selected', () => {
      expect(component.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    describe('when it is clicked again', () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole('button'));
      });

      it('then it is not selected', () => {
        expect(component.getByRole('button')).not.toHaveAttribute('aria-pressed');
      });
    });
  });
});

describe('given filter is disabled', () => {
  beforeEach(async () => {
    handleClick = jest.fn();
    component = await render(<Filter onClick={handleClick} />);
  });

  describe('when filter is clicked', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByRole('button'));
    });

    xit('then it does not emit the event', () => {
      expect(component.toHaveAttribute('click')).toHaveLength(0);
    });
  });
});
