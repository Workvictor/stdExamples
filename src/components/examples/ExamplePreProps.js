import React from 'react';
import { FlexCenter, Example } from '../layout/Core';

export const ExamplePreProps = () => {
  return (
    <Example>
      --- ExamplePreProps ---
      <FlexCenter>
        <div>
          [view component col 1]
          <div>
            [center view component row 2]
          </div>
        </div>
        --|--
        <div>[view component col 2]</div>
      </FlexCenter>
    </Example>    
  );
}
