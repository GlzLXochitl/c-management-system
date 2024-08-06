import React from 'react';

//import '../../styles/views/admin/alumnListAdmin.css';

function AlumnListAdmin() {
    return (
        <>
            {/* NOTA: LAS CLASES TIENEN LOS MISMOS NOMBRES DE EL COMPONENTE DE CAMBIO DE CONTRASEÑA ESTO SE DEBERA ADAPTAR O ELIMINAR SEGUN LAS NESECIDADES */}

            <div className='title-style'>
                <h1>Listado de alumnos</h1>
            </div>
            <div className='table-container'>
                <table class="table">
                    <thead class="thead thead-table-list-alumns-teacher">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Cuatrimestre</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Email</th>
                            <th scope="col">Creditos</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th scope="row">1</th>
                            <td>Edith Angelica</td>
                            <td>Gonzalez Leos</td>
                            <td>utm22030603</td>
                            <td>Tecnologías de la informacion</td>
                            <td>8</td>
                            <td>A</td>
                            <td>edithglz@utma.edu.mx</td>
                            <td><strong>30</strong></td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Emilio Antonio</td>
                            <td>Cortes</td>
                            <td>utm22030604</td>
                            <td>Nanotecnologia</td>
                            <td>8</td>
                            <td>B</td>
                            <td>emiliocortes@utma.edu.mx</td>
                            <td><strong>60</strong></td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>Erasmo Catalino</td>
                            <td>Diaz Ruis</td>
                            <td>utm22030605</td>
                            <td>Tecnologías de la informacion</td>
                            <td>8</td>
                            <td>B</td>
                            <td>erasmoruis@utma.edu.mx</td>
                            <td><strong>40</strong></td>
                        </tr>

                    </tbody>
                </table>
                <div className='btn-container'>
                    <button type="button" class="btn btn-dark btn-list-disposition btn-teacher-listado-dow">Descargar listado físico</button>
                </div>
            </div>
            

        </>
    );
}

export default AlumnListAdmin;
