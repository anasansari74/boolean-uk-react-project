import "./../styles/App.css";

function Header() {
  return (
    <header>
      <div>logo</div>
      <div className="space"></div>
      <ul>
        <li>Movies</li>
        <li>Your Ratings</li>
        <li>Your Favourites</li>
      </ul>
      <div className="space"></div>
      <ul>
        <li></li>
      </ul>
    </header>
  );
}

export default Header;
