import { useEffect, useState } from "react";

export function useMatchMedia(
  mediaQuery: string,
  ssrFallbackValue: boolean
): boolean {
  const [matchesMediaQuery, setMatchesMediaQuery] = useState(() => {
    return typeof matchMedia === "undefined"
      ? ssrFallbackValue
      : matchMedia(mediaQuery).matches;
  });
  useEffect(() => {
    if (typeof matchMedia === "undefined") {
      return;
    }
    const mql = matchMedia(mediaQuery);
    if (matchesMediaQuery !== mql.matches) {
      setMatchesMediaQuery(mql.matches);
    }
    const mediaQueryChanged = (e: MediaQueryListEvent) => {
      setMatchesMediaQuery(e.matches);
    };
    addMediaQueryEventListener(mql, mediaQueryChanged);
    return () => {
      removeMediaQueryEventListener(mql, mediaQueryChanged);
    };
  }, [mediaQuery]);
  return matchesMediaQuery;
}

/**
 * Fix for Safari 13 which does not support 'addEventListener' but only the deprecated 'addListener'
 *
 * https://jira.devinite.com/browse/SUP-23906
 */
function addMediaQueryEventListener(
  mql: MediaQueryList,
  onChangeCallback: (event: MediaQueryListEvent) => void
): void {
  "addEventListener" in mql
    ? mql.addEventListener("change", onChangeCallback)
    : mql.addListener(onChangeCallback);
}
/**
 * Fix for Safari 13 which does not support 'removeEventListener' but only the deprecated 'removeListener'
 *
 * https://jira.devinite.com/browse/SUP-23906
 */
function removeMediaQueryEventListener(
  mql: MediaQueryList,
  onChangeCallback: (event: MediaQueryListEvent) => void
): void {
  "removeEventListener" in mql
    ? mql.removeEventListener("change", onChangeCallback)
    : mql.removeListener(onChangeCallback);
}
