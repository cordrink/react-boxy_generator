import chevron from "../../assets/chevron.svg"
import {useState} from "react";
import {ShadowColorPicker} from "./ShadowColorPicker.jsx";
import {ShadowRange} from "./ShadowRange.jsx";

export const Shadow = ({panelNumber, shadow}) => {
    const [toggleShadow, setToggleShadow] = useState(panelNumber === 1);

    const shadowInputs = shadow.inputs.map((input, index) => {
        if (input.type === "range") {
            return <ShadowRange
                key={index}
                inputData={input}
                shadowID={shadow.id}
            />;
        } else if (input.type === "color") {
            return <ShadowColorPicker
                key={index}
                inputData={input}
                shadowID={shadow.id}
            />;
        }
        return null;
    })

    return (
        <li className={"bg-gray-50 border-b border-gray-300"}>
            <button
                onClick={() => setToggleShadow(!toggleShadow)}
                className={"w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"}
            >
                <span>Shadow {panelNumber}</span>
                <img
                    src={chevron}
                    alt="chevron icon"
                    style={{
                        transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0)"}`,
                    }}
                    className={"font-bold w-5"}/>
            </button>

            {toggleShadow && (
                <>
                    <div className={"flex items-end px-6 py-4"}>
                        {/*<Checkbox />*/}
                        <button
                            className={"ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"}>Remove
                        </button>
                    </div>
                    <div className={"px-6 py-4"}>
                        {shadowInputs}
                    </div>
                </>
            )}
        </li>
    )
}
