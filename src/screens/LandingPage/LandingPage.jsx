import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (

        <div className="landing-page">

            <header className="general-title">
                <h1>Modulo 7 DESARROLLO FRONTEND CON REACTJS</h1>
            </header>

            <h2>Bienvenido</h2>
            <p>Este modulo se centra en el uso de React incluyendo la creacion de componentes, el manejo de hooks, y el yso de <b>Redux.</b></p>

            <h2>Temas Cubiertos</h2>
            <table className="custom-table">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                    <th>Column 5</th>
                    <th>Column 6</th>
                    <th>Column 7</th>
                    <th>Column 8</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>Componentes funcionales</td>
                        <td>Uso de React Hooks como useState</td>
                        <td>Creacion de customhooks como useForm</td>
                        <td>Gestion de variables de estado</td>
                        <td>Gestion de estado global</td>
                        <td>Integracion de Redux con React</td>
                        <td>Manejo de formularios de React</td>
                        <td>Publicando nuetsra pagina con GitHub Pages</td>
                    </tr>
                </tbody>
            </table>

            <h2>Recurdo Adicionales</h2>
            <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>

            <footer className="footer">
                <p>© 2024 Modulo 7. Freddy Mendoza.</p>
            </footer>

        </div>


    );
};

export default LandingPage;
