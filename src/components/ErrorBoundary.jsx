import React from "react";

/**
 * Catches render/runtime errors (e.g. a lost or failed WebGL context on
 * mobile GPUs) so a single broken component can't take the whole page down.
 * Renders `fallback` instead of unmounting the React tree.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn("ErrorBoundary caught — showing fallback:", error);
    }
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export default ErrorBoundary;
