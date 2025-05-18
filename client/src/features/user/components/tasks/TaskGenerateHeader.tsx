import {format} from "date-fns"


export default function TaskGenerateHeader() {

  const today = format(new Date(), "PP");

  return (
    <div className="mt-3 px-5 py-4">
        <h1 className="font-semibold text-lg">{today}</h1>
    </div>
  )
}
