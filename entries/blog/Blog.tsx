import { ListFilters } from "components/filter/ListFilter";
import { Col, Grid, Row } from "components/layout/Grid";
import { BlogTeaser } from "components/teaser/BlogTeaser";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useGetBlogEntriesQuery } from "./blog.generated";
import { useBlogFilter } from "./useBlogFilter";

interface IBlogProps {
  className?: string;
}

export const Blog: FunctionComponent<IBlogProps> = ({ className }) => {
  const localizationId = useLocalizationId();
  const { data } = useGetBlogEntriesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const { filters, activeFilter, setActiveFilter } = useBlogFilter();

  if (!data?.entries?.length) {
    return null;
  }

  return (
    <Grid className={className}>
      <FilterRow>
        <Col xs={0} sm={1} />
        <Col xs={12} md={7} xl={5}>
          <ListFilters
            filters={filters}
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
        </Col>
      </FilterRow>
      <Row>
        {data.entries
          .filter((entry) => {
            if (activeFilter.id === null) {
              return true;
            }

            if (
              entry.__typename === "blog_default_Entry" &&
              entry.blogCategories.some(
                (category) => category.id == activeFilter.id
              )
            ) {
              return true;
            } else {
              return false;
            }
          })
          .map((entry) => {
            if (entry.__typename !== "blog_default_Entry") {
              return null;
            }

            return (
              <Col key={entry.slug} xs={12} md={6} lg={4} xl={3}>
                <StyledBlogTeaser {...entry} />
              </Col>
            );
          })}
      </Row>
    </Grid>
  );
};

const FilterRow = styled(Row)`
  grid-gap: 0 0;
`;

const StyledBlogTeaser = styled(BlogTeaser)`
  padding-bottom: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    padding-bottom: ${spacing.huge};
  }
`;
