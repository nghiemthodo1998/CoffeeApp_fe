import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const BigStarIcon: FC<IconProps> = ({color = theme.color.orange}) => {
  return (
    <Path
      fill={color}
      d="M12.749 3.345l1.634 3.268c.223.455.817.892 1.318.975l2.963.492c1.894.316 2.34 1.69.975 3.046l-2.303 2.303c-.39.39-.604 1.142-.483 1.68l.66 2.851c.52 2.257-.679 3.13-2.675 1.95l-2.777-1.643c-.501-.297-1.327-.297-1.838 0L7.446 19.91c-1.987 1.18-3.194.297-2.674-1.95l.66-2.85c.12-.539-.093-1.291-.483-1.681l-2.303-2.303c-1.356-1.356-.92-2.73.975-3.046l2.962-.492c.492-.083 1.086-.52 1.31-.975l1.633-3.268c.892-1.774 2.34-1.774 3.223 0z"></Path>
  );
};

export default BigStarIcon;
