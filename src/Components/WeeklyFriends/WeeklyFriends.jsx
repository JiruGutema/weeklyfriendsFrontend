import { useState, useEffect } from "react";
import "./style.css";
import PropTypes from "prop-types";
import axios from "./axios";

const WeeklyPairing = ({ apiUrl }) => {
  const [pairs, setPairs] = useState([]);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [pairsResponse, usersResponse] = await Promise.all([
          axios.get(`${apiUrl}/pairs`),

          axios.get(`${apiUrl}/users`),
        ]);
        console.log(pairsResponse), setPairs(pairsResponse.data.pairs);
        setUsers(usersResponse.data.users);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  const addUser = async () => {
    if (!newUser.trim()) return;
    try {
      await axios.post(`${apiUrl}/users`, { name: newUser });
      setUsers((prev) => [...prev, newUser]);
      setNewUser("");
    } catch (err) {
      console.error("Error adding user:", err);
      setError("Failed to add user.");
    }
  };

  const removeUser = async (name) => {
    try {
      await axios.delete(`${apiUrl}/users/${name}`);
      setUsers((prev) => prev.filter((user) => user !== name));
    } catch (err) {
      console.error("Error removing user:", err);
      setError("Failed to remove user.");
    }
  };

  const resetPairs = async () => {
    try {
      const response = await axios.post(`${apiUrl}/pairs/reset`);
      setPairs(response.data.pairs);
    } catch (err) {
      console.error("Error resetting pairs:", err);
      setError("Failed to reset pairs.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weekly Pairings</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {pairs.map((pair, index) => (
          <li key={index} className="dataContainer">
            <span className="start">{pair[0]}</span>
            
          
            <span className="end"> {pair[1]}</span>
          </li>
        ))}
      </ul>
      <h2>Manage Users</h2>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter new user name"
      />
      <br />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user} <button onClick={() => removeUser(user)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={resetPairs}>Reset Pairs</button>
    </div>
  );
};
WeeklyPairing.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};

export default WeeklyPairing;
