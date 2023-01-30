import React, { ImgHTMLAttributes } from 'react';

function Image(props: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) {
  return <img {...props} />;
}

export default Image;
