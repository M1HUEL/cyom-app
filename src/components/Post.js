export default function Post() {
  return (
    <div className="border-[1px] bg-white">
      <div className="flex flex-col p-3 space-y-3">
        <div className="space-y-3">
          <h2 className="text-center uppercase font-roboto font-bold text-2xl">
            El modelo en cascada: desarrollo secuencial de software
          </h2>
          <div className="space-y-3">
            <h3 className="font-roboto font-bold text-xl">
              ¿Qué es el modelo en cascada?
            </h3>
            <p className="text-md desktop:text-xl">
              El desarrollo en cascada (en inglés, waterfall model) es un
              procedimiento lineal que se caracteriza por dividir los procesos
              de desarrollo en sucesivas fases de proyecto. Al contrario que en
              los modelos iterativos, cada una de estas fases se ejecuta tan
              solo una vez. Los resultados de cada una de las fases sirven como
              hipótesis de partida para la siguiente. El waterfall model se
              utiliza, especialmente, en el desarrollo de software.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-roboto font-bold text-xl">
              ¿Cómo funciona el modelo en cascada?
            </h3>
            <p className="text-md desktop:text-xl">
              El desarrollo del modelo se atribuye al teórico de la informática
              Winston W. Royce. Sin embargo, Royce no es el inventor de este
              modelo. Muy al contrario, en su ensayo de 1970 titulado Managing
              the Development of Large Software Systems, el teórico presenta una
              reflexión crítica acerca de los procedimientos lineales. A modo de
              alternativa, Royce presenta un modelo iterativo incremental en el
              que cada una de las fases se basa en la anterior y verifica los
              resultados de esta.
            </p>
            <p className="text-md desktop:text-xl">
              Royce propone un modelo compuesto por siete fases que se ha de
              ejecutar en diversas vueltas (iteraciones):
            </p>
            <ul className="list-disc text-md desktop:text-xl ml-8">
              <li>Requisitos de sistema</li>
              <li>Requisitos de software</li>
              <li>Análisis</li>
              <li>Diseño</li>
              <li>Implementación</li>
              <li>Prueba</li>
              <li>Servicio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
