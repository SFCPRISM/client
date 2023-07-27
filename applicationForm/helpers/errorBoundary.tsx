import { FunctionComponent, Fragment, ReactNode } from "react";
import { Component } from "react";
import { ErrorType } from "../types";
import { IErrorViewProps } from "../views/errorView";
import { gaSendEvent } from "./tracking";

interface IErrorBoundaryProps {
  FallbackComponent: FunctionComponent<IErrorViewProps>;
  children: ReactNode;
}

interface IErrorBoundaryState {
  error: ErrorType | null;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error) {
    const label = error.message;
    gaSendEvent({ action: "AMS", category: "error", label });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { error } = this.state;

    if (error) {
      const errorType = error || ErrorType.Unknown;
      return (
        <Fragment key={errorType}>
          {this.props.FallbackComponent({ errorType })}
        </Fragment>
      );
    }

    return this.props.children;
  }
}
