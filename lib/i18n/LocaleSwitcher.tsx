import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface ILocaleSwitcherProps {
  variant?: "default" | "inverted";
}

export const LocaleSwitcher: FunctionComponent<ILocaleSwitcherProps> = ({
  variant = "default",
}) => {
  const {
    locales,
    locale: currentLocale,
    pathname,
    query,
    asPath,
  } = useRouter();

  return (
    <div>
      {locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
            passHref
          >
            <Locale isActive={locale === currentLocale} variant={variant}>
              {locale.toUpperCase()}
            </Locale>
          </Link>
        );
      })}
    </div>
  );
};

interface ILocaleProps extends ILocaleSwitcherProps {
  isActive: boolean;
}
const Locale = styled.a<ILocaleProps>`
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  color: ${(props) => getLocaleColor(props)};

  &:not(:last-of-type) {
    margin-right: 12px;
  }
  &:hover {
    color: ${({ variant }) =>
      variant === "inverted"
        ? colors.default.white
        : colors.default.primaryColor};
  }
`;

const getLocaleColor = ({ isActive, variant }: ILocaleProps) => {
  if (variant === "inverted") {
    return isActive ? colors.default.white : colors.default.secondaryColor;
  }

  return isActive ? colors.default.primaryColor : colors.default.secondaryColor;
};
