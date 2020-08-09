import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeXdgAzEZ7XcSItLOPwPG5Hde7_EMXJn5wjQ&usqp=CAU" alt="Foto" />
                <div>
                    <strong>Nome Professor</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Descrição do professor
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
