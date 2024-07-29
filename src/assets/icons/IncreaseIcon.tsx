import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const IncreaseIcon: FC<IconProps> = ({color = theme.color.white}) => {
  return (
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1.36 5.504h8M5.36 9.504v-8"></Path>
  );
};

export default IncreaseIcon;
