import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onChange = (newEditorState:any) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command:any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onH1Click = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'header-one'));
  };

  const onH2Click = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'header-two'));
  };

  return (
    <div>
      <div>
        <button onClick={onBoldClick}>Bold</button>
        <button onClick={onItalicClick}>Italic</button>
        <button onClick={onH1Click}>H1</button>
        <button onClick={onH2Click}>H2</button>
      </div>
      <div>
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default MyEditor;
