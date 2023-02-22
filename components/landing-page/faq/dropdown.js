import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Dropdown = ({ paragraf, desc }) => {
    const [angle, setAngle] = useState(false);

    const handleAngle = () => {
        setAngle(!angle);
    }

    return (
        <>
            {/* faq dropdown */}
            <div className="p-5 xs:p-6 sm:p-8 border border-solid border-[#dbdbdb] rounded-xl shadow-lg flex justify-between items-center gap-5">
                <p className="text-left text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] text-[#1a1a1a]">{paragraf}</p>
                <button onClick={handleAngle}>
                    {/* if angle true the icon will be faAngleUp otherwise it'll be faAngleDown */}
                    <FontAwesomeIcon className="text-[#1a1a1a]" icon={angle ? faAngleUp : faAngleDown}/>
                </button>
            </div>

            {/* if angle true the faq description will show up */}
            <div className={angle ? "hidden" : "block"}>
                <div className="border-b border-l border-r rounded-lg -mt-6 pt-8 p-5">
                    <p className="text-left text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] text-[#1a1a1a]">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Dropdown;