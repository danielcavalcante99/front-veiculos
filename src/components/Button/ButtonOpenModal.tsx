interface ButtonOpenModalProps {
    children: React.ReactNode;
    nameModal: string;
}

function ButtonOpenModal({children, nameModal}: ButtonOpenModalProps) {
    return (
        <span role="button" data-bs-toggle="modal" data-bs-target={`#${nameModal}`}>
              {children}
        </span>
    )
}

export default ButtonOpenModal;
