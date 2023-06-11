import './App.css';
import {Component} from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class App extends Component{

  state = {
    counter: 0
    ,
    post: [
      {
        id:1,
        title: "valor 1",
        body:"copor 1"
      },
      {
        id:2,
        title: "valor 2",
        body:"copor 2"
      }
    ]
  }

  constructor(props) {
    super(props);
  }

  timeOutUpdate = null;

  // atualiza ao componente mudar (Ciclo)
  componentDidUpdate(){
    this.changeCounter();
  }

  //modifica o estado atual
  changeCounter = () =>{
    const {post, counter} = this.state;

    this.timeOutUpdate = setTimeout(()=>{
      this.setState({counter: counter+1, post: post});
    },50);
  }

  //ao carregar a pagina muda componente
  componentDidMount() {
    this.changeCounter();
  }

  // desmontando o componente
  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate)
  }


  render() {
    const {post,counter} = this.state;

    return (
      <div className="App">
        <h1> {counter} </h1>
        {post.map(px => (
            <div key={px.id}>
              <h1 > {px.title}</h1>
              <p > {px.body}</p>
            </div>
            )
        )}
      </div>
    );
  }
}

export default App;
