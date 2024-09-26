interface ButtonCloseModalFooterProps {
    text: string;
}

function ButtonCloseModalFooter({text}: ButtonCloseModalFooterProps) {
    return (
        <button type="button" className="p-2 rounded-3 btn btn-secondary" data-bs-dismiss="modal">{text}</button>
    )
}

export default ButtonCloseModalFooter;
