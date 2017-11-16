import React, { Component } from "react";
import propTypes from "prop-types";
import { wrapDisplayName } from "recompose";

const withInfoUpper = WrappedComponent => {
  class withInfoUpperComponent extends Component {
    constructor(props) {
      super(props);
      console.log("with info upper:", props);

      this.displayName = wrapDisplayName(WrappedComponent, "withInfoUpper");
    }

    render() {
      console.log("render in with info upper:", this.props);
      const props = Object.assign({}, this.props, {
        label: this.props.label.toUpperCase(),
      });
      return <WrappedComponent {...props} />;
    }
  }

  withInfoUpperComponent.defaultProps = {};
  withInfoUpperComponent.propTypes = {};

  return withInfoUpperComponent;
};

export default withInfoUpper;
