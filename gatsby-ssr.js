// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="plausible"
      defer
      data-domain="amsterdam.pydata.org"
      src="https://plausible.io/js/script.tagged-events.js"
    ></script>,
  ]);
};