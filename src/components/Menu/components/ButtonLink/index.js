import React from 'react';

function ButtonLink(props) {
    //props => className/href será o que for passado

    return (
        <a href={props.href} className={props.className}>
            Novo vídeo
        </a>
    );
}

export default ButtonLink;