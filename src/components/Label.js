import React, { Component } from "react";
import propTypes from "prop-types";
import { compose } from "recompose";
import withInfoUpper from "../hoc/withInfoUpper";
import withNewProps from "../hoc/withNewProps";

const Label = ({ labelFor, label, className }) => {
  console.log("render label");
  return (
    <label labelfor={labelFor} className={className}>
      {label}
    </label>
  );
};

Label.defaultProps = {
  className: "",
  labelFor: "",
  label: "",
};

Label.propTypes = {
  className: propTypes.string,
  labelFor: propTypes.string,
  label: propTypes.string,
};

export default compose(withInfoUpper, withNewProps)(Label);
