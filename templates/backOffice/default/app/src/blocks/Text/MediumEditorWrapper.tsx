import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";

import MediumEditor from "medium-editor";
import React from "react";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  static defaultProps = {
    text: "",
    onChange: () => {},
  };

  componentDidMount = () => {
    if (this.editorRef?.current && !this.medium) {
      this.editor = new MediumEditor(
        this.editorRef.current,
        this.props.options
      );
      this.editor.setContent(this.props.text);
      this.editor.subscribe("editableInput", (e) => {
        this.props.onChange(this.editorRef.current.innerHTML);
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

    return <div ref={this.editorRef} {...this.props}></div>;
  }
}
