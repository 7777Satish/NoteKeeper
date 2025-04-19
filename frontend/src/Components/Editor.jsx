import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Bold } from "@tiptap/extension-bold";
import { Italic } from "@tiptap/extension-italic";
import { Underline } from "@tiptap/extension-underline";
import { Strike } from "@tiptap/extension-strike";
import { Heading } from "@tiptap/extension-heading";
import { BulletList } from "@tiptap/extension-bullet-list";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { ListItem } from "@tiptap/extension-list-item";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { useState } from "react";

const Editor = () => {
  const [fontSize, setFontSize] = useState("16px");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Strike,
      Heading,
      BulletList,
      OrderedList,
      ListItem,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: "<p>Welcome to NotesBolt Editor!</p>",
  });

  if (!editor) return null;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "10px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <button onClick={() => editor.chain().focus().toggleBold().run()} style={{ ...buttonStyle, fontWeight: "bold" }}>
          B
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} style={{ ...buttonStyle, fontStyle: "italic" }}>
          I
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} style={{ ...buttonStyle, textDecoration: "underline" }}>
          U
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} style={{ ...buttonStyle, textDecoration: "line-through" }}>
          S
        </button>

        {/* Headings */}
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} style={buttonStyle}>
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={buttonStyle}>
          H2
        </button>

        {/* Lists */}
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} style={buttonStyle}>
          • List
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} style={buttonStyle}>
          1. List
        </button>

        {/* Font Size */}
        <select onChange={(e) => setFontSize(e.target.value)} style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}>
          <option value="14px">14px</option>
          <option value="16px" selected>
            16px
          </option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </select>

        {/* Table */}
        <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run()} style={buttonStyle}>
          Table
        </button>
      </div>

      {/* Editor Content */}
      <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "200px", borderRadius: "5px", backgroundColor: "white", fontSize }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

// Button Styles
const buttonStyle = {
  padding: "5px 10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "white",
  transition: "background 0.2s",
};

export default Editor;
