import './App.css';
import {Component} from "react";

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

    console.log(postJson);

    this.setState({post: postJson});

  }


  render() {
    const {post} = this.state;

    return (
        <section className="container">
          <div className="box">
            {post.map(px => (
                <div key={px.id} className="post box-post" >
                    <h1 > {px.title}</h1>
                    <p > {px.body}</p>
                    <img src={px.urls} alt=""/>
                </div>

                )
            )}
          </div>
        </section>
    );
  }
}

export default App;
