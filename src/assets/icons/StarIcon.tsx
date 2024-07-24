import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {IconProps} from '../../common/type';
import {theme} from '../../common/theme';

const StarIcon: FC<IconProps> = ({color = theme.color.orange}) => {
  return (
    <Path
      fill={color}
      d="M5.72 1.462l.734 1.467c.1.204.367.4.592.438l1.329.22c.85.142 1.05.759.437 1.367L7.78 5.987a.905.905 0 00-.217.755l.296 1.279c.233 1.012-.304 1.404-1.2.875l-1.246-.738a.9.9 0 00-.825 0l-1.246.738c-.891.529-1.433.133-1.2-.875l.296-1.28a.905.905 0 00-.216-.754L1.187 4.954c-.608-.608-.412-1.225.438-1.367l1.329-.22a.907.907 0 00.587-.438l.734-1.467c.4-.795 1.05-.795 1.446 0z"></Path>
  );
};

export default StarIcon;
