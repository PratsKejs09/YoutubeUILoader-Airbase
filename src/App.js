import "./styles.css";
import { useEffect, useState } from "react";
import dummyData from "./data";
import CardList from "./components/Cards/CardList";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {videos &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList loading={loading} list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
}
