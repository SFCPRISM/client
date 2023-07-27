import { sanitize } from "isomorphic-dompurify";
import { FunctionComponent, useMemo } from "react";

type TagName = keyof JSX.IntrinsicElements;

interface ISanitzeHtmlOptions {
  /**
   * All tags which are not allowed will be stripped away
   * However the text content of stripped tags will remain
   *
   * @see https://www.npmjs.com/package/dompurify
   */
  allowedTags?: Readonly<TagName[]>;
  /**
   * All attributes which are not allowed will be stripped away
   * @see https://www.npmjs.com/package/dompurify
   */
  allowedAttributes?: Readonly<string[]>;
}

/**
 * Inline elements like span must only contain phrasing content
 *
 * This list contains a set of secure inline tags which are commonly used by editors
 *
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content
 */
const defaultAllowedPhrasingContentTags = [
  "a",
  "span",
  "strong",
  "b",
  "br",
  "i",
  "em",
] as const;

/**
 * Block elements like divs can contain all elements (flow content)
 *
 * This list contains a set of secure tags which are commonly used by editors
 *
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories
 */
const defaultAllowedFlowContentTags = [
  // As phrasing content is a subset of flow content all PhrasingContentTags are also FlowContentTags:
  ...defaultAllowedPhrasingContentTags,
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "p",
  "ul",
  "li",
] as const;

/**
 * This list contains a set of attributes that are needed to enable the base
 * functionality of our secure tags
 */
const defaultAllowedAttributes = ["href"] as const;

/**
 * The useSanitizedHtml hook provides a secure way to work with author or third party html in React.
 *
 * Unallowed tags will be automatically removed by the dompurify package
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const htmlProps = useSanitizedHtml(authorHtml);
 *   return <div {...htmlProps} />
 * }
 * ```
 */
const useSanitizedHtml = (
  source: string,
  {
    allowedTags = defaultAllowedFlowContentTags,
    allowedAttributes = defaultAllowedAttributes,
  }: ISanitzeHtmlOptions = {}
) => {
  const parsedProps = useMemo(
    () => ({
      "data-sanitized-html": "",
      dangerouslySetInnerHTML: {
        __html: sanitize(source, {
          ALLOWED_TAGS: allowedTags as string[],
          ALLOWED_ATTR: allowedAttributes as string[],
        }),
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [source, allowedTags.join(","), allowedAttributes.join(",")]
  );
  return parsedProps;
};

interface ISanitizedHtmlProps {
  html: string;
  allowedTags?: TagName[];
  allowedAttributes?: string[];
  as?: "div" | "span";
  className?: string;
}

/**
 * The SanitizedHtml Component provides a secure way to render author or third party html.
 *
 * Unallowed Tags will be automatically removed by the dompurify package
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   return <SanitizedHtml html={authorHtml} />
 * }
 * ```
 */
export const SanitizedHtml: FunctionComponent<ISanitizedHtmlProps> = ({
  html,
  as: Wrapper = "div",
  allowedTags,
  allowedAttributes,
  ...props
}) => {
  const sanitizedHtml = useSanitizedHtml(html, {
    allowedTags:
      allowedTags ||
      (Wrapper === "div"
        ? defaultAllowedFlowContentTags
        : defaultAllowedPhrasingContentTags),
    allowedAttributes,
  });
  return <Wrapper {...props} {...sanitizedHtml} />;
};
