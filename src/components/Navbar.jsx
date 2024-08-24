import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css'; // Asegúrate de tener un archivo CSS para los estilos

const Navbar = () => {
    const formData = useSelector(state => state.form.formData);

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="navbar-item">Home</Link>
                </li>
                <li>
                    <Link to="/products" className="navbar-item">Product</Link>
                </li>
                <li>
                    <Link to="/login" className="navbar-item">Forms</Link>
                </li>
            </ul>
            {formData.username && (
                <div className="navbar-user-info">
                    Bienvenido {formData.username}: {formData.email}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
