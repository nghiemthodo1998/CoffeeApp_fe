import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const Bag2Icon: FC<IconProps> = ({color = theme.color.lightGray}) => {
  return (
    <Path
      fill={color}
      d="M19.96 8.96c-.67-.74-1.68-1.17-3.08-1.32v-.76c0-1.37-.58-2.69-1.6-3.61a4.847 4.847 0 00-3.76-1.25c-2.39.23-4.4 2.54-4.4 5.04v.58c-1.4.15-2.41.58-3.08 1.32-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.12 20 4.91 22 9.21 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51zm-8.3-5.55a3.482 3.482 0 013.83 3.47v.7H8.51v-.52c0-1.78 1.47-3.49 3.15-3.65zm-3.24 9.74h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1zm7 0h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1z"></Path>
  );
};

export default Bag2Icon;
