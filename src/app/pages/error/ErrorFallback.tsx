import React from 'react';

interface Props {
  error: any;
  resetErrorBoundary: any;
}

const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div>
      <p>Error boundary with react-error-boundary</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
