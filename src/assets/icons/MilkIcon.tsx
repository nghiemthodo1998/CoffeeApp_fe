import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const MilkIcon: FC<IconProps> = ({color = theme.color.orange}) => {
  return (
    <Path
      fill={color}
      d="M14.766 2.891a1.104 1.104 0 00-1.36 0C11.29 4.507 5.038 9.777 5.071 15.917c0 4.97 4.045 9.026 9.026 9.026s9.026-4.045 9.026-9.015c.011-6.05-6.251-11.41-8.357-13.037z"></Path>
  );
};

export default MilkIcon;
