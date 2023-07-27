import { ButtonLink } from "components/ui/button/ButtonLink";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import Link from "next/link";
import styled from "styled-components";

const Stellenwerk = () => {
  return (
    <Content>
      <ButtonArea>
        <Link href="/team" passHref>
          <ButtonLink variant="contained">Team</ButtonLink>
        </Link>
      </ButtonArea>
      <ButtonArea>
        <Link href="/partner" passHref>
          <ButtonLink variant="contained">Partner</ButtonLink>
        </Link>
      </ButtonArea>
      <ButtonArea>
        <Link href="/references" passHref>
          <ButtonLink variant="contained">Refernzen</ButtonLink>
        </Link>
      </ButtonArea>
      <ButtonArea>
        <Link href="/blog" passHref>
          <ButtonLink variant="contained">Blog</ButtonLink>
        </Link>
      </ButtonArea>
      <ButtonArea>
        <Link href="/stellenwerk/jobs" passHref>
          <ButtonLink variant="contained">work@stellenwerk</ButtonLink>
        </Link>
      </ButtonArea>
    </Content>
  );
};

const Content = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpointQuery.smUp} {
    flex-direction: row;
  }
`;

const ButtonArea = styled.span`
  margin-right: 24px;

  ${breakpointQuery.smDown} {
    margin-bottom: 24px;
    width: 100%;
    padding: 0 24px;
  }
`;

export default Stellenwerk;
