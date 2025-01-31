import { useState, useEffect } from "react";
import "../WeeklyFriends/style.css";
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
    <div className="home-container" style={{ width: "70%", minWidth: "300px" }}>
      <h1 className="home-title">Weekly Friends</h1>
      <div className="home-verse">
        
      </div>
      {error && <p className="home-error">{error}</p>}
      <ul className="home-pairs-list">
        {pairs.map((pair, index) => (
          <li key={index} className="home-pair-item">
            <span className="start"><a href="https://jirugutema.netlify.app">{pair[0]}</a></span>

            <span className="end"> <a href="https://jirugutema.netlify.app">{pair[1]}</a></span>
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
