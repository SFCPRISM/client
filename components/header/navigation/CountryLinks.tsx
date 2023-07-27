import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const CountryLinks = ({
  host,
  className,
}: {
  host: string;
  className?: string;
}) => {
  const { asPath } = useRouter();
  const [currentHost, setCurrentHost] = useState(host);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHost(window.location.hostname);
    }
  }, []);

  const countries = [
    {
      link: "https://www.stellenwerk.ch",
      host: "www.stellenwerk.ch",
      title: "Schweiz",
    },
    {
      link: "https://www.stellenwerk.li",
      host: "www.stellenwerk.li",
      title: "Liechtenstein",
    },
  ];

  return (
    <CountrySwitch className={className}>
      {countries.map((country) => {
        return country.host === currentHost ? (
          <CountryLink
            rel="nofollow"
            href={asPath}
            isActive={true}
            key={country.title}
          >
            {country.title}
          </CountryLink>
        ) : (
          <Link href={`${country.link}${asPath}`} key={country.title} passHref>
            <CountryLink isActive={false}>{country.title}</CountryLink>
          </Link>
        );
      })}
    </CountrySwitch>
  );
};

const CountrySwitch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 66px;
  position: absolute;
  right: 32px;

  ${breakpointQuery.lgUp} {
    position: initial;
    height: 48px;
    flex-direction: column;
    margin-left: 24px;
    margin-top: 0;
  }
`;

const CountryLink = styled.a<{ isActive: boolean }>`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? colors.default.primaryColor : colors.default.secondaryColor};

  margin-left: 12px;
`;
