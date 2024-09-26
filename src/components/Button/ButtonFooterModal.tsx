interface ButtonModalFooterProps {
    text: string;
    isValid: boolean;
    onClick: () => void;
}

function ButtonModalFooter({text, isValid, onClick}: ButtonModalFooterProps) {
    return (
        <button type="submit" className="p-2 rounded-3 btn-green border border-2" disabled={isValid}
                data-bs-dismiss="modal" onClick={onClick}>{text}
        </button>
    )
}

export default ButtonModalFooter;
