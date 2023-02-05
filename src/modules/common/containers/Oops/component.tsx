import React from 'react';
import OopsImg from '~/images/oops.webp';
import { Image } from '~/components/core';
import { styled } from '~/theme/core';
import useWindowDimensions from '~/hooks/useWindowDimensions';

const PREFIX = 'OopsComponent';
const classes = {
  root: `${PREFIX}-root`,
};

const StyledDiv = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fcb82f',
  },
}));

function OopsComponent() {
  const { height } = useWindowDimensions();
  return (
    <StyledDiv className={classes.root}>
      <Image alt='oops' src={OopsImg} height={height} width={'auto'} />
    </StyledDiv>
  );
}

export default OopsComponent;
