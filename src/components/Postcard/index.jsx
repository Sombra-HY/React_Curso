
export const Postcard = ({px})=>{
    return  (
        <div key={px.id} className="post box-post" >
            <h1 > {px.title}</h1>
            <p > {px.body}</p>
            <img src={px.urls} alt=""/>
        </div>
    )
}


