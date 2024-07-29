import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const BackArrowIcon: FC<IconProps> = ({color = theme.color.lightGray}) => {
  return (
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M13.221 17.333l-5.449-5.449a1.66 1.66 0 010-2.34l5.449-5.448"></Path>
  );
};

export default BackArrowIcon;
