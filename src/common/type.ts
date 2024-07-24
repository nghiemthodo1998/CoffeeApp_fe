type ThemeType = {
  color: {
    background: string;
    orange: string;
    lightGray: string;
  };
  border: {
    gray: string;
  };
  text: {
    white: string;
    orange: string;
    gray: string;
  };
  fontSize: {
    fs_9: number;
    fs_10: number;
    fs_13: number;
    fs_14: number;
    fs_15: number;
    fs_28: number;
  };
  fontWeight: {
    fw_500: any;
    fw_600: any;
  };
  lineHeight: {
    lh_20: number;
    lh_36: number;
  };
  button: {
    orange: string;
    gray: string;
  };
};

type IconProps = {
  color?: string;
};

export type {ThemeType, IconProps};
