import { colors } from "lib/theme/design-tokens/colors";
import { ButtonVariant } from "./Button";

export const getColors = (
  variant: ButtonVariant,
  buttonState: "normal" | "hover" | "disabled" = "normal"
) => {
  return buttonColors[variant][buttonState];
};

const buttonColors = {
  default: {
    normal: {
      color: colors.default.primaryColor,
      background: colors.default.white,
      border: colors.default.white,
    },
    hover: {
      color: colors.default.primaryColor,
      background: colors.default.primaryColorLighten96,
      border: colors.default.primaryColorLighten96,
    },
    disabled: {
      color: colors.default.white,
      background: colors.default.primaryColor,
      border: colors.default.primaryColor,
    },
  },
  contained: {
    normal: {
      color: colors.default.white,
      background: colors.default.primaryColor,
      border: colors.default.primaryColor,
    },
    hover: {
      color: colors.default.white,
      background: colors.default.primaryColorLighten8,
      border: colors.default.primaryColorLighten8,
    },
    disabled: {
      color: colors.default.white,
      background: colors.default.accentColor,
      border: colors.default.accentColor,
    },
  },
  contained_contrasting: {
    normal: {
      color: colors.default.white,
      background: colors.default.primaryColor,
      border: colors.default.primaryColor,
    },
    hover: {
      color: colors.default.primaryColor,
      background: colors.default.white,
      border: colors.default.white,
    },
    disabled: {
      color: colors.default.white,
      background: colors.default.primaryColor,
      border: colors.default.primaryColor,
    },
  },
  outlined: {
    normal: {
      color: colors.default.primaryColor,
      background: "transparent",
      border: colors.default.primaryColorLighten8,
    },
    hover: {
      color: colors.default.primaryColor,
      background: colors.default.primaryColorLighten96,
      border: colors.default.primaryColor,
    },
    disabled: {
      color: colors.default.primaryColor,
      background: colors.default.white,
      border: colors.default.primaryColor,
    },
  },
};
