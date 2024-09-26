interface ColProps {
    children: React.ReactNode;
    col?: number;
}

function Col({children, col}: ColProps) {
    return (
        <div className={col ? `col-${col}` : 'col'}>
            {children}
        </div>
    )
}

export default Col;
