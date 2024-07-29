type ThemeType = {
  color: {
    background: string;
    orange: string;
    lightGray: string;
    red: string;
    lightBg: string;
    white: string;
  };
  border: {
    gray: string;
    orange: string;
  };
  text: {
    white: string;
    orange: string;
    gray: string;
    lightGray: string;
  };
  fontSize: {
    fs_9: number;
    fs_10: number;
    fs_12: number;
    fs_13: number;
    fs_14: number;
    fs_15: number;
    fs_16: number;
    fs_20: number;
    fs_28: number;
  };
  fontWeight: {
    fw_500: any;
    fw_600: any;
  };
  lineHeight: {
    lh_20: number;
    lh_36: number;
    lh_40: number;
  };
  button: {
    orange: string;
    gray: string;
  };
};

type IconProps = {
  color?: string;
};

type NavigationType = {
  DetailScreen: {detailId: string; type: string};
  CartScreen: any;
};

export type {ThemeType, IconProps, NavigationType};
