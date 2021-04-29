import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

import MediumEditor, { CoreOptions } from "medium-editor";
import React, { useEffect, useRef, useState } from "react";

export default function Editor(props: {
  text: string;
  options?: CoreOptions;
  className?: string;
  onChange: Function;
}) {
  const [text, setText] = useState(props.text);
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    const medium = new MediumEditor(wrapperRef.current, props.options);

    setText(props.text);

    medium.subscribe("editableInput", () => {
      if (props.onChange) props.onChange(wrapperRef.current.innerHTML, medium);
    });

    return () => {
      medium.destroy();
    };
  }, [text]);

  return (
    <div
      ref={wrapperRef}
      className={`focus:shadow-none focus:outline-none ${
        props.className || ""
      }`}
    ></div>
  );
}
