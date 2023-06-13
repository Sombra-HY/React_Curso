import "./styel.css"

export const Input = (props)=> {
    const {searchValue,handChange,place} = props;
    return (
        <input
            className = "search-input"
            placeholder = {place}
            value = {searchValue}
            onChange = {handChange}
            type = "search"
        />
    )
}