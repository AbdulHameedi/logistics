import React, { Component, ReactNode } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
};
type ErrorBoundaryProps = {
  children: ReactNode;
};
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
    console.log(errorInfo);
  }
  render() {
    switch (this.state.hasError) {
      case true:
        return <h1>Something went wrong</h1>;
      case false:
        return this.props.children;
      default:
        return null;
    }
  }
}

export default ErrorBoundary;
