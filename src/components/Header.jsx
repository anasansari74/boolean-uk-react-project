import "./../styles/App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="link">
        {/* <div>logo</div> */}
        <img
          height="75px"
          src="https://media1.thehungryjpeg.com/thumbs2/ori_3598112_rtvhpiagdzx81ros7b34r5vzavs02h8ohftmd521_camera-icon.jpg"
          alt=""
        />
      </Link>
      <div className="space"></div>
      <ul>
        <Link to="/movies" className="link">
          <li>Movies</li>
        </Link>
        <Link to="/your-ratings" className="link">
          <li>Your Ratings</li>
        </Link>
        <Link to="/your-favourites" className="link">
          <li>Your Favourites</li>
        </Link>
      </ul>
      <div className="space"></div>
      <ul>
        <li></li>
      </ul>
    </header>
  );
}

export default Header;
