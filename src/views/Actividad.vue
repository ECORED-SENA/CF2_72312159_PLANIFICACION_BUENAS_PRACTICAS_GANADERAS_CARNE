<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de carne bovina. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es uno de los beneficios de implementar las BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento descontrolado de la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Optimización de la productividad y reducción del impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación de las normativas de calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución de la trazabilidad del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspecto es clave en la planificación del cronograma de BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elegir fechas al azar sin organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incluir únicamente actividades de vacunación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Coordinar de manera eficiente cada etapa del proceso productivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No considerar las condiciones climáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes registros es obligatorio en un predio certificado en BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro de publicidad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro de consumo de agua de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de visitas turísticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de vacunación y tratamientos veterinarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué documento establece los requisitos para la certificación en BPG en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 128 de 2019.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 125 de Ganadería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución 068167 de 2020.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Resolución 045689 de 2018.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué se debe garantizar en el bienestar animal según las BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asegurar alimentación adecuada, agua y condiciones de manejo óptimas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar la aplicación de vacunas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener a los animales confinados sin supervisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No realizar controles sanitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es la trazabilidad en la producción ganadera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un programa de alimentación del ganado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema que permite rastrear el origen, manejo y destino de los productos ganaderos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un sistema para aumentar la reproducción de los animales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un método para calcular la cantidad de carne producida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito de los protocolos de bioseguridad en BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos en la producción de carne.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar la propagación de enfermedades y garantizar la inocuidad de los productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar únicamente los residuos sólidos en la finca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prohibir la entrada de visitantes al predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué criterio es fundamental para obtener la certificación en BPG?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cumplir con los criterios sanitarios, de bienestar animal y bioseguridad establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contar con una página web para promocionar el producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tener un número mínimo de 100 cabezas de ganado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No realizar controles veterinarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es un requisito en la gestión documental de BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No llevar registros escritos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener documentación actualizada sobre sanidad, alimentación y trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar auditorías de control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No realizar registros de tratamientos veterinarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué sucede si un predio certificado en BPG incumple los requisitos después de la certificación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se suspende o cancela la certificación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No tiene consecuencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se permite continuar con la producción sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se le otorgan 10 años para corregir el problema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El análisis costo-beneficio permite determinar si los beneficios de un proyecto superan sus costos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El retorno de inversión (ROI) mide la cantidad de empleados necesarios para que un proyecto sea rentable.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Un alto impacto económico siempre significa que un proyecto es sostenible a largo plazo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las empresas utilizan indicadores de productividad para evaluar la eficiencia operativa y optimizar costos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La certificación ISO 14001 es un indicador clave para medir la rentabilidad financiera de una empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
