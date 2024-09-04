import "./button.css";
import classNames from "classnames";

export const Button = ({onClick, type, children, size=""}) => {
    const btnClass = classNames({
        "btn": true,
        "btn-secondary": type === "secondary",
        "btn-primary": type === "primary",
        "btn-small": type === "small",
        "btn-medium": type === "medium"
    })
    return (
        <button className={btnClass} onClick={onClick}>
            {
                children
            }
        </button>
    )
}