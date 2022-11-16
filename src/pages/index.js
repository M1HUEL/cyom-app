/* eslint-disable @next/next/no-img-element */

import Header from "../components/Header";
import Footer from "../components/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyom - Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full bg-neutral-50 font-thin font-radio">
        <Header />
        <main className="flex flex-col">
          <div className="flex flex-col space-y-8 desktop:space-y-18 justify-center text-center pl-2 pr-2 pt-4 tablet:pl-8 tablet:pr-8 desktop:pl-58 desktop:pr-58 tablet:pt-6 desktop:pt-12">
            <div className="pl-2 pr-2 tablet:pl-4 tablet:pr-4 desktop:pl-32 desktop:pr-32 flex flex-col space-y-6 desktop:space-y-12">
              <h1 className="font-bold text-3xl tablet:text-4xl desktop:text-8xl text-[#071d2b]">
                Metodología de espiral: fases y desarrollo
              </h1>
              <p className="tablet:pl-18 tablet:pr-18 desktop:pl-48 desktop:pr-48 font-normal text-[16px] tablet:text-[22px] desktop:text-xl text-left text-[#071d2b]">
                De cara a afrontar el desarrollo de software, existen varios
                métodos bastante comunes y utilizados, siendo el modelo en
                cascada (waterfall) y el modelo por iteraciones dos de los más
                habituales.
              </p>
              <p className="tablet:pl-18 tablet:pr-18 desktop:pl-48 desktop:pr-48 font-normal text-[16px] tablet:text-[22px] desktop:text-xl text-left text-[#071d2b]">
                Como combinación de ambos surge la metodología espiral, una
                forma de gestión del desarrollo de software que trata de obtener
                las principales ventajas de los dos anteriores mientras cubre
                sus principales inconvenientes.
              </p>
            </div>
            <div className="pl-2 pr-2 flex flex-col justify-center text-center align-center m-auto">
              <img
                src="https://images6.alphacoders.com/100/1001871.jpg"
                alt="img"
                className="desktop:w-[1200px] desktop:h-[600px] rounded-bl-[100px] desktop:rounded-bl-[200px] rounded-tr-[100px] desktop:rounded-tr-[200px]"
              />
            </div>
            <div className="pl-2 pr-2 pt-12 flex flex-col space-y-8 desktop:space-y-12">
              <div className="post-divider">
                <h3 className="post-subtitle">
                  ¿Qué es la metodología de espiral?
                </h3>
                <p className="post-text">
                  Como hemos mencionado anteriormente, la metodología de espiral
                  es un método de desarrollo de software que combina el modelo
                  waterfall y el modelo por iteraciones, en el que se determina
                  el ciclo de vida del programa a través de distintas espirales
                  repetitivas, las cuales siguen funcionando hasta que se
                  termina el producto.
                </p>
                <p className="post-text">
                  Se caracteriza por requerir de actualizaciones constantes en
                  pasos pequeños, lo que implica mayor lentitud e inversión a la
                  hora de implantarlo. Inicialmente, fue propuesto por Barry W.
                  Boehm en uno de sus ensayos, y el modelo pretendía paliar los
                  inconvenientes que surgían de la aplicación del modelo en
                  cascada. Basó el modelo en la detección y resolución de
                  riesgos, buscando controlar todos los factores que puedan
                  comprometer la integridad y el funcionamiento del proyecto,
                  exponiendo que si podemos controlar los riesgos no habría
                  ningún motivo que impida el éxito del mismo.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">
                  ¿Cómo funciona esta metodología?
                </h3>
                <p className="post-text">
                  La metodología de un modelo espiral o de ciclo de vida se
                  caracteriza por seguir ciclos repetitivos que se representan
                  gráficamente en forma de espiral. Todo proceso cíclico dentro
                  de este método se compone de cinco fases imprescindibles.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">
                  ¿Qué es la memoria RAM en un ordenador?
                </h3>
                <p className="post-text">
                  La RAM (memoria de acceso aleatorio) es la memoria a corto
                  plazo de un ordenador, donde se almacenan los datos que el
                  procesador está utilizando en ese momento. Su ordenador puede
                  acceder a la memoria RAM mucho más rápido que a los datos de
                  un disco duro, SSD, u otro dispositivo de almacenamiento a
                  largo plazo, por lo que la capacidad de la RAM es fundamental
                  para el rendimiento del sistema.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">Primera fase: Planificación</h3>
                <p className="post-text">
                  La RAM (memoria de acceso aleatorio) es la memoria a corto
                  plazo de un ordenador, donde se almacenan los datos que el
                  procesador está utilizando en ese momento. Su ordenador puede
                  acceder a la memoria RAM mucho más rápido que a los datos de
                  un disco duro, SSD, u otro dispositivo de almacenamiento a
                  largo plazo, por lo que la capacidad de la RAM es fundamental
                  para el rendimiento del sistema.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">Segunda fase: Análisis</h3>
                <p className="post-text">
                  La RAM (memoria de acceso aleatorio) es la memoria a corto
                  plazo de un ordenador, donde se almacenan los datos que el
                  procesador está utilizando en ese momento. Su ordenador puede
                  acceder a la memoria RAM mucho más rápido que a los datos de
                  un disco duro, SSD, u otro dispositivo de almacenamiento a
                  largo plazo, por lo que la capacidad de la RAM es fundamental
                  para el rendimiento del sistema.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">Tercera fase: Desarrollo</h3>
                <p className="post-text">
                  La RAM (memoria de acceso aleatorio) es la memoria a corto
                  plazo de un ordenador, donde se almacenan los datos que el
                  procesador está utilizando en ese momento. Su ordenador puede
                  acceder a la memoria RAM mucho más rápido que a los datos de
                  un disco duro, SSD, u otro dispositivo de almacenamiento a
                  largo plazo, por lo que la capacidad de la RAM es fundamental
                  para el rendimiento del sistema.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">Cuarta fase: Evaluación</h3>
                <p className="post-text">
                  La RAM (memoria de acceso aleatorio) es la memoria a corto
                  plazo de un ordenador, donde se almacenan los datos que el
                  procesador está utilizando en ese momento. Su ordenador puede
                  acceder a la memoria RAM mucho más rápido que a los datos de
                  un disco duro, SSD, u otro dispositivo de almacenamiento a
                  largo plazo, por lo que la capacidad de la RAM es fundamental
                  para el rendimiento del sistema.
                </p>
              </div>
              <div className="post-divider">
                <h3 className="post-subtitle">
                  Ventajas del modelo en espiral
                </h3>
                <p className="post-text">
                  El modelo de espiral cuenta con una serie de ventajas muy
                  interesantes para cualquiera que lo ponga en marcha, de las
                  cuales podemos destacar las siguientes:
                </p>
                <p className="post-text">
                  Facilita la gestión de presupuestos y la planificación de
                  costos, al fragmentar el proceso en partes muy pequeñas y
                  abrir la posibilidad de evaluarlas de forma más detallada a
                  cada una de ellas. Se realizan estimaciones mucho más
                  precisas, ya que, a medida que se van realizando más ciclos,
                  estas se van definiendo más y más con el tiempo, gracias a la
                  continua evaluación de los riesgos y las seguidas
                  actualizaciones del contenido.
                </p>
                <p className="post-text">
                  Gracias al funcionamiento de este sistema, permite que el
                  cliente participe y esté presente en algunas de las fases, por
                  lo que conseguiremos un resultado final que se acepte más a
                  sus exigencias y necesidades.
                </p>
                <p className="post-text">
                  Es un proceso que cuenta con mayor agilidad que otros, ya que
                  el factor cíclico hace que muchas tareas y actuaciones ya se
                  hayan hecho con anterioridad y puedan ejecutarse de manera
                  automática o con mucha más rapidez que en la ocasión anterior.
                </p>
                <p className="post-text">
                  Se caracteriza por su flexibilidad, dentro de sus fases
                  predeterminadas admite muchos cambios y variaciones, que se
                  pueden realizar en el punto de la espiral en el que sean
                  necesarios, sin tener que comprometer la estabilidad global
                  del proyecto.
                </p>
                <p className="post-text">
                  La metodología espiral está indicada, principalmente, para
                  proyectos grandes en el largo plazo. Pese a que requiere un
                  exigente proceso de investigación y análisis, termina
                  ofreciendo los mejores resultados, gracias a la precisión a la
                  hora de obtener las estimaciones y la constante evaluación de
                  los riesgos que se exige a la hora de poner el método en
                  marcha.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
