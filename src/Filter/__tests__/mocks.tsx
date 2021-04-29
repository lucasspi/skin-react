import Filter from '../index';
import * as React from 'react';
export const BasicProps = {
  children: 'text'
};
export const Basic = (props) => (
  <Filter {...BasicProps} {...props}>
    {props.children || BasicProps.children}
  </Filter>
);

export const SelectedProps = {
  children: 'text',
  selected: true
};
export const Selected = (props) => (
  <Filter {...SelectedProps} {...props}>
    {props.children || SelectedProps.children}
  </Filter>
);

export const DisabledProps = {
  children: 'text',
  disabled: true
};
export const Disabled = (props) => (
  <Filter {...DisabledProps} {...props}>
    {props.children || DisabledProps.children}
  </Filter>
);

export const FakeProps = {
  children: 'text',
  href: '#fake'
};
export const Fake = (props) => (
  <Filter {...FakeProps} {...props}>
    {props.children || FakeProps.children}
  </Filter>
);

export const Fake_SelectedProps = {
  children: 'text',
  href: '#fake',
  selected: true,
  a11ySelectedText: 'Selected Filter'
};
export const Fake_Selected = (props) => (
  <Filter {...Fake_SelectedProps} {...props}>
    {props.children || Fake_SelectedProps.children}
  </Filter>
);

export const Fake_DisabledProps = {
  children: 'text',
  href: '#fake',
  disabled: true
};
export const Fake_Disabled = (props) => (
  <Filter {...Fake_DisabledProps} {...props}>
    {props.children || Fake_DisabledProps.children}
  </Filter>
);
