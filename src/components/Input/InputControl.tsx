interface InputFormControlProps {
    handlerChange?: (event: { target: HTMLInputElement }) => void;
    id: string;
    disabled?: boolean;
    placeHolder: string;
    border?: number;
    value: string | number | readonly string[] | undefined | null;
    required?: boolean;
}

function InputFormControl({handlerChange, id, placeHolder, border, value, disabled, required}: InputFormControlProps) {
    return (
        <input id={`input-${id}`} type="text" className={`form-control ${required ? value ? '' : 'is-invalid ': ''} ${border ? 'border-' + border : ''}`}
               onChange={handlerChange} value={value ? value : ''} placeholder={placeHolder} disabled={disabled}/>
    );
}

export default InputFormControl;
