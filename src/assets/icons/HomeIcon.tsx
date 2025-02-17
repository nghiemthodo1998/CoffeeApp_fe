import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const HomeIcon: FC<IconProps> = ({color = theme.color.lightGray}) => {
  return (
    <Path
      d="M20.83 8.00999L14.28 2.76999C13 1.74999 11 1.73999 9.72996 2.75999L3.17996 8.00999C2.23996 8.75999 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.75999 20.83 8.00999ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
      fill={color}
    />
  );
};

export default HomeIcon;
