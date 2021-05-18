import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";

import MediumEditor, { CoreOptions } from "medium-editor";
import React from "react";

interface IEditorProps {
  text: string;
  options?: CoreOptions;
  onChange: (newText: string) => void;
  className?: string;
}

export default class Editor extends React.Component<IEditorProps> {
  editorRef: React.RefObject<HTMLDivElement>;
  editor?: MediumEditor.MediumEditor;

  constructor(props: IEditorProps) {
    super(props);
    this.editorRef = React.createRef();
  }

  static defaultProps = {
    text: "",
    onChange: () => {},
  };

  componentDidMount = () => {
    if (this.editorRef?.current && !this.editor) {
      this.editor = new MediumEditor(
        this.editorRef.current,
        this.props.options
      );
      this.editor.setContent(this.props.text);
      this.editor.subscribe("editableInput", (e) => {
        this.props.onChange(this.editorRef?.current?.innerHTML || "");
      });
    }
  };

  componentDidUpdate = () => {
    if (this.editor) {
      this.editor.restoreSelection();
    }
  };

  componentWillUnmount = () => {
    if (this.editor) {
      this.editor.destroy();
    }
  };

  render() {
    if (this.editor) {
      this.editor.saveSelection();
    }

    return <div ref={this.editorRef} className={this.props.className}></div>;
  }
}
