import React, { Fragment } from 'react';

import { IChildren } from 'types/common.type';

import ErrorFallback from './ErrorFallback';

interface Props extends IChildren {
  errorHandler?: ErrorHandler;
}

type ErrorHandler = (error: Error, info: React.ErrorInfo) => void;

type ErrorState = { error?: Error };

const ErrorBoundary = ({ children, errorHandler }: Props) => {
  return class extends React.Component<Props, ErrorState> {
    state: ErrorState = {
      error: undefined,
    };

    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      if (errorHandler) {
        errorHandler(error, errorInfo);
      }
    }

    onResetError = () => {
      this.setState({
        error: undefined,
      });
    };

    render(): React.ReactNode {
      if (this.state.error) {
        return <ErrorFallback error={this.state.error} resetErrorBoundary={this.onResetError} />;
      }

      return <Fragment>{children}</Fragment>;
    }
  };
};

export default ErrorBoundary;
