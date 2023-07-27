import { FunctionComponent, ReactNode } from "react";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

export const LayoutWrapper: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div style={{ minHeight: "calc(100vh - 416px)" }}>
      <div>{children}</div>
      <div style={{ marginBottom: "64px" }} />
    </div>
  );
};
