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
import classNames from 'classnames';
import {getFakeTag} from '../../skin-utils';

export type FilterProps = React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> & {
  selected?: Boolean;
  a11ySelectedText?: string;
};
export const Filter = ({onClick, ...props}: FilterProps) => {
  const baseClass = props.href ? 'filter-link' : 'filter-button';
  const tag = getFakeTag(!!props.href, 'a', 'button');
  const [selected, setSelected] = React.useState(props.selected);

  const defaultProps = {
    className: classNames(baseClass, `${baseClass}--${props.selected ? 'selected' : 'unselected'}`, props.className),
    type: !props.href && 'button',
    'aria-pressed': !props.href && props.selected && 'true'
  };

  React.useEffect(() => {
    if (selected == props.selected) {
      setSelected(props.selected || false);
    }
  }, [props.selected]);

  const handleClick = (event) => {
    if (!props.disabled) {
      setSelected(!selected);
      onClick(event);
    }
  };

  return React.createElement(tag, {
    ...props,
    ...defaultProps,
    handleClick,
    children: (
      <span className={`${baseClass}__cell`}>
        <span>{props.children}</span>
        {props.href && props.selected && (
          <span className="clipped" key="active-text" id="active-text">
            - ${props.a11ySelectedText || 'Selected'}
          </span>
        )}
      </span>
    )
  });
};

export default Filter;
