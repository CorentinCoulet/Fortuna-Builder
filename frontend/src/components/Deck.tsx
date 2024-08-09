import React from 'react';
import EmptyCase from '../assets/sorts/deck.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Deck.scss';

const Deck: React.FC = () => {
    return (
        <div className="deck">
            <div>
                <p>Deck</p>
                <div>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <FontAwesomeIcon icon={faCopy} />
                </div>
            </div>
            <div>
                <div className="active">
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />

                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                </div>
                <div className="passive">
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                    <img src={EmptyCase} alt="Case vide" />
                </div>
            </div>
        </div>
    );
};

export default Deck;
