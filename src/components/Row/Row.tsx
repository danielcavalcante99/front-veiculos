interface RowProps {
    marginBottom?: number;
    marginTop?: number;
    children: React.ReactNode;
}

function Row({marginBottom, marginTop, children}: RowProps) {
    return (
        <div className={`row ${marginBottom ? 'mb-' + marginBottom : ''} ${marginTop ? 'mt-' + marginTop : ''}`}>
            {children}
        </div>
    )
}

export default Row;
