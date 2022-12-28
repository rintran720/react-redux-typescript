/* eslint-disable react/prop-types */
import React from 'react';
import Oops from '~/containers/Oops';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
    // writeErrorLogToServer(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Oops />;
    }

    return (this.props as any).children;
  }
}
