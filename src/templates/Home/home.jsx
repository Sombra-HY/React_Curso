import './style.css';
import {Component} from "react";
import {getAPI} from "../../utils/LoadPosts";
import {Box} from "../../components/Post";
import {Button} from "../../components/Buttom/Button";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Home extends Component{

  state = {
    post: [],
    allposts: [],
    page:0,
    postPorPage: 10,

  }

  async componentDidMount() {
     await this.loadPost();
  }

  loadPost = async ()=>{
    const {page, postPorPage} = this.state;

    const postJson = await getAPI();
    this.setState(
        {post: postJson.slice(page,postPorPage),
          allposts: postJson});
  }

  loadMorePosts = () =>{
      const {post, allposts, page, postPorPage} = this.state;
      const nextpage = page+postPorPage;
      const nextpost = allposts.slice(nextpage,postPorPage+nextpage);
      post.push(...nextpost);

      this.setState({post, page: nextpage}
      )


  }

  render() {
    const {post,page,allposts,postPorPage} = this.state;
    const nomoreposts = (postPorPage + page >= allposts.length);


    return (
        <section className="container">
            <Box post={post}/>
            <Button
                text={"Load more Posts"}
                act={this.loadMorePosts}
                disable = {nomoreposts}
            />
        </section>
    );
  }
}

export default Home;
