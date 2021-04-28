import * as React from 'react';
import {render} from '@testing-library/react';
import * as mock from './mocks';

describe('filter', () => {
  it('renders defaults', () => {
    const input = mock.BasicProps;
    const {getByRole, getByText} = render(<mock.Basic />);
    const filterEl = getByRole('button');
    expect(filterEl).toHaveClass('filter-button');
    expect(filterEl).toHaveAttribute('aria-pressed');
    expect(filterEl).toContain(getByText(input.children));
  });

  it('renders with pressed attribute', () => {
    const input = mock.SelectedProps;
    const {getByRole} = render(<mock.Selected />);
    expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with disabled attribute', () => {
    const input = mock.DisabledProps;
    const {getByRole} = render(<mock.Disabled />);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });

  it('renders fake version', () => {
    const input = mock.FakeProps;
    const {getByText} = render(<mock.Fake />);
    const filterTextEl = getByText(input.children);
    const filterEl = filterTextEl.closest('a');
    expect(filterEl).toHaveAttribute('href', '#');
    expect(filterEl).toHaveClass('filter-link');
    expect(filterEl).toHaveAttribute('aria-pressed');
  });

  it('renders fake version with disabled attribute', () => {
    const {getByText} = render(<mock.Fake_Disabled />);
    expect(getByText(mock.FakeProps.children)).toHaveAttribute('disabled');
  });

  it('renders fake version with pressed attribute', () => {
    const input = mock.Fake_SelectedProps;
    const {getByText} = render(<mock.Fake_Selected />);
    expect(getByText(input.children).closest('a')).toContain(getByText(input.a11ySelectedText, {exact: false}));
  });
});
