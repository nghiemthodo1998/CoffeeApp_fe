import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {IconProps} from '../../common/type';

const SearchIcon: FC<IconProps> = ({color = '#52555A'}) => {
  return (
    <Path
      fill={color}
      d="M9.583 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM17.75 18.333a.58.58 0 01-.408-.166l-1.55-1.55a.589.589 0 010-.825.589.589 0 01.825 0l1.55 1.55a.589.589 0 010 .825.616.616 0 01-.417.166z"></Path>
  );
};

export default SearchIcon;
