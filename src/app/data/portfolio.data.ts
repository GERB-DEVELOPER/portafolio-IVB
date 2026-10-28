/* =========================================================
   DATOS DEL PORTAFOLIO
   Todo el contenido personal vive aquí. Para personalizar
   el portafolio, se edita SOLO este archivo.
   ========================================================= */

/** Molde de una red social */
export interface SocialLink { 
  label: string;   // nombre para lectores de pantalla: 'GitHub'
  icon: string;    // clase de Bootstrap Icons: 'bi-github'
  url: string;     // dirección completa
}
/** Molde de los datos personales */
export interface Profile{
  name: string;            // nombre completo
  initials: string;        // iniciales para el avatar
  greeting: string;        // saludo sobre el nombre
  roles: string[];         // roles para la máquina de escribir
  bio: string;             // presentación corta
  photo: string;           // foto en la carpeta public ('' = sin foto)
  cvUrl: string;           // CV en PDF en la carpeta 
  socials: SocialLink[];   // lista de redes sociales
}

/** Tus datos */
export const PROFILE: Profile = {
    name: 'Giovanni Ramirez Berrocal',
    initials: 'GERB DEV',
    greeting: 'Buen dia,los saludos',
    roles:[
       'Desarrollador Frontend',
       'Programador Java y Spring Boot',
       'Estudiante de Desarrollo de Sistemas', 
    ],
    bio: 'Construyo APIs REST y aplicaciones web. Me gusta escribir código claro y aprender tecnologías nuevas cada semana.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ullam unde tempora eligendi nam. Cum rem quae dolorem deserunt minus ad accusantium fugit, molestiae dolore iusto repellat, quasi officiis tenetur. ',
    photo: 'foto.jpg',
    cvUrl: 'cv.pdf',
    socials: [
    { label: 'GitHub',   icon: 'bi-github',   url: 'https://github.com/GERB-DEVELOPER/' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/giovanni-emilio-ramirez-berrocal-28b5161b8/' },
        { label: 'Correo', icon: 'bi-envelope', url: 'mailto:ramirezberrocalgiovanni@gmail.com' },
      { label: 'WhatsApp', icon: 'bi-whatsapp', url: 'https://wa.me/51956785457' },
      { label: 'YouTube', icon: 'bi-youtube', url: 'https://www.youtube.com/' },

  ],
}
/** Molde de una tarjeta de sección en el Inicio */
export interface Highlight {
  icon: string;       // clase de Bootstrap Icons
  title: string;      // título de la tarjeta
  text: string;       // descripción corta
  link: string;       // ruta interna: '/sobre-mi'
  linkText: string;   // texto del enlace
}

/** Tarjetas que llevan a las demás páginas */
export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'bi-person',
    title: 'Sobre mí',
    text: 'Mi formación, mi experiencia y las tecnologías que manejo.',
    link: '/sobre-mi',
    linkText: 'Conóceme',
  },
  {
    icon: 'bi-grid',
    title: 'Proyectos',
    text: 'Trabajos y prácticas del instituto: APIs, sitios web y más.',
    link: '/proyectos',
    linkText: 'Ver proyectos',
  },
  {
    icon: 'bi-envelope',
    title: 'Contacto',
    text: '¿Tienes una propuesta o una oportunidad? Escríbeme.',
    link: '/contacto',
    linkText: 'Escríbeme',
  },
];


