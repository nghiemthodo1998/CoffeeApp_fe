import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {IconProps} from '../../common/type';
import {theme} from '../../common/theme';

const RedHeartIcon: FC<IconProps> = ({color = theme.color.red}) => {
  return (
    <Path
      fill={color}
      d="M13.127 3.103a4.122 4.122 0 00-3.299 1.656A4.122 4.122 0 006.53 3.103c-2.28 0-4.13 1.857-4.13 4.152 0 .884.141 1.702.386 2.46 1.174 3.714 4.792 5.935 6.582 6.544.252.089.668.089.921 0 1.79-.61 5.408-2.83 6.582-6.545a7.934 7.934 0 00.386-2.459c0-2.295-1.85-4.152-4.13-4.152z"></Path>
  );
};

export default RedHeartIcon;
