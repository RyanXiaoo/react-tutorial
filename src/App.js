import "./App.css";
import { User } from "./User";

function App() {
    const users = [
        { name: "Ryan", age: 18 },
        { name: "Minglun", age: 28 },
        { name: "Reese", age: 15 },
    ];

    return (
        <div className="App">
            {users.map((user, key) => {
                return <User name={user.name} age={user.age} />;
            })}
        </div>
    );
}

export default App;
