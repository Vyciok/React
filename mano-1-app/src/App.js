import './App.css';
import Main2 from './Main2';

function App() {
  let posts = [
    // {
    //   title : "Pavadinamas1",
    //   content : "lorem pavadinimas2",
    //   img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Western_Han_Iron_Sword.jpg/1280px-Western_Han_Iron_Sword.jpg"
    // },
    // {
    //   title : "Pavadinamas2",
    //   content : "lorem pavadinimas2",
    //   img : "https://wallpapercave.com/dwp2x/wp2846682.jpg"
    // },
    {
      title : "Roblox",   
      content : "lorem pavadinimas1",
      img : "https://wallpapercave.com/dwp2x/wp1815425.jpg"
    },
  ];

  let list = posts.map((post) => {
    return (
      <Main2 title={post.title} content={post.content} img={post.img} />
    );
  });

  return <div>{list}</div>
}

export default App;
