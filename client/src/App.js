import './App.css';
import { Video } from './videos/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
        url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        channel={"Iocus"}
        description={"Bunny!"}
        song={"Bo Rhap"}
        likes={100}
        messages={200}
        shares={12}
        />
        <Video
        url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}
        channel={"Iocus"}
        description={"Scary!"}
        song={"Bicycle Race"}
        likes={200}
        messages={300}
        shares={124}
        />
      </div>
    </div>
  );
}

export default App;
