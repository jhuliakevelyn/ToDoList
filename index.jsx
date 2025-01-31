import "./App.css";

function App() {
  const users = [
    {
      userName: "Adriel",
      gender: "men",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt tempore, dicta distinctio, at optio voluptatem sapiente hic totam ipsum laborum maxime. Nihil, atque dolores qui in consequatur quasi quo.",
      imageUrl:
        "https://www.gettyimages.com.br/detail/foto/smiling-businessman-with-brown-bag-walking-in-city-imagem-royalty-free/691910455?searchscope=image%2Cfilm",
      imageSize: 30,
    },
    {
      userName: "Bernardo",
      gender: "men",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt tempore, dicta distinctio, at optio voluptatem sapiente hic totam ipsum laborum maxime. Nihil, atque dolores qui in consequatur quasi quo.",
      imageUrl:
        "https://www.gettyimages.com.br/detail/foto/portrait-of-a-smiling-young-businessman-imagem-royalty-free/1297832726?searchscope=image%2Cfilm",
      imageSize: 30,
    },

    {
      userName: "Caio",
      gender: "men",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt tempore, dicta distinctio, at optio voluptatem sapiente hic totam ipsum laborum maxime. Nihil, atque dolores qui in consequatur quasi quo.",
      imageUrl:
        "https://www.gettyimages.com.br/detail/foto/enhancing-his-entrepreneurial-ambition-with-the-imagem-royalty-free/637232624?searchscope=image%2Cfilm",
      imageSize: 30,
    },

    {
      userName: "Danilo",
      gender: "men",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt tempore, dicta distinctio, at optio voluptatem sapiente hic totam ipsum laborum maxime. Nihil, atque dolores qui in consequatur quasi quo.",
      imageUrl:
        "https://www.gettyimages.com.br/detail/foto/happy-man-social-media-phone-and-living-room-relax-imagem-royalty-free/1440149723?searchscope=image%2Cfilm",
      imageSize: 30,
    },

    {
      userName: "Estevan",
      gender: "men",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt tempore, dicta distinctio, at optio voluptatem sapiente hic totam ipsum laborum maxime. Nihil, atque dolores qui in consequatur quasi quo.",
      imageUrl:
        "https://www.gettyimages.com.br/detail/foto/businessman-using-digital-tablet-imagem-royalty-free/1184196223?searchscope=image%2Cfilm",
      imageSize: 30,
    },
  ];

  //está renderizando como eu esperada {} para javascript dentro de retoun que significa que é javascript dentro de html
  return (
    <>
      <div className="user-card">{users[0].userName}</div>
    </>
  );
}
export default App;
