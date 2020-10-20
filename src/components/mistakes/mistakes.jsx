import React from "react";
import PropTypes from "prop-types";

const Mistakes = ({count = 0}) => {
  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />)}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Mistakes;
