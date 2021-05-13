const MyButton = ({ onClick, children, color, disabled }) => {
    return <button onClick={onClick} disabled={disabled} style={{ backgroundColor: color, padding: "2rem" }}>{children}</button>
};