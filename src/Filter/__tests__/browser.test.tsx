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
import {render} from '@testing-library/react';
import * as template from '../components/filter';
import * as mock from './mocks';
let component;

describe('given filter is enabled', () => {
//   const input = mock.Basic;
//   beforeEach(async () => {
//     component = await render(template, input);
//   });

//   it('then it is not selected', () => {
//     expect(component.getByRole('button')).does.not.have.attr('aria-pressed');
//   });

//   describe('when filter is clicked', () => {
//     beforeEach(async () => {
//       await fireEvent.click(component.getByRole('button'));
//     });

//     it('then it emits the event with correct data', () => {
//       const clickEvents = component.emitted('click');
//       expect(clickEvents).has.length(1);
//       const [[clickEventArg]] = clickEvents;
//       expect(clickEventArg).has.property('originalEvent');
//       expect(clickEventArg).has.property('selected', true);
//     });

//     it('then it is selected', () => {
//       expect(component.getByRole('button')).has.attr('aria-pressed', 'true');
//     });

//     describe('when it is clicked again', () => {
//       beforeEach(async () => {
//         await fireEvent.click(component.getByRole('button'));
//       });

//       it('then it is not selected', () => {
//         expect(component.getByRole('button')).does.not.have.attr('aria-pressed');
//       });
//     });
//   });
// });

// describe('given filter is disabled', () => {
//   beforeEach(async () => {
//     component = await render(template, {disabled: true});
//   });

//   describe('when filter is clicked', () => {
//     beforeEach(async () => {
//       await fireEvent.click(component.getByRole('button'));
//     });

//     it('then it does not emit the event', () => {
//       expect(component.emitted('click')).has.length(0);
//     });
//   });
});
