import React, {FC} from 'react';
import {IconProps} from '../../common/type';
import {Path} from 'react-native-svg';

const Plus: FC<IconProps> = ({color = '#fff'}) => {
  return (
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1 5h8M5 9V1"></Path>
  );
};

export default Plus;
