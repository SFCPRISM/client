import { Col, Grid, Row } from "components/layout/Grid";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import { StyledErrorRow } from "pages/404";
import { Component, ReactNode } from "react";

interface IErrorBoundaryProps {
  resetKey?: string;
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  public componentDidUpdate(prevProps: IErrorBoundaryProps): void {
    if (!this.state.hasError) {
      return;
    }
    if (this.props.resetKey !== prevProps.resetKey) {
      this.setState({
        hasError: false,
      });
    }
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Grid>
          <StyledErrorRow>
            <Col xs={12} md={6} centered>
              <Typography variant="h1" color={colors.default.primaryColor}>
                Etwas ist schief gelaufen.
              </Typography>
              <Link href={`/`} passHref>
                <ButtonLink
                  variant="contained"
                  onClick={() => this.setState({ hasError: false })}
                >
                  Zur Startseite
                </ButtonLink>
              </Link>
            </Col>
          </StyledErrorRow>
        </Grid>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
