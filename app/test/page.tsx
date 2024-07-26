"use client";
import MultiStepForm from "@/components/multiStepForm";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};
const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Tiptap /> */}
      <MultiStepForm />
    </div>
  );
};

export default Page;
