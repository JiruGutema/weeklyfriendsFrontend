import { useState, useEffect } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import axios from "../../Components/WeeklyFriends/axios";

const Home = ({ apiUrl }) => {
  const [pairs, setPairs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pairsResponse = await axios.get(`${apiUrl}/pairs`);
        setPairs(pairsResponse.data.pairs);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Weekly Friends</h1>
      <div className="home-verse">
        Philippians 2:2 - Then make my joy complete by being like-minded, having
        the same love, being one in spirit and of one mind.
      </div>
      {error && <p className="home-error">{error}</p>}
      <ul className="home-pairs-list">
        {pairs.map((pair, index) => (
          <li key={index} className="home-pair-item">
            <span className="start">{pair[0]}</span>
            <span className="end"> {pair[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};

export default Home;
