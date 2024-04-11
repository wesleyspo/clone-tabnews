import React from 'react';
import '.dir/Home.css'; // Assumindo que você criará um arquivo CSS separado para estilizar a página

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Amor Sem Fronteiras</h1>
            </header>
            <main className="main-content">
                <section className="photo-section">
                    <img src="URL_DA_SUA_FOTO_DE_FAMILIA_AQUI" alt="Foto da Família" className="family-photo"/>
                </section>
                <section className="message-section">
                    <p>
                        Queridas Marcilene e Sarah, cada momento ao lado de vocês é um tesouro que guardo no coração.
                        Sarah, sua risada é a melodia mais doce. Marcilene, seu amor é o alicerce da nossa família.
                        Juntas, vocês são as estrelas que guiam meus passos. Com amor eterno, Papai.
                    </p>
                </section>
            </main>
            <footer className="footer">
                <p>Com todo o amor do mundo, Papai ♥</p>
            </footer>
        </div>
    );
}

export default Home;
