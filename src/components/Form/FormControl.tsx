interface FormProps {
    children: React.ReactNode;
}

function FormControl({children }: FormProps) {
    return (
        <form>
            {children}
        </form>
    )
}

export default FormControl;
