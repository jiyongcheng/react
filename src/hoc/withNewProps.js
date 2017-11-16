import React, { Component } from "react";
import propTypes from "prop-types";
import { wrapDisplayName } from "recompose";

const withNewProps = WrappedComponent => {
  class withNewPropsComponent extends Component {
    constructor(props) {
      super(props);
      console.log("with new Props:", props);
      this.displayName = wrapDisplayName(WrappedComponent, "withInfoUpper");
    }

    render() {
      console.log("render in with new props:", this.props);
      const newProps = {
        name: {
          value: "new prop",
        },
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }

  withNewPropsComponent.defaultProps = {};
  withNewPropsComponent.propTypes = {};

  return withNewPropsComponent;
};

export default withNewProps;
