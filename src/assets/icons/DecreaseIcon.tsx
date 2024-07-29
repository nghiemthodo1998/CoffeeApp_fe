import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const DecreaseIcon: FC<IconProps> = ({color = theme.color.white}) => {
  return (
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1.36 1.504h8"></Path>
  );
};

export default DecreaseIcon;
