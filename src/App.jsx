import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Images from "./components/images/Images";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div>
        <Content />
        <Images />
      </div>
    </div>
  );
}

export default App;
