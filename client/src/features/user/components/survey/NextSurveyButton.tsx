import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NextSurveyButton({next, isDisable}: {next: () => void, isDisable: boolean}) {
  return (
    <div>
              <Button
        onClick={next}
        className="mt-6 bg-blue-500 rounded-full text-white font-medium shadow-md hover:bg-blue-600  active:scale-95 transition-all duration-300"
        disabled={isDisable}
      >
        Continue <ArrowRight className="ml-1" />
      </Button>
    </div>
  )
}
