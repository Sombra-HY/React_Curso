import "./style/style.css";

export const Postcard = ({px})=>{
    return  (
        <div key = {px.id} className="post box-post" >
            <h2 > {px.title}</h2>
            <p > {px.body}</p>
            <img src={px.urls} alt=""/>
        </div>
    )
}


