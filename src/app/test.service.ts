import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private cssQuestions = [
    {
      question: '¿Cuál de las siguientes propiedades se usa para cambiar el color del texto?',
      options: ['font-color', 'color', 'text-color', 'foreground-color'],
      correct: 'color'
    },
    {
      question: '¿Cuál de estas unidades de medida es relativa?',
      options: ['px', 'cm', 'em', 'mm'],
      correct: 'em'
    },
    {
      question: '¿Qué propiedad CSS permite hacer un elemento completamente transparente?',
      options: ['visibility: hidden', 'display: none', 'opacity: 0', 'background: transparent'],
      correct: 'opacity: 0'
    },
    {
      question: '¿Qué propiedad se usa para hacer un diseño flexbox?',
      options: ['display: flex', 'align-items: center', 'float: left', 'grid-template-columns'],
      correct: 'display: flex'
    },
    {
      question: '¿Cómo se hace un borde redondeado en CSS?',
      options: ['border: rounded', 'border-radius: 10px', 'border-style: circle', 'border-shape: round'],
      correct: 'border-radius: 10px'
    },
    {
      question: '¿Cuál de las siguientes reglas NO pertenece a CSS?',
      options: ['@keyframes', '@media', '@layout', '@import'],
      correct: '@layout'
    },
    {
      question: '¿Qué propiedad CSS permite aplicar una imagen de fondo?',
      options: ['background', 'bg-image', 'background-file', 'background-img'],
      correct: 'background'
    },
    {
      question: '¿Cuál de las siguientes pseudo-clases selecciona el primer hijo de un elemento?',
      options: [':first-child', ':nth-child(1)', ':only-child', ':first-of-type'],
      correct: ':first-child'
    },
    {
      question: '¿Cuál de estas opciones hace que un elemento tenga un ancho del 100% del contenedor padre?',
      options: ['width: auto', 'width: 100%', 'max-width: 100px', 'min-width: 50px'],
      correct: 'width: 100%'
    },
    {
      question: '¿Cuál de estas opciones permite crear una animación en CSS?',
      options: ['@animation', 'animation-name', 'animate-style', 'transition'],
      correct: 'animation-name'
    },
    {
      question: '¿Qué propiedad define la separación entre el contenido y el borde de un elemento?',
      options: ['margin', 'padding', 'border-spacing', 'gap'],
      correct: 'padding'
    },
    {
      question: '¿Cómo se puede hacer que un elemento tenga una sombra?',
      options: ['shadow: 5px 5px 10px;', 'box-shadow: 5px 5px 10px;', 'element-shadow: 5px;', 'text-shadow: 5px;'],
      correct: 'box-shadow: 5px 5px 10px;'
    },
    {
      question: '¿Cuál es el valor por defecto de position en CSS?',
      options: ['absolute', 'fixed', 'relative', 'static'],
      correct: 'static'
    },
    {
      question: '¿Cómo se puede hacer que un contenedor flexbox alinee los elementos al centro horizontal y verticalmente?',
      options: ['justify-content: center; align-items: center;', 'align-content: middle; align-items: middle;', 'display: inline-block;', 'position: center;'],
      correct: 'justify-content: center; align-items: center;'
    },
    {
      question: '¿Cuál de estas propiedades se usa para hacer una transición suave en CSS?',
      options: ['animation', 'delay', 'transition', 'transform'],
      correct: 'transition'
    }
  ];

  private htmlQuestions = [
    {
      question: '¿Cuál de las siguientes etiquetas se usa para definir una lista ordenada?',
      options: ['<ul>', '<li>', '<ol>', '<list>'],
      correct: '<ol>'
    },
    {
      question: '¿Cuál es la etiqueta correcta para insertar una imagen?',
      options: ['<img>', '<image>', '<src>', '<picture>'],
      correct: '<img>'
    },
    {
      question: '¿Qué etiqueta se usa para definir el contenido principal de una página?',
      options: ['<section>', '<main>', '<article>', '<header>'],
      correct: '<main>'
    },
    {
      question: '¿Cuál de estas etiquetas HTML se usa para enlaces?',
      options: ['<link>', '<a>', '<href>', '<navigate>'],
      correct: '<a>'
    },
    {
      question: '¿Cómo se definen los comentarios en HTML?',
      options: ['<!-- Esto es un comentario -->', '// Esto es un comentario', '/* Esto es un comentario */', '<! Esto es un comentario !>'],
      correct: '<!-- Esto es un comentario -->'
    },
    {
      question: '¿Cuál de estos atributos se usa para abrir un enlace en una nueva pestaña?',
      options: ['open="_blank"', 'target="_new"', 'target="_blank"', 'href="new_tab"'],
      correct: 'target="_blank"'
    },
    {
      question: '¿Cuál es la diferencia entre <strong> y <b>?',
      options: ['<strong> tiene importancia semántica, <b> solo cambia el estilo', '<b> es más fuerte que <strong>', 'No hay diferencia', '<b> no es una etiqueta válida'],
      correct: '<strong> tiene importancia semántica, <b> solo cambia el estilo'
    },
    {
      question: '¿Cómo se inserta un video en HTML?',
      options: ['<media>', '<video>', '<embed>', '<source>'],
      correct: '<video>'
    },
    {
      question: '¿Cuál es la etiqueta HTML para crear un enlace de correo electrónico?',
      options: ['<email>', '<a href="mailto:correo@example.com">', '<link>', '<address>'],
      correct: '<a href="mailto:correo@example.com">'
    },
    {
      question: '¿Cómo se define un formulario en HTML?',
      options: ['<form>', '<input>', '<button>', '<field>'],
      correct: '<form>'
    },
    {
      question: '¿Qué etiqueta se utiliza para agregar una tabla en HTML?',
      options: ['<table>', '<tab>', '<row>', '<grid>'],
      correct: '<table>'
    },
    {
      question: '¿Cuál de los siguientes atributos se utiliza para especificar la dirección de un enlace en una etiqueta <a>?',
      options: ['href', 'src', 'link', 'url'],
      correct: 'href'
    },
    {
      question: '¿Qué elemento HTML se usa para agrupar elementos de formulario?',
      options: ['<group>', '<fieldset>', '<form-group>', '<form-field>'],
      correct: '<fieldset>'
    },
    {
      question: '¿Cómo se define un encabezado de nivel 1 en HTML?',
      options: ['<header>', '<h1>', '<h2>', '<head>'],
      correct: '<h1>'
    },
    {
      question: '¿Cómo se definen los enlaces de estilo CSS en un archivo HTML?',
      options: ['<link rel="stylesheet" href="estilos.css">', '<style href="estilos.css">', '<css src="estilos.css">', '<style src="estilos.css">'],
      correct: '<link rel="stylesheet" href="estilos.css">'
    }
  ];
  private angularQuestions = [
    {
      question: '¿Cuál es el comando para generar un nuevo componente en Angular CLI?',
      options: ['ng create component nombre', 'ng generate component nombre', 'ng make component nombre', 'ng new component nombre'],
      correct: 'ng generate component nombre'
    },
    {
      question: '¿Qué directiva de Angular se usa para iterar sobre una lista?',
      options: ['*ngFor', '*ngIf', '*ngSwitch', '*ngRepeat'],
      correct: '*ngFor'
    },
    {
      question: '¿Dónde se definen los servicios en Angular?',
      options: ['En el archivo app.module.ts', 'En el archivo app.component.ts', 'En un archivo de servicio y se inyecta en los componentes ', 'No se pueden definir servicios en Angular'],
      correct: 'En un archivo de servicio y se inyecta en los componentes '
    },
    {
      question: '¿Cómo se pueden pasar datos de un componente padre a un componente hijo?',
      options: ['Usando @Output', 'Usando @ViewChild', 'Usando @Input', 'No se pueden pasar datos'],
      correct: 'Usando @Input'
    },
    {
      question: '¿Qué operador de RxJS se usa para transformar un observable en otro valor?',
      options: ['filter', 'map', 'merge', 'combineLatest'],
      correct: 'map'
    },
    {
      question: '¿Qué es un service en Angular?',
      options: ['Un componente con lógica adicional', 'Una clase para manejar datos y lógica', 'Un archivo de configuración', 'Un tipo de módulo'],
      correct: 'Una clase para manejar datos y lógica'
    },
    {
      question: '¿Cómo se hace una petición HTTP en Angular?',
      options: ['this.http.get()', 'fetch(url)', 'axios.get(url)', 'request(url)'],
      correct: 'this.http.get()'
    },
    {
      question: '¿Cuál es la estructura básica de un módulo en Angular?',
      options: [
        "@NgModule({ imports: [], declarations: [], providers: [] })",
        "@Component({ selector: '', templateUrl: '' })",
        "@Module({ selector: '', providers: [] })",
        "@Service({ providedIn: 'root' })"
      ],
      correct: "@NgModule({ imports: [], declarations: [], providers: [] })"
    },
    {
      question: '¿Qué decorador de Angular se usa para marcar una clase como componente?',
      options: ['@Component', '@Module', '@Directive', '@Service'],
      correct: '@Component'
    },
    {
      question: '¿Cómo se define una propiedad como vinculada a un input en un componente Angular?',
      options: ['@Input()', '@Bind()', '@Property()', '@Connect()'],
      correct: '@Input()'
    },
    {
      question: '¿Qué significa la directiva *ngIf en Angular?',
      options: [
        'Muestra un contenido solo si una expresión es verdadera',
        'Muestra contenido de manera condicional',
        'Reemplaza contenido basado en eventos',
        'Ejecuta código antes de que el componente se cargue'
      ],
      correct: 'Muestra un contenido solo si una expresión es verdadera'
    },
    {
      question: '¿Cuál es la función principal de ngOnInit() en Angular?',
      options: [
        'Definir los valores predeterminados',
        'Ejecutar código después de la inicialización del componente',
        'Ejecutar código antes de la destrucción del componente',
        'Asignar los datos de un observable'
      ],
      correct: 'Ejecutar código después de la inicialización del componente'
    },
    {
      question: '¿Cómo se inyecta un servicio en un componente de Angular?',
      options: [
        'A través de @Injectable()',
        'Usando el constructor del componente',
        'Usando @Input()',
        'Usando @ViewChild()'
      ],
      correct: 'Usando el constructor del componente'
    },
    {
      question: '¿Qué significa la expresión {{ variable | pipe }} en Angular?',
      options: [
        'Una interpolación de datos',
        'Una función para modificar el valor de variable antes de mostrarlo',
        'Un enlace entre el componente y el template',
        'Un bucle para iterar elementos'
      ],
      correct: 'Una función para modificar el valor de variable antes de mostrarlo'
    },
    {
      question: '¿Qué comando en Angular CLI sirve para iniciar la aplicación en el servidor local?',
      options: [
        'ng run',
        'ng serve',
        'ng start',
        'ng init'
      ],
      correct: 'ng serve'
    }
    
  ];

  private typescriptQuestions = [
    {
      question: '¿Qué tipo de dato representa let x: any; en TypeScript?',
      options: [
        'Cualquier tipo de dato',
        'Solo números',
        'Solo cadenas',
        'Solo objetos'
      ],
      correct: 'Cualquier tipo de dato'
    },
    {
      question: '¿Qué característica define a TypeScript sobre JavaScript?',
      options: [
        'Soporte para HTML',
        'Tipado estático',
        'Mayor compatibilidad con navegadores',
        'No usa variables'
      ],
      correct: 'Tipado estático'
    },
    {
      question: '¿Cuál de estas sintaxis declara una interfaz en TypeScript?',
      options: [
        'interface Persona { nombre: string; edad: number; }',
        'class Persona { nombre: string; edad: number; }',
        'struct Persona { nombre: string; edad: number; }',
        'type Persona { nombre: string; edad: number; }'
      ],
      correct: 'interface Persona { nombre: string; edad: number; }'
    },
    {
      question: '¿Qué tipo de dato devuelve una función con void en TypeScript?',
      options: [
        'null',
        'undefined',
        'number',
        'string'
      ],
      correct: 'undefined'
    },
    {
      question: '¿Cómo se define una variable con un tipo específico en TypeScript?',
      options: [
        'let nombre: string = "Juan";',
        'let nombre = string: "Juan";',
        'string nombre = "Juan";',
        'nombre: string = "Juan";'
      ],
      correct: 'let nombre: string = "Juan";'
    },
    {
      question: '¿Qué palabra clave se usa para definir una interfaz en TypeScript?',
      options: [
        'class',
        'type',
        'interface',
        'define'
      ],
      correct: 'interface'
    },
    {
      question: '¿Cómo se define un array tipado en TypeScript?',
      options: [
        'let arr: Array<number> = [1, 2, 3];',
        'let arr = [1, 2, 3];',
        'let arr<number> = [1, 2, 3];',
        'let arr[] = [1, 2, 3];'
      ],
      correct: 'let arr: Array<number> = [1, 2, 3];'
    },
    {
      question: '¿Qué característica de TypeScript permite reutilizar estructuras de datos con diferentes tipos?',
      options: [
        'Interfaces',
        'Generics',
        'Enums',
        'Types'
      ],
      correct: 'Generics'
    },
    {
      question: '¿Qué tipo de dato se usa para representar un valor que puede ser de varios tipos en TypeScript?',
      options: [
        'any',
        'unknown',
        'union',
        'multiple'
      ],
      correct: 'union'
    },
    {
      question: '¿Cómo se define una función que recibe parámetros opcionales en TypeScript?',
      options: [
        'function saludar(nombre: string?){}',
        'function saludar(nombre: string) {}',
        'function saludar(nombre: string | undefined) {}',
        'function saludar(nombre: string | null) {}'
      ],
      correct: 'function saludar(nombre: string?){}'
    },
    {
      question: '¿Cómo se especifica un tipo literal en TypeScript?',
      options: [
        'let estado: "activo" | "inactivo" = "activo";',
        'let estado: string | number = "activo";',
        'let estado: ["activo", "inactivo"] = "activo";',
        'let estado: "activo, "inactivo" = "activo";'
      ],
      correct: 'let estado: "activo" | "inactivo" = "activo";'
    },
    {
      question: '¿Cómo se realiza un cast o conversión de tipo en TypeScript?',
      options: [
        'as tipo',
        'cast tipo',
        'to tipo',
        'convert tipo'
      ],
      correct: 'as tipo'
    },
    {
      question: '¿Qué operador se utiliza para hacer una comprobación de tipo en TypeScript?',
      options: [
        'instanceof',
        'typeof',
        'typeof',
        'typecheck'
      ],
      correct: 'instanceof'
    },
    {
      question: '¿Cómo se definen funciones de tipo en TypeScript?',
      options: [
        'let funcion: (x: number) => number = (x) => x + 1;',
        'let funcion: number => (x) => x + 1;',
        'let funcion: (x) => number = (x) => x + 1;',
        'let funcion = (x: number) => number;'
      ],
      correct: 'let funcion: (x: number) => number = (x) => x + 1;'
    },
    {
      question: '¿Qué hace la palabra clave readonly en TypeScript?',
      options: [
        'Define una propiedad que puede ser modificada solo una vez',
        'Hace que una propiedad sea inmutable',
        'Hace que un objeto no pueda ser copiado',
        'Impide la reasignación de variables'
      ],
      correct: 'Define una propiedad que puede ser modificada solo una vez'
    }
    
  ];

  getQuestions(testType: string): Observable<any[]> {
    if (testType.toLowerCase() === 'css') {
      return of(this.cssQuestions);
    } else if (testType.toLowerCase() === 'html') {
      return of(this.htmlQuestions);
    } else if (testType.toLowerCase() === 'angular') {
      return of(this.angularQuestions);
    } else if (testType.toLowerCase() === 'typescript') {
      return of(this.typescriptQuestions);
    }

    return of([]);
  }
}