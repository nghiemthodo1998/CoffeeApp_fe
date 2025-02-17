import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const LocationIcon: FC<IconProps> = ({color = theme.color.orange}) => {
  return (
    <Path
      fill={color}
      d="M21.12 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 003.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27zm-8.62 5.01a3.15 3.15 0 110-6.3 3.15 3.15 0 010 6.3z"></Path>
  );
};

export default LocationIcon;
