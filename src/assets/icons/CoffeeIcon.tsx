import {IconProps} from 'common/type';
import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {theme} from '../../common/theme';

const CoffeeIcon: FC<IconProps> = ({color = theme.color.orange}) => {
  return (
    <>
      <Path
        fill={color}
        stroke="#141921"
        d="M2.838 13.636h0l.25-.25c2.868.718 5.015 3.345 5.015 6.46 0 2.192.675 4.453 3.004 5.414.502.208.998.44 1.494.675l.494.232c.223.103.447.205.67.302-1.187.356-2.606.5-4.046.35-1.952-.204-3.892-.944-5.322-2.373-1.71-1.738-2.727-3.837-2.996-5.807-.27-1.97.21-3.776 1.437-5.003z"></Path>
      <Path
        fill={color}
        stroke="#141921"
        d="M5.96 14.7l-.033-.03-.038-.022c-.712-.427-1.278-.78-1.766-1.084-.297-.185-.565-.352-.82-.508-.19-.115-.37-.222-.544-.322a11.504 11.504 0 013.654.005c1.853.3 3.72 1.072 5.158 2.51 1.738 1.738 2.768 3.838 3.043 5.808.276 1.97-.203 3.774-1.43 5a5.305 5.305 0 01-.214.208c-2.937-.651-5.107-3.286-5.107-6.418v-.294c.003-.899.005-1.688-.202-2.422-.239-.85-.741-1.592-1.7-2.43z"></Path>
      <Path
        fill={color}
        stroke="#141921"
        d="M14.166 26.034h0c-2.235-1.29-3.607-3.702-3.967-6.611-.36-2.908.3-6.279 2.1-9.395 2.8-4.85 7.416-7.541 11.418-7.36a12.053 12.053 0 00-2.897 3.347c-1.623 2.811-2.04 5.976-1.205 9.095 1.216 4.536-.957 9.133-4.893 11.224a7.243 7.243 0 01-.556-.3z"></Path>
      <Path
        fill={color}
        stroke="#141921"
        d="M25.6 3.642h0l.003.002c2.265 1.282 3.636 3.691 3.988 6.601.352 2.91-.325 6.286-2.124 9.403-2.747 4.757-7.452 6.953-11.493 6.722.361-.221.72-.447 1.05-.682.73-.52 1.411-1.144 1.921-2.027 1.623-2.811 2.041-5.975 1.205-9.095-1.235-4.608.311-9.39 4.172-11.458l.053.021.535.212c.33.134.6.25.69.3z"></Path>
    </>
  );
};

export default CoffeeIcon;
