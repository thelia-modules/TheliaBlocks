import React from "react";

import "./BlockTooltip.css";

function BlockTooltip({
  title,
  image,
  description,
}: {
  title: string;
  image?: string;
  description?: string;
}) {
  return (
    <div className="BlockTooltip">
      {image && <img className="BlockTooltip-image" src={image} alt={title} />}
      <p className="BlockTooltip-title">{title}</p>
      {description && <p className="BlockTooltip-description">{description}</p>}
    </div>
  );
}

export default BlockTooltip;
