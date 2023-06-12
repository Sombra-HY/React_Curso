export const getAPI = async ()=> {
    const html = fetch("https://jsonplaceholder.typicode.com/posts");
    const images = fetch("https://jsonplaceholder.typicode.com/photos");

    const [content, phtos] = await Promise.all([html,images]);
    const postJsonh = await content.json();
    const postJsoni = await phtos.json();

    return postJsonh.map((post, index) => {
        return {...post, urls: postJsoni[index].url}
    });

}
