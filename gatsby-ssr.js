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
    <script
      type="text/javascript"
      src="https://amsterdam2024.pydata.org/cfp/schedule/widget/v2.en.js"
    ></script>,
    <link
      rel="stylesheet"
      type="text/css"
      href="https://pretalx.com/democon/schedule/widget/v2.css"
    ></link>,
  ]);
};
