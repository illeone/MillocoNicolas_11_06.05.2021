import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
      <main className="error">
        <p className="error_number">404</p>

        <p className="error_message">
          Oups ! La page que vous demandez n'existe pas.
        </p>

        <NavLink to="/" className="return_home"> Retourner sur la page d'accueil</NavLink>
        
      </main>
    );
}

export default Error404;