import { Col, Grid, Row } from "components/layout/Grid";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import styled from "styled-components";

export default function Custom404() {
  return (
    <Grid>
      <StyledErrorRow>
        <Col xs={12} md={8} centered>
          <Typography variant="h1" color={colors.default.primaryColor}>
            Wir konnten die Seite leider nicht finden.
          </Typography>
          <Link href={`/`} passHref>
            <ButtonLink variant="contained">Zur Startseite</ButtonLink>
          </Link>
        </Col>
      </StyledErrorRow>
    </Grid>
  );
}

export const StyledErrorRow = styled(Row)`
  border-top: 1px solid ${colors.default.lightBackgroundColor};
  padding: 96px 0 140px;
  min-height: 50vh;

  ${breakpointQuery.mdUp} {
    padding: 160px 0 160px;
  }
`;
