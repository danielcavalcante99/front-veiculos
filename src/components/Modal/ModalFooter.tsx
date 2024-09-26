interface ModalFooterProps {
    children: React.ReactNode;
}

function ModalFooter({children}: ModalFooterProps) {
    return (
        <div className="modal-footer">
            {children}
        </div>
    )
}

export default ModalFooter;
