import React from 'react';

//import '../../styles/views/common/help.css';

function Help() {
    return (
        <>
            <div>
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <h1 className="display-4">Centro ayuda</h1>
                    <p className="lead">Ayudarte es nuestra prioridad.</p>
                </div>
            </div>
            <div className="container" id='container-text'>
                <div className='elements-disposition'>
                    <h2>¿Qué es el sistema de gestión de créditos?</h2>
                    <p>Esta plataforma se dedica al mantenimiento y gestión de los créditos académicos de los estudiantes para llevar un control y registro de su actividad y participación en los talleres culturales y actividades deportivas, además de ofrecer un proceso cómodo, fácil y rápido para ser parte de estos.
                        Todo funciona gracias a tecnologías de la información y comunicación que permiten la automatización de procesos y la gestión de la información de los estudiantes.
                    </p>
                    
                    <h2>Registro y acceso.</h2>
                    <p>No puedes registrarte al sistema, la plataforma esta unicamente hecha para los estudiantes de la institución, por lo que agentes externos a esta universidad no tiene la posibilidad de ingresar. Para iniciar sesión tienes que ingresar tu nombre con el que se te tiene registrado en la insitución,
                        además de una contraseña que puedes cambiar siempre que quieras para mayor seguridad, si olvidas tu contraseña puedes usar tu correo electrónico para comunicarte con el administrador del sistema y recuperar tu cuenta.
                    </p>
                    
                    <h2>Gestión de créditos.</h2>
                    <p>Puedes ver la cantidad de créditos que posees de una forma muy sencilla, con tan solo acceder a tu perfil, donde además de encontrar tus datos, lo primero que verás será tu nombre completo y la cantidad de créditos que posees en el momento. Los créditos son calculados gracias a la toma de asistencias
                        por parte de los docentes que estan a cargo de los talleres y actividades deportivas a las que perteneces, siendo esto definido por ellos, también puedes obtenerlos a través de actos de caridad y apoyo a la comunidad que son organizados por la institución. Para pertenecer a un taller o actividad deportiva
                        es más fácil de lo que crees, ya que tan solo en la página inicial tendrás a tu disposición la lista de talleres y actividades deportivas a los que puedes pertenecer, solo tienes que seleccionar el que más te guste y darle click en el botón de "Aplicar", y listo, ya eres parte de ese taller o actividad deportiva.
                    </p>
                    
                    <h2>Problemas durante inscripción o estancia.</h2>
                    <p>Por la estructura de la página no debería haber problema alguno para inscribirte a cualquiera de los clubes, en caso de encontrarse anomalías o problemas, se agradecerá bastante el reporte hecho de manera inmediata.
                        Si no puedes permanecer en un taller o actividad o no estás cómodo en el, puedes acudir con tu docente, ya que este tiene los permisos necesarios para darte de baja de la actividad o taller en el que te encuentres.
                    </p>
                    
                    <h2>Certificados/Constancias</h2>
                    <p>Puedes descargar una constancia de tus créditos a través de tu perfil con el botón "Descargar constancia", estos solamente imprimirán los que tienes en el momento y en que clubes los has obtenido</p>
                    
                    <h2>Problemas técnicos.</h2>
                    <p>Si encuentras o te percatas de algún error en la plataforma porfavor comunicate a través del siguiente correo: romoccemilio@gmail.com, adjunta lo sucedido, además de capturas del error o problema para poder ayudarte de una manera
                        rápida y eficaz.
                    </p>
                    
                    <h2>Soporte ténico.</h2>
                    <p>Cualquier duda, aclaración, problema, estamos a tu servicio a través del correo romoccemilio@gmail.com. Te estaremos atendiendo dentro de la horas establecidas en la institución en cuanto a la parte administrativa, es decir, de 8:00 am a 8:00 pm.</p>
                    
                    <h2>Preguntas frecuentes (FAQs)</h2>
                    <h3>Créditos</h3>
                    <h5>¿Cuántos créditos necesito para acreditar mi TSU?</h5>
                    <p>Necesitas unicamente 60 créditos para esto.</p>
                    <h5>¿Puedo transferir créditos de otra institución?</h5>
                    <p>Esto no es posible, los créditos son unicamente otorgados por la institución.</p>
                    <h5>¿Qué pasa si no completo los créditos necesarios?</h5>
                    <p>Al no obtener los créditos necesarios no podrás acreditar tu título superior técnico.</p>

                    <h3>Talleres</h3>
                    <h5>¿Cómo elijo el taller adecuado para mi?</h5>
                    <p>Ajustate a tus gustos, posibilidades e intereses, no esta mal probar de todo un poco, pero se consciente de saber administrar tu tiempo.</p>
                    <h5>¿Qué pasa si no puedo asistir a un taller programado?</h5>
                    <p>Puedes proceder a una baja del taller o actividad gracias a tu docente quien puede hacer esto posible.</p>
                    <h5>¿Puedo cambiarme de taller una vez inscrito?</h5>
                    <p>Por supuesto, recuerda que siempre es importante acudir ante cualquier duda con tu docente de taller en el que te encuentras actualmente para poder realizar este cambio.</p>

                    <h3>Uso del sistema</h3>
                    <h5>¿El sistema es compatible con todos los navegadores?</h5>
                    <p>Si, lo es con todos.</p>
                    <h5>¿Hay una aplicación móvil disponible?</h5>
                    <p>No, pero tenemos adaptada la plataforma a pantallas de dispositivos móviles.</p>
                    <h5>¿Cómo actualizo mi información personal en el sistema?</h5>
                    <p>Puedes acudir con soporte técnico con el correo ofrecido para poder realizar tus cambios de manera rápida.</p>

                </div>
                
            </div>
            
        </div>
        </>
    );
}

export default Help;