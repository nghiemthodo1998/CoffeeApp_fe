import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const BeanIcon: FC<IconProps> = ({color = theme.color.orange}) => {
  return (
    <>
      <Path
        fill={color}
        stroke="#141921"
        d="M17.203 29.303h0c-2.58 0-4.974-1.402-6.74-3.742-1.767-2.339-2.88-5.588-2.88-9.186 0-5.6 2.652-10.24 6.209-12.082a12.052 12.052 0 00-.835 4.346c0 3.246 1.22 6.195 3.503 8.479 3.321 3.32 3.738 8.388 1.375 12.167a7.246 7.246 0 01-.632.018z"></Path>
      <Path
        fill={color}
        stroke="#141921"
        d="M15.909 4.194v0h.004c2.602-.023 4.994 1.379 6.754 3.723 1.76 2.344 2.862 5.606 2.862 9.205 0 5.493-2.978 9.748-6.593 11.568.203-.372.4-.747.568-1.115.373-.816.651-1.697.651-2.717 0-3.246-1.22-6.195-3.503-8.478-3.374-3.374-4.427-8.289-2.117-12.01a53.747 53.747 0 01.626-.091 8.29 8.29 0 01.748-.085z"></Path>
    </>
  );
};

export default BeanIcon;
