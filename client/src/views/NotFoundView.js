import { Link } from 'react-router-dom';
export default function NotFoundView() {
  return (
    <h1>
      404 Page Not Found, go to{' '}
      <Link to="/devoveryApp/home">Delivery page</Link>
    </h1>
  );
}
