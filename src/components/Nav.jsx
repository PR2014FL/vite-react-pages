import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
    <Link to="/">
        <div>MAIN</div>
    </Link>
    <Link to='/cats'>
        <div>KITTENS</div>
    </Link>
    <Link to="/dogs">
        <div>PUPPIES</div>
  </Link>
    </div>
  );
}

