import { JobPosting } from "components/jobs/jobPosting/JobPosting";
import { ContentLayout, SlimLayout } from "components/layout/Layout";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

const SlimJob: NextPageWithLayout = () => {
  const {
    query: { id },
  } = useRouter();
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setReferrer(getParentHostname());
  }, []);

  return (
    <ContentLayout>
      <JobPosting id={id as string} isSlimVariant={true} referrer={referrer}>
        <LinkArea>
          <Link href={`/jobs?ref=${referrer}`} passHref>
            <ButtonLink variant="default" target="_blank">
              Weitere Stellen von Stellenwerk
            </ButtonLink>
          </Link>
        </LinkArea>
      </JobPosting>
    </ContentLayout>
  );
};

SlimJob.getLayout = function getLayout(page: ReactElement) {
  return <SlimLayout>{page}</SlimLayout>;
};

const LinkArea = styled.div`
  margin-top: ${spacing.medium};
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: ${spacing.giant};
  z-index: 1;
`;

function getParentHostname() {
  const locationAreDisctint = window.location !== window.parent.location;
  const parentOrigin = (
    (locationAreDisctint ? document.referrer : document.location) || ""
  ).toString();

  if (parentOrigin) {
    return new URL(parentOrigin).hostname;
  }

  const currentLocation = document.location;

  if (
    currentLocation.ancestorOrigins &&
    currentLocation.ancestorOrigins.length
  ) {
    return new URL(currentLocation.ancestorOrigins[0]).hostname;
  }

  return "";
}

export default SlimJob;
