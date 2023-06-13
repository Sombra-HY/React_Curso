import {Postcard} from "../Postcard";
import "./style/style.css";

export const Box =  ({post})=>{
    return(
        <div className="box">{
            post.map(px => (<Postcard key={px.id} px={px}/>))
        }
        </div>
    )
}