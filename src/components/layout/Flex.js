import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const alignItemsCss = css`
  align-items: ${props => props.alignItems};
`;

const Wrapper = styled.div`
  display: flex;
  ${alignItemsCss};
`;

export const Flex = props =>{  
  const { children, className, alignItems, as,  ...rest } = props;
  return(
    <Wrapper
      as={as}
      className={className}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

const as = {
  span: 'span',
  a: 'a',
  div: 'div'
};

const alignItems = {
  center: 'center', 
  flexEnd: 'flex-end'
};

const types = {
  as: Object.keys(as).map(key => as[key]),
  alignItems: Object.keys(alignItems).map(key => alignItems[key])
}

Flex.types = {
  as,
  alignItems,
}

Flex.defaultProps={
  alignItems: undefined,
  as: undefined
}

Flex.propTypes={
  alignItems: PropTypes.oneOf(types.alignItems),
  as: PropTypes.oneOf(types.as)
}
