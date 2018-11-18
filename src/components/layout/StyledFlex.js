import * as React from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';

const Wrapper = styled(Flex)`
  height: 50px;
`;

export const StyledFlex = props =>{  
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

StyledFlex.types = Flex.types;

StyledFlex.defaultProps = Flex.defaultProps;

StyledFlex.propTypes = {
  alignItems: Flex.propTypes.alignItems,
  as: Flex.propTypes.as
};
