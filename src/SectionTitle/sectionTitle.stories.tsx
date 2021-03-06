/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {Category} from '../../.storybook/util/stories-hierarchy';
import {SectionTitle} from './index';
import {withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import * as mock from './__tests__/mocks';

const story: any = {
  title: Category.SKINDS6,
  component: SectionTitle,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {
  style: {backgroundColor: 'white', marginBottom: '20px'},
  children: ' '
};

export const _SectionTitle = () => {
  const props = {
    ...defaultProps,
    title: 'Today’s Deals – All With Free Shipping',
    subtitle: 'Plus, guaranteed best prices.'
  };
  return (
    <div>
      <mock.CTA_SeeAll {...props} />
      <mock.CTA_NoText {...props} />
      <mock.Overflow {...props} />
      <mock.Size {...props} />
    </div>
  );
};
export default story;
