/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Lucas Spirandeli
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';

import {withKnobs, select, number} from '@storybook/addon-knobs';
import {Filter} from '../index';
import {BgColorsEnum} from '../../skin';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: 'skin',
  component: Filter,
  decorators: [withKnobs, withA11y]
};
const defaultProps = {};

const BgColorOptions = {
  ...BgColorsEnum,
  none: ''
};

export const Filters = () => {
  const bgColor = select('Background Color', BgColorOptions, '', 'BG color');
  const content = number(
    'number',
    100,
    {
      range: true,
      min: 1,
      max: 200,
      step: 50
    },
    '1'
  );
  const props = {...defaultProps, bgColor};
  return <Filter {...props} aria-label="unread items" number={content} />;
};
Filters.story = {
  name: 'Filter'
};
export default story;
