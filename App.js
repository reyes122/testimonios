import Testimonio from './components/testimonio';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='Shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
        <Testimonio
          nombre='Sarah Chima '
          pais='Nigeria'
          imagen='Sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio
          nombre='Loona Hellhound'
          pais='Circulo de la abaricia '
          imagen='Loona'
          cargo='Ingeniera de Software'
          empresa='Instagram'
          testimonio='Queridos mortales, trabajar en Instagram ha sido un paseo salvaje. Como demonio de la lujuria, estaba ansiosa por sumergirme en el mundo de las redes sociales y, déjenme decirles, ¡no me decepcionó! Desde las selfies pecaminosas hasta los memes infernales, he estado en el epicentro del caos digital. Aunque a veces lidio con algunos seguidores locos y algoritmos traviesos, disfruto cada segundo de esta montaña rusa virtual. ¡Siempre encuentro nuevas formas de causar estragos y atraer la atención! Trabajar en Instagram es como un juego del diablo, y me encanta cada jugada. ¡Hasta los muertos vivientes estarían celosos de mi experiencia aquí!'
        />

      </div>
    </div>
  );
}

export default App;
