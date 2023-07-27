import { PageIntro } from "components/layout/PageIntro";
import { Typography } from "components/typography/Typography";
import { SanitizedHtml } from "lib/sanitizer/sanitizedHtml";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { Fragment } from "react";
import styled from "styled-components";
import {
  GetDataProtectionGuidelinesQuery,
  GetLegalDesclosureQuery,
  GetTermsOfUseQuery,
} from "./legal.generated";

type LegalPageEntry =
  | GetDataProtectionGuidelinesQuery["entry"]
  | GetLegalDesclosureQuery["entry"]
  | GetTermsOfUseQuery["entry"];

interface ILegalContentProps {
  entry?: LegalPageEntry;
}

export const LegalContent = ({ entry }: ILegalContentProps) => {
  if (
    ![
      "dataProtectionGuidelines_dataProtectionGuidelines_Entry",
      "legalDesclosure_legalDesclosure_Entry",
      "termsOfUse_termsOfUse_Entry",
    ].includes(entry?.__typename)
  ) {
    return <Container />;
  }

  const { textsWithTitle } = entry as any;

  return (
    <Container>
      {textsWithTitle.map((block, index) => (
        <TextBlock key={index}>
          {block.blockTitle && (
            <Typography variant="h2">{block.blockTitle}</Typography>
          )}
          {block.blockContent && <SanitizedHtml html={block.blockContent} />}
        </TextBlock>
      ))}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;

  ${breakpointQuery.smUp} {
    padding-bottom: ${spacing.giant};
  }
`;

const TextBlock = styled.div`
  margin-bottom: ${spacing.giant};
  color: ${colors.default.primaryColor};
  font-size: 20px;
  line-height: 30px;

  h2 {
    margin-bottom: ${spacing.base};
  }
`;
