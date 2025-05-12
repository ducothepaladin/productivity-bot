import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function SurveyNote() {
  const [text, setText] = useState("");
  const maxLength = 300;

  return (
    <>
      <div className="flex flex-col gap-2 p-3">
        <label
          htmlFor="survey-text"
          className="text-sm font-medium text-gray-700"
        >
          Optional Note
        </label>
        <Textarea
          id="survey-text"
          className="w-[30rem] border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your answer here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxLength}
        />
        <div className="text-sm text-gray-500">
          {text.length}/{maxLength} characters
        </div>
      </div>
    </>
  );
}

