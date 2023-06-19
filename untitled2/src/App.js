import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';

const Post = ({ post }) => {
    return (
        <div id={post.id} className="posts">
            <h3>{post.title}</h3>
            <p> {post.body} </p>
        </div>
    );
};

Post.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    }),
};

function App() {
    const [posts, setPost] = useState([]);
    const [value, setValue] = useState('');

    // const [allpost, setAllPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((r) => r.json())
            .then((r) => setPost(r));
    }, []);

    return (
        <div className="App">
            <input
                type="search"
                className="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="allpost">
                {useMemo(() => {
                    return posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ));
                }, [posts])}
            </div>
        </div>
    );
}
export default App;

//useMemo guarda algum(s) componente(s) na memória
