import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ITagProps {
  title: string;
  action: {
    icon: ReactNode;
    handler: () => void;
  };
}

export const Tag: FunctionComponent<ITagProps> = ({ title, action }) => {
  return (
    <TagContainer>
      {title}
      {action && <Action onClick={action.handler}>{action.icon}</Action>}
    </TagContainer>
  );
};

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${spacing.small};
  border: 1px solid ${colors.default.primaryColor};
  border-radius: 4px;
  color: ${colors.default.primaryColor};
`;

const Action = styled.div`
  cursor: pointer;
  padding: ${spacing.half} ${spacing.smallerBaseVertical};
  margin-left: ${spacing.smallerBaseVertical};
  border-radius: 0 4px 4px 0;
  &:hover {
    color: ${colors.default.primaryColorLighten8};
    background-color: ${colors.default.primaryColorLighten92};
  }
`;
