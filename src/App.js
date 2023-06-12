import './App.css';
import {Component} from "react";
import {Postcard} from "./components/Postcard";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class App extends Component{

  state = {
    post: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getAPI();

  }

  getAPI = async ()=> {
    const html = fetch("https://jsonplaceholder.typicode.com/posts");
    const images = fetch("https://jsonplaceholder.typicode.com/photos");

    const [content, phtos] = await Promise.all([html,images]);
    const postJsonh = await content.json();
    const postJsoni = await phtos.json();

    const postJson = postJsonh.map((post, index)=>{
      return {...post,urls:postJsoni[index].url}
    })


    this.setState({post: postJson});

  }


  render() {
    const {post} = this.state;

    return (
        <section className="container">
          <div className="box">{
              post.map(px => (<Postcard px={px}/>))
            }

          </div>
        </section>
    );
  }
}

export default App;
