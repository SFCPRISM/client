import { AccordionIndicator } from "components/ui/accordion/Accordion";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";

interface IFilterSelectProps {
  title: string;
  options: string[];
  selected?: string;
  setSelected?: Dispatch<SetStateAction<string>>;
  className?: string;
}

export const FilterSelect: FunctionComponent<IFilterSelectProps> = ({
  title,
  options,
  selected,
  setSelected,
  className,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const translations = useTranslations(["show_all"]);

  return (
    <SelectionBox
      onClick={() => setIsSelecting(!isSelecting)}
      className={className}
    >
      <Expander>
        <SelectionTitle>
          {title}{" "}
          {isSelecting && options.length > 3 && (
            <small style={{ fontWeight: 300 }}> ({options.length})</small>
          )}
        </SelectionTitle>
        <AccordionIndicator isOpen={isSelecting} inverted={true} />
      </Expander>
      <SelectionList isOpen={isSelecting}>
        <SelectionItem
          isSelected={selected === null}
          onClick={() => setSelected(null)}
        >
          {translations["show_all"]}
        </SelectionItem>

        {options.map((option) => (
          <SelectionItem
            key={option}
            isSelected={option === selected}
            onClick={() => setSelected(option === selected ? null : option)}
          >
            {option}
          </SelectionItem>
        ))}
      </SelectionList>
    </SelectionBox>
  );
};

const SelectionBox = styled.div`
  position: relative;
  background-color: ${colors.default.primaryColor};
  padding: ${spacing.base};
  color: ${colors.default.white};
  cursor: pointer;
`;

const Expander = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectionTitle = styled.h3`
  margin: 0;
  font-weight: 600;
`;

const SelectionList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  margin-top: 0;
  padding: ${spacing.base};
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? "unset" : "none")};
  background-color: ${colors.default.primaryColor};
  color: ${colors.default.white};
  list-style: none;
  width: 100%;
  max-height: 70vh;
  overflow: scroll;
  scrollbar-width: 0;

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ${breakpointQuery.mdDown} {
    max-height: 300px;
  }
`;

const SelectionItem = styled.li<{ isSelected: boolean }>`
  padding: 4px;

  ${breakpointQuery.smDown} {
    padding: ${spacing.small};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      font-weight: 600;
      color: ${colors.default.secondaryColor};
    `};

  &:hover {
    color: ${colors.default.linkHoverColor};
  }

  &::before {
    content: "";
  }
`;
