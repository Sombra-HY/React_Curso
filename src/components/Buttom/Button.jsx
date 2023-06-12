import "./style/style.css";

export const Button = (props) => {
    const {text,act,disable} = props;
    return (
        <button
            disabled={disable}
            onClick={act}
            className="buttona">
            {text}
        </button>
    )
}