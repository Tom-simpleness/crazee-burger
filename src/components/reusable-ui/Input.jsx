import React from "react";

export default function Input({ value, onChange, Icon, ...restProps }) {
  return (
    <div>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...restProps} />
    </div>
  );
}
