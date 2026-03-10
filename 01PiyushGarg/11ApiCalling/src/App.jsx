import { useState, useEffect } from "react";
import { getPosts, getRandomUser } from "./api/index.jsx";
import PostCard from "./component/PostCard.jsx";
import UserCard from "./component/UserCard.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);
  console.log(userData);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>
      {data ? (
        data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default App;
