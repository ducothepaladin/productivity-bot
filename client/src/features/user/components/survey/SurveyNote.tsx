import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

export default function SurveyNote({update, note, current}: {update: any, note: string, current: any}) {
  const maxLength = 300;

  useEffect(() => {
      if(current && Object.keys(current).length > 0) {
        update(current.note)
      }
    },[current])

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
          value={note}
          onChange={(e) => update(e.target.value)}
          maxLength={maxLength}
        />
        <div className="text-sm text-gray-500">
          {note.length}/{maxLength} characters
        </div>
      </div>
    </>
  );
}

