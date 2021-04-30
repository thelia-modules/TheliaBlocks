import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";

import MediumEditor, { CoreOptions } from "medium-editor";
import React, { useEffect, useRef, useState } from "react";

export default function Editor(prop: {
  text: string;
  onChange: (newText: string, editor: MediumEditor.MediumEditor) => void;
  options?: CoreOptions;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [text, setText] = useState(prop.text);
  const [editor, setEditor] = useState<MediumEditor.MediumEditor | null>(null);

  useEffect(() => {
    if (ref.current) {
      const medium = new MediumEditor(ref.current, prop.options);
      setEditor(medium);

      medium.subscribe("editableInput", () => {
        if (prop.onChange && ref.current)
          prop.onChange(ref.current.innerHTML, medium);
      });
    }
  }, [ref]);

  useEffect(() => {
    setText(prop.text);
  }, [text]);

  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor]);

  const editorProp = {
    ...prop,
    dangerouslySetInnerHTML: { __html: text },
    ref,
  };

  return React.createElement("div", editorProp);
}
