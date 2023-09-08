import React from "react";

interface IconProps {
  style?: React.CSSProperties;
  src?: string;
  alt?: string;
}

const Icon = ({ ...props }: IconProps) => {
  return <img src={props.src} alt={props.alt} style={props.style} />;
};
export default Icon;
