import { useState } from "react";
import PropTypes from 'prop-types';

function TwiterFollowCard({ formatUserName, userName, name, isFollowing, youFollowing }) {
    const [youFollowingState, setYouFollowing] = useState(youFollowing);

    const isFollowingState = youFollowingState ? "Siguiendo" : "Seguir";
    var buttonClassName = youFollowingState ? "siguiendo" : "";

    const eventoSeguir = function () {
        setYouFollowing(!youFollowingState)
    }

    return (
        <article className='contenedorTarjetaDeUsuario'>
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="Imagen de usuario" />
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)} {isFollowing ? <span className="isFollowing">Te sigue</span> : ""}</span>
                    
                </div>
            </header>
            <aside>
                <button onClick={eventoSeguir} className={buttonClassName}>
                    <span className="textoPorDefecto">{isFollowingState}</span>
                    <span className="textoDejarDeSeguir">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

TwiterFollowCard.propTypes = {
    formatUserName: PropTypes.string,
    userName: PropTypes.string,
    name: PropTypes.string,
    isFollowing: PropTypes.bool,
    youFollowing: PropTypes.bool
};
TwiterFollowCard.defaultProps = {
    userName: "twiter",
    name: "Usuario Por Defecto",
    isFollowing: false,
    youFollowing: false
}

export default TwiterFollowCard;