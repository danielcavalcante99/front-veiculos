interface ModalBodyProps {
    children: React.ReactNode;
}

function ModalBody({children}:ModalBodyProps) {
    return (
        <div className="modal-body">
            {children}
        </div>
    )
}

export default ModalBody;
