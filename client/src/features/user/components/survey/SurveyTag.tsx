import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import NextSurveyButton from "./NextSurveyButton";
import SurveyNote from "./SurveyNote";

export default function SurveyTag() {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = () => {
        if (inputValue.trim() && !tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <>
        <div className="border w-[30rem] border-gray-200 p-4 rounded-lg bg-gray-50 max-w-md">
            <h2 className="text-lg font-medium mb-3 text-gray-800">Tags</h2>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                    >
                        <span className="mr-2">{tag}</span>
                        <span
                            onClick={() => handleRemoveTag(tag)}
                            className="cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex mt-3 gap-2">
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a tag"
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Button
                    onClick={handleAddTag}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add
                </Button>
            </div>
        </div>
            <div className="my-6">
                <NextSurveyButton next={() => {}} isDisable={true} />
            </div>
            <SurveyNote />
        </>

    );
}
