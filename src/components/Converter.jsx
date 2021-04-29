import React, {useState} from 'react'

const convertColor = (colorValue) => { 
        let rgbColor = {};
        let color = colorValue.substring(1);
        rgbColor.r = parseInt(color.substring(0,2),16);
        rgbColor.g = parseInt(color.substring(2,4),16);
        rgbColor.b = parseInt(color.substring(4),16);
        const rgbValue = `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;
        return rgbValue
}

const isHex = (value_6chars) => {
    const regexp = /^[0-9a-fA-F]+$/;
    return regexp.test(value_6chars) ? true : false;
}

function Converter(props) {
    const [valueHEX, setValueHEX] = useState("");
    const [valueRGB, setValueRGB] = useState("");
    const handleChange = ({target}) => {        
        setValueHEX(()=> target.value);
        target.value.length === 7 && target.value.substring(0,1) === "#"
        ? isHex(target.value.substring(1,7))
            ? setValueRGB(() => convertColor(valueHEX)) : setValueRGB(() => "Ошибка!")
        : target.value.length > 7 || (target.value.length === 7 && target.value.substring(0,1) !== "#")
            ? setValueRGB(() => "Ошибка!") : setValueRGB(() => "")
    }
    const bgColor = valueRGB !== "" ? (valueRGB === "Ошибка!" ? "red" : valueRGB) : "";

    return (
        <div className="container" style={{backgroundColor: bgColor}}>
            <form className="converter-form">
                <p><input type="text" name="enter" autoComplete="off" value={valueHEX} onChange={handleChange} /></p>
                <div className="output">{valueRGB}</div>
            </form> 
        </div>       
    )
}

export default Converter