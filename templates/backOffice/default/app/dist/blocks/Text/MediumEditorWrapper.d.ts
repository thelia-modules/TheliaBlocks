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
    constructor(props: IEditorProps);
    static defaultProps: {
        text: string;
        onChange: () => void;
    };
    componentDidMount: () => void;
    componentDidUpdate: () => void;
    componentWillUnmount: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=MediumEditorWrapper.d.ts.map