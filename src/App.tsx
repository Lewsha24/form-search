import {Input} from "./components/input";
import {useState} from "react";

export const App = () => {
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <div>Form-scratch</div>

            <Input value={inputValue} onChange={(val) => setInputValue(val)}/>
        </>
    )
}