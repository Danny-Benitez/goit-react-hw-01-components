import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import Friends from "../Friends/Friends";
import "./App.css";
import userData from "../Profile/user.json";
import data from "../Statistics/data.json";
import friends from "../Friends/friends.json";
import items from "../Transactions/transactions.json";
import Transactions from "../Transactions/Transactions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Friends friends={friends} />
        <Transactions items={items} />
      </header>
    </div>
  );
}

export default App;
