import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import ChatPage from "./components/ChatPage";
import ChatList from "./components/ChatList";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Router>
          <ChatList path="/" />
          <ChatPage path="/chat-page/:chat_id" />
          <Settings path="/settings" />
        </Router>
      </main>
    </div>
  );
}

export default App;
