import { Typography } from "components/typography/Typography";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import {
  AccessTime,
  LocationOn,
  Business,
  DateRange,
} from "@material-ui/icons";
import { IconArrowRight } from "icons/general/generalIcons";
import { breakpointQuery } from "lib/theme/breakpointQuery";

interface IJobListItemProps {
  id: string;
  title: string;
  location: string;
  area: string;
  employment: string;
  workload: string;
  className?: string;
}

export const JobListItem: FC<IJobListItemProps> = ({
  title,
  location,
  area,
  employment,
  workload,
  className,
}) => {
  return (
    <Item className={className}>
      <Info>
        <Typography
          variant="p"
          component="h3"
          color={colors.default.primaryColor}
        >
          {title}
        </Typography>
        <Attributes>
          <Attribute>
            <Business fontSize="inherit" />
            {area}
          </Attribute>
          <Attribute>
            <DateRange fontSize="inherit" />
            {employment}
          </Attribute>
          <Attribute>
            <AccessTime fontSize="inherit" />
            {workload}
          </Attribute>
          <Attribute>
            <LocationOn fontSize="inherit" />
            {location}
          </Attribute>
        </Attributes>
      </Info>

      <Details>
        <span>
          Mehr Erfahren <IconArrowRight width={20} height={12} />
        </span>
      </Details>
      {employment === "Temporär" && <WorkloadIcon>⦿</WorkloadIcon>}
    </Item>
  );
};

const Item = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 4px;
  justify-content: space-between;
  padding: ${spacing.big};
  background-color: ${colors.default.white};
  cursor: pointer;

  ${breakpointQuery.lgUp} {
    &:hover {
      box-shadow: rgba(31, 71, 118, 0.2) 0px 6px 12px -2px,
        rgba(31, 71, 118, 0.25) 0px 3px 7px -3px;
    }
  }

  ${breakpointQuery.mdDown} {
    flex-direction: column;
    padding: ${spacing.medium} ${spacing.medium} ${spacing.base};
  }
`;

const Info = styled.div`
  ${breakpointQuery.mdUp} {
    padding-right: ${spacing.big};
  }

  h3 {
    margin-bottom: ${spacing.smallerBaseVertical};
  }
`;

const Attributes = styled.div``;

const Attribute = styled.div`
  margin-right: ${spacing.big};
  font-size: 16px;

  &:first-of-type {
    display: block;
    margin-bottom: ${spacing.small};
  }

  display: inline-block;

  ${breakpointQuery.mdDown} {
    margin-right: ${spacing.base};
    font-size: 14px;
  }

  svg {
    vertical-align: sub;
    margin-right: ${spacing.small};
    color: ${colors.default.primaryColor};
    ${breakpointQuery.mdDown} {
      margin-right: ${spacing.half};
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  color: ${colors.default.primaryColor};
  opacity: 0;
  font-weight: 600;

  ${Item}:hover & {
    opacity: 1;
  }

  ${breakpointQuery.mdDown} {
    opacity: 1;
    margin-top: ${spacing.medium};
  }

  svg {
    margin-left: ${spacing.small};

    line,
    path {
      stroke-width: 3px;
    }
  }
`;

const WorkloadIcon = styled.div`
  display: inline;
  position: absolute;
  margin-left: ${spacing.small};
  right: ${spacing.small};
  top: ${spacing.half};
  color: ${colors.default.primaryColor};
`;
