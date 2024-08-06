import React from 'react';

//import '../../styles/views/user/userDashboard.css';

function UserDashboard() {
    return (
        <div className='main-body'>
            

            <div className='offer'>
                <div className ='logoStyle'>
                    <img className='offer-img' src="/images/utmalogoorientacion.png" alt="" />
                </div>
                <div className='offer-text'>
                    <h2>¡Descubre tu pasión más allá del aula!</h2>
                    <p>La Universidad Tecnológica Metropolitana te invita a participar en nuestros talleres extracurriculares, deportivos y culturales. Estos talleres están diseñados para ayudarte a explorar nuevas habilidades, desarrollar talentos y disfrutar al máximo tu vida universitaria.</p>
                </div>
            </div>
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/ajedrez.jpeg" alt="Ajedrez" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ajedrez</h5>
                            <p>Participa en torneos de ajedrez.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/basquet.jpeg" alt="Basquetbol" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Basquetbol</h5>
                            <p>Únete a nuestro equipo de basquetbol.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/eexports.jpg" alt="E-Sports" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>E-Sports</h5>
                            <p>Compite en nuestros torneos de e-sports.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/fut.jpeg" alt="Fútbol" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fútbol</h5>
                            <p>Únete a nuestro equipo de fútbol.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/medioAmbiente.jpeg" alt="Medio Ambiente" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Medio Ambiente</h5>
                            <p>Participa en nuestras actividades de medio ambiente.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/tae.jpeg" alt="Taekwondo" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Taekwondo</h5>
                            <p>Únete a nuestro equipo de taekwondo.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="/images/carrusel/voli.jpeg" alt="Voleibol" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Voleibol</h5>
                            <p>Únete a nuestro equipo de voleibol</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
}

export default UserDashboard;
