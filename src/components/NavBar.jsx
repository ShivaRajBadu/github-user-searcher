import React from "react";
import PropTypes from "prop-types";
export default function NavBar(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
