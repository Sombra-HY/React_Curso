import './style.css';
import {useCallback, useEffect, useState} from "react";
import {getAPI} from "../../utils/LoadPosts";
import {Box} from "../../components/Post";
import {Button} from "../../components/Buttom/Button";
import {Input} from "../../components/textinput";


// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

const Home = () =>{

    const [post, setpost] = useState([]);
    const [allposts, setallposts] = useState([]);
    const [page, setpage] = useState(0);
    const [postPorPage] = useState(10);
    const [searchValue, setsearchValue] = useState("");



    const loadPost = useCallback( async (page, postPorPage)=>{

        const postJson = await getAPI();

        setpost(postJson.slice(page,postPorPage));
        setallposts(postJson);

    },[]);

    useEffect(()=>{
        console.log("eita");
        loadPost(0,postPorPage);
    },[loadPost,postPorPage])

    const loadMorePosts = () =>{
        const nextpage = page+postPorPage;
        const nextpost = allposts.slice(nextpage,postPorPage+nextpage);
        post.push(...nextpost);

        setpost(post);
        setpage(nextpage);

    }
    const handChange = (e) => {
        const{value} = e.target;
        setsearchValue(value);
    }


    const nomoreposts = (postPorPage + page >= allposts.length);

    const filterPosts = !!searchValue?
        allposts.filter(post => {
                return post.title.toLowerCase()
                    .includes(searchValue.toLowerCase());
            }
        )
        : post;

    return (
        <section className="container">

            <div className="search-Container">
                {!!searchValue && (
                    <h1>Search: {searchValue}</h1>
                )}
                <Input
                    searchValue ={searchValue}
                    handChange = {handChange}
                    place = {"Digite aqui"}
                />
            </div>

            <h1>
                { filterPosts.length > 0 ?
                    (<Box post={filterPosts}/>)
                    :
                    (<div>
                            <img src="https://64.media.tumblr.com/9ed6cb0648f026366e2a26f241b16de7/tumblr_mn4lwvvyHO1qg6rkio1_500.gifv"
                                 alt="sla"
                                 width="30%"
                            />
                            <h3> Encontrei nao meu chefe!</h3>
                        </div>
                    )
                }
            </h1>

            <div>{!searchValue && (
                <Button
                    text={"Load more Posts"}
                    act={loadMorePosts}
                    disable = {nomoreposts}
                />
            ) }

            </div>
        </section>
    );
}

// class Home extends Component{
//
//   state = {
//     post: [],
//     allposts: [],
//     page:0,
//     postPorPage: 10,
//     searchValue: "",
//   }
//
//   async componentDidMount() {
//      await this.loadPost();
//   }
//
//   loadPost = async ()=>{
//     const {page, postPorPage} = this.state;
//
//     const postJson = await getAPI();
//     this.setState(
//         {post: postJson.slice(page,postPorPage),
//           allposts: postJson});
//   }
//
//   loadMorePosts = () =>{
//       const {post, allposts, page, postPorPage} = this.state;
//       const nextpage = page+postPorPage;
//       const nextpost = allposts.slice(nextpage,postPorPage+nextpage);
//       post.push(...nextpost);
//
//       this.setState({post, page: nextpage}
//       )
//   }
//
//   handChange = (e) => {
//       const{value} = e.target;
//       console.log(value);
//       this.setState({searchValue: value})
//
//   }
//
//   render() {
//     const {post, page, allposts, postPorPage,searchValue } = this.state;
//     const nomoreposts = (postPorPage + page >= allposts.length);
//
//
//     const filterPosts = !!searchValue?
//         allposts.filter(post => {
//             return post.title.toLowerCase()
//                 .includes(searchValue.toLowerCase());
//             }
//         )
//         : post;
//
//     return (
//         <section className="container">
//
//             <div className="search-Container">
//                 {!!searchValue && (
//                     <h1>Search: {searchValue}</h1>
//                 )}
//                 <Input
//                     searchValue ={searchValue}
//                     handChange = {this.handChange}
//                     place = {"Digite aqui"}
//                 />
//             </div>
//
//             <h1>
//                 { filterPosts.length > 0 ?
//                     (<Box post={filterPosts}/>)
//                     :
//                     (<div>
//                             <img src="https://64.media.tumblr.com/9ed6cb0648f026366e2a26f241b16de7/tumblr_mn4lwvvyHO1qg6rkio1_500.gifv"
//                                  alt="sla"
//                                  width="30%"
//                             />
//                             <h3> Encontrei nao meu chefe!</h3>
//                     </div>
//                     )
//                 }
//             </h1>
//
//             <div>{!searchValue && (
//                 <Button
//                     text={"Load more Posts"}
//                     act={this.loadMorePosts}
//                     disable = {nomoreposts}
//                 />
//             ) }
//
//             </div>
//
//         </section>
//     );
//   }
// }

export default Home;
