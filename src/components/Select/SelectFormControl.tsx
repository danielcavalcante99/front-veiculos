import {ChangeEvent, FocusEvent} from "react";

interface SelectFormControlProps {
    handlerChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    handlerFocus?: (event: FocusEvent<HTMLSelectElement>) => void;
    listaSelected: string[];
    placeHolder: string;
    border?: number;
    value?: string | number | readonly string[] | undefined;
    id: string;
    required?: boolean;
}

function SelectFormControl({handlerChange, handlerFocus, listaSelected, placeHolder, id, border, value, required}: SelectFormControlProps) {
    return (
        <select id={`input-${id}`} className={`form-select ${required ? value ? '' : 'is-invalid ': ''} ${border ? 'border-' + border : ''}`} aria-label="multiple select example"
                onChange={handlerChange} value={value} onFocus={handlerFocus}>
            <option value=''>{placeHolder}</option>
            {listaSelected.map((m, i) =>
                <option key={i} value={m}>{m}</option>
            )}
        </select>
    );
}

export default SelectFormControl;
