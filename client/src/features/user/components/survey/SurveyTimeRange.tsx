import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { X } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useRef, useState } from "react";
import { formatTo12HourTime } from "@/lib/util/format";
import NextSurveyButton from "./NextSurveyButton";
import type { SurveyComponentProps } from "@/type/Survey";

type TimeSlot = {
  from: string;
  to: string;
};

export default function SurveyTimeRange({
  onNext,
  update,
  updateNote,
  note,
  dataKey,
  current
}: SurveyComponentProps) {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(current? [...current.value]: []);
  const [isPossibleTimeSlot, setIsPossibleTimeSlot] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const compareTimeSlot = () => {
    const from = fromRef.current?.value;
    const to = toRef.current?.value;

    if (!from && !to) {
      setIsPossibleTimeSlot(false);
      return;
    }
    setIsPossibleTimeSlot(from !== undefined && to !== undefined && from < to);
  };

  const handleAddTimeSlot = () => {
    const from = fromRef.current?.value;
    const to = toRef.current?.value;
    if (from && to) {
      setTimeSlots([...timeSlots, { from, to }]);
      setOpen(false);
    }
  };

  const handleRemoveTimeSlot = (index: number) => {
    setTimeSlots(timeSlots.filter((_, i) => i !== index));
  };

  const nextSurvey = useCallback(() => {
    update({ [dataKey]: { value: [...timeSlots], note } });
    setTimeSlots([]);
    updateNote("");
    onNext();
  }, [note, dataKey, timeSlots, onNext, updateNote]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="p-6">
          <div className="mb-6 w-[50rem] p-6 grid grid-cols-3 gap-4">
            {timeSlots.length > 0 &&
              timeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="px-4 py-3 cursor-default relative rounded-full flex justify-center items-center shadow-md text-sm bg-blue-200 hover:bg-blue-100 transition-transform transform hover:scale-105"
                >
                  <span className="font-medium text-gray-700">
                    {formatTo12HourTime(slot.from)} -{" "}
                    {formatTo12HourTime(slot.to)}
                  </span>
                  <span
                    onClick={() => handleRemoveTimeSlot(index)}
                    className="absolute top-[-8px] right-[-8px] bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition-colors"
                    aria-label="Remove time slot"
                  >
                    <X size={14} />
                  </span>
                </div>
              ))}
            <DialogTrigger asChild>
              <div
                className="px-4 py-3 cursor-pointer relative rounded-full flex justify-center items-center shadow-md text-sm bg-white hover:bg-gray-100 transition-transform transform hover:scale-105"
                aria-label="Add Time Slot"
              >
                <span className="font-medium text-sm">+ Add Time Slot</span>
              </div>
            </DialogTrigger>
          </div>
          <Separator />

          <DialogContent className="sm:max-w-[425px] bg-gray-50 rounded-lg shadow-lg transition-transform transform scale-95 hover:scale-100">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-gray-800">
                Add a New Time Slot
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                Specify the start and end times for your new time slot.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-6 p-4">
              <div className="flex flex-col">
                <Label className="mb-2 text-gray-700">From</Label>
                <Input
                  onChange={compareTimeSlot}
                  ref={fromRef}
                  type="time"
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <Label className="mb-2 text-gray-700">To</Label>
                <Input
                  onChange={compareTimeSlot}
                  ref={toRef}
                  type="time"
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleAddTimeSlot}
                disabled={!isPossibleTimeSlot}
                type="submit"
                className={`w-full ${
                  isPossibleTimeSlot
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } transition-colors rounded-md`}
              >
                {isPossibleTimeSlot
                  ? "Save Changes"
                  : "Start time should be less than end time"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
      <div className="my-6">
        <NextSurveyButton
          isDisable={!(timeSlots.length > 0)}
          next={nextSurvey}
        />
      </div>
    </>
  );
}
