import * as React from 'react';
import {render} from '@testing-library/react';
import * as mock from './mocks';

describe('filter', () => {
  it('renders defaults', () => {
    const input = mock.BasicProps;
    const {getByRole, getByText} = render(<mock.Basic />);
    const filterEl = getByRole('button');
    expect(filterEl).toHaveClass('filter-button');
  });

  it('renders with pressed attribute', () => {
    const {getByRole} = render(<mock.Selected />);
    expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with disabled attribute', () => {
    const {getByRole} = render(<mock.Disabled />);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });

  it('renders fake version', () => {
    const input = mock.FakeProps;
    const {getByText} = render(<mock.Fake />);
    const filterTextEl = getByText(input.children);
    const filterEl = filterTextEl.closest('a');

    expect(filterEl).toHaveAttribute('href', input.href);
    expect(filterEl).toHaveClass('filter-link');
    expect(filterEl).toHaveAttribute('aria-pressed');
  });

  it('renders fake version with disabled attribute', () => {
    const {getByRole} = render(<mock.Fake_Disabled />);
    expect(getByRole('link')).toHaveAttribute('disabled');
  });

  xit('renders fake version with pressed attribute', () => {
    const input = mock.Fake_SelectedProps;
    const {getByText} = render(<mock.Fake_Selected />);
    expect(getByText(input.children).closest('a')).toContain(getByText(input.a11ySelectedText, {exact: false}));
  });
});
