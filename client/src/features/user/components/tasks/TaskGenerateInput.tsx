import { ClipboardList, Sparkles } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function TaskGenerateInput({generate}: {generate: any}) {

    const [text, setText] = useState<string>()


    const handleGenerate = () => {
        generate({scheduleText: text});
    }


  return (
    <div className="p-6 border rounded-3xl shadow-md bg-white space-y-4">
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
            <ClipboardList className="w-5 h-5" />
            <span>Plan Your Day</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            What do you need to focus on today? Add your tasks, events, or
            reminders below and let us help you stay organized.
          </p>
          <Textarea
            rows={6}
            onChange={(e) => setText(e.currentTarget.value)}
            placeholder="e.g. Finalize deck, follow up with Sarah, 6PM workout..."
            className="resize-none text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
          <Button disabled={!text} onClick={handleGenerate} className="w-full gap-2 text-white bg-blue-600 hover:bg-blue-700">
            <Sparkles className="w-4 h-4" />
            <span>Generate Magic Plan</span>
          </Button>
        </div>
  )
}
