export default {
  seo: {
    title: 'HeyFlat — Tu casa compartida, organizada',
    description:
      'Divide cuentas, organiza tareas y cuida tu casa compartida en una sola app. AU$15/mes por casa, compañeros ilimitados. Gratis por 30 días.',
  },
  header: {
    nav: {
      home: 'Inicio',
      howItWorks: 'Cómo funciona',
      features: 'Funciones',
      price: 'Precio',
      faq: 'Preguntas',
      guide: 'Guía',
    },
    login: 'Iniciar sesión',
    cta: 'Empezar gratis',
  },
  hero: {
    eyebrow: 'Hecho para quienes comparten casa',
    titleStart: 'Tu casa compartida,',
    titleHighlight: 'resuelta.',
    subtitle:
      'Cuentas, tareas, compras y avisos — todo en una sola app, repartido de forma justa entre los compañeros de casa. Dejas de ser el pesado que le cobra a todo el mundo.',
    ctaPrimary: 'Empezar gratis por 30 días',
    ctaSecondary: 'Ver funciones',
    finePrint: 'Sin tarjeta. Un plan por casa, con todos los compañeros incluidos.',
    trustBar: 'Português, English y Español · Compañeros ilimitados · Hecho en Australia',
  },
  problem: {
    title: 'Compartir casa no debería ser tan complicado',
    items: [
      { title: 'La planilla que nadie abre.', text: 'La armas, la actualizas, y siempre falta que alguien anote lo que gastó.' },
      {
        title: 'El cobro en el grupo.',
        text: '"Che, el alquiler vence mañana 🙏" — visto por cinco, respondido por nadie.',
      },
      { title: 'La escala de tareas invisible.', text: 'Siempre parece que sos vos el que hace todo. Y probablemente sea así.' },
      { title: 'Las decisiones perdidas.', text: 'El aviso del plomero se perdió entre mil mensajes de WhatsApp.' },
    ],
    closing: 'HeyFlat resuelve las cuatro.',
  },
  languagesStrip: {
    text: 'Disponible en 3 idiomas, con más en camino — para cualquier casa, en cualquier país',
    more: '+ más pronto',
  },
  previews: {
    balance: { youOwe: 'Debes', owedToYou: 'Te deben' },
    hallOfFame: { badge: '🏆 Compañero del mes', name: 'Evandro Bilck', tasksDone: '8 tareas hechas' },
    shopping: { item1: 'Papel higiénico', item2: 'Detergente' },
    reminder: {
      billLabel: 'Alquiler — vence el día 30',
      reminder1: '7 días antes, a las 09:00',
      reminder2: '1 día antes, a las 18:00',
    },
    maintenance: { issue1: 'Fuga en la cocina', status1: 'En curso', issue2: 'Grifo del baño', status2: 'Resuelto' },
    inspection: {
      checklist: 'Checklist de salida',
      item1: 'Paredes sin huecos ni manchas',
      item2: 'Cocina y refrigerador limpios',
      item3: 'Llaves y control del garaje',
    },
    house: { address: 'Pohlman Street' },
  },
  features: {
    title: 'Nuestras funciones principales',
    subtitle: 'Descubre, en detalle, todo lo que tu casa compartida gana.',
    items: [
      {
        icon: '💰',
        title: 'Cuentas',
        description:
          'Alquiler y cuentas divididos en segundos. Agrega cualquier cuenta — alquiler, luz, internet, mercado — y HeyFlat la divide automáticamente entre los compañeros. División igual, por porcentaje o monto exacto, tú eliges. Y el recordatorio de vencimiento le llega a todos por la app, no por ti.',
        bullets: [
          'Recurrencia semanal, quincenal, mensual o anual',
          'Categorías personalizadas, además de las ya listas',
          'Marca los pagos como saldados, uno por uno',
        ],
        preview: 'balance',
      },
      {
        icon: '✅',
        title: 'Tareas',
        description:
          'Una escala que nadie discute. Platos, basura, baño, limpieza. Arma la rotación de la casa una sola vez: cada uno sabe cuándo le toca, la app avisa, y la discusión de "siempre hago todo yo" se acaba.',
        bullets: [
          'Marcar como hecha por más de una persona',
          'Recurrencia diaria, semanal o mensual',
          'Editar o eliminar en cualquier momento',
        ],
        preview: 'hallOfFame',
      },
      {
        icon: '🛒',
        title: 'Lista de Compras',
        description:
          'Una sola lista, siempre actualizada. Cualquier compañero agrega, todos ven en tiempo real. Quien vaya al mercado ya sale de casa sabiendo qué falta.',
        bullets: [
          'Historial de todo lo que ya se compró',
          'Edición de artículos y compras registradas',
          'Reutiliza las mismas categorías de las cuentas',
        ],
        preview: 'shopping',
      },
      {
        icon: '📅',
        title: 'Calendario unificado',
        description:
          'Mira, en un solo calendario, todas las cuentas y tareas recurrentes de la casa — incluyendo las próximas fechas, no solo la primera. Haz clic en cualquier día para ver exactamente qué vence o qué hay que hacer.',
        bullets: [
          'Las cuentas y tareas recurrentes aparecen en todas las fechas futuras',
          'Colores distintos para cuentas (morado) y tareas (azul)',
          'Un clic te lleva directo a los detalles del día',
        ],
        preview: 'calendar',
      },
      {
        icon: '🔔',
        title: 'Recordatorios personalizados',
        description:
          'Nada se te vuelve a pasar. Configura recordatorios para lo que tu casa necesita: vencimiento de una cuenta, día de la basura, revisión del calefón. Toda la casa recibe el aviso justo a tiempo, de forma automática.',
        bullets: [
          'Varios recordatorios por cuenta o tarea, cada uno con su canal',
          'Elige el día y la hora de cada aviso',
          'La lista de compras avisa a toda la casa en tiempo real',
        ],
        preview: 'reminder',
      },
      {
        icon: '📊',
        title: 'Expenses',
        description:
          'Mira a dónde va el dinero de la casa. Gráficos claros de cuánto gasta la casa por categoría y por mes. Así puedes ver dónde ajustar antes de que llegue la cuenta.',
        bullets: [
          'Filtro por período: mes actual, anterior o últimos 3 meses',
          'Comparación automática con el período anterior',
          'Exportación a CSV en cualquier momento',
        ],
        preview: 'reports',
      },
      {
        icon: '🏠',
        title: 'House',
        description:
          'Todo lo que la casa necesita en un solo lugar. Contraseña del Wi-Fi, datos de la casa, calendario compartido e información importante siempre a mano. Se acabó el "¿cuál era la contraseña?" cada vez que llega una visita.',
        bullets: [
          'Invita compañeros con un código o link',
          'Cofre de la casa: Wi-Fi y otra información importante',
          'Historial de quién vivió ahí y por cuánto tiempo',
        ],
        preview: 'house',
      },
      {
        icon: '🔧',
        title: 'Mantenimiento',
        description:
          'Mantenimiento bajo control. Registra qué se rompió, qué ya se arregló y qué sigue pendiente. Todos siguen el estado — sin ese "pensé que alguien ya había llamado al dueño".',
        bullets: [
          'Fotos y descripción en cada problema registrado',
          'Seguimiento del estado hasta la solución',
          'Historial completo de todo lo reportado',
        ],
        preview: 'maintenance',
      },
      {
        icon: '📋',
        title: 'Inspecciones',
        description:
          'Inspección sin apuros. Marca la fecha de la inspección y organiza lo que debe estar listo antes. La casa se prepara junta, con anticipación, en vez de pasar la noche anterior arreglando todo.',
        bullets: [
          'Checklist configurable, punto por punto',
          'Úsala en la entrada y en la salida',
          'Un registro que evita discusiones por daños',
        ],
        preview: 'inspection',
      },
      {
        icon: '🌎',
        title: 'Multiplataforma',
        description:
          'Hoy HeyFlat ya funciona directo desde el navegador, en la computadora o en el celular, con la misma cuenta sincronizada en tiempo real entre los compañeros. Las apps nativas para iOS y Android están en camino, usando la misma cuenta que ya tienes.',
        bullets: [
          'Misma cuenta en cualquier dispositivo',
          'Actualizaciones en tiempo real entre compañeros',
          'App móvil nativa en camino',
        ],
        preview: 'devices',
      },
    ],
    ctaBox: {
      title: '¿Listo para organizar tu casa?',
      subtitle: '30 días gratis, sin compromiso.',
      cta: 'Crear cuenta gratis',
    },
  },
  roommateOfMonth: {
    title: 'La casa se siente más liviana cuando todos colaboran',
    text: 'A fin de cada mes, quien más ayudó a la casa se convierte en el Compañero del Mes — con foto destacada en la app. Es simple, es un poco tonto, y funciona: la convivencia mejora cuando el esfuerzo de cada uno se hace visible.',
  },
  howItWorks: {
    title: 'Cómo funciona',
    steps: [
      { title: 'Crea tu casa', text: 'Toma menos de un minuto.' },
      { title: 'Invita a tus compañeros', text: 'Un link, y listo, todos adentro.' },
      { title: 'Deja que la app organice', text: 'Cuentas divididas, tareas en la escala, recordatorios automáticos.' },
    ],
    cta: 'Crear mi casa ahora',
  },
  comparison: {
    title: 'Otras apps dividen cuentas. HeyFlat cuida la casa entera.',
    columns: { feature: 'Función', others: 'Otras apps', heyflat: 'HeyFlat' },
    partial: 'Parcial',
    rows: [
      'División de cuentas',
      'División flexible (igual, %, exacta)',
      'Tareas y escala de la casa',
      'Lista de compras compartida',
      'Recordatorios personalizados',
      'Control de mantenimiento',
      'Organización de inspecciones',
      'Calendario de la casa',
      'Cofre de la casa (contraseñas y datos)',
      'Informes de gastos',
      'Compañero del Mes',
      'Historial de compañeros',
      'Portugués, English, Español',
      'Precio por casa, no por persona',
    ],
  },
  price: {
    title: 'Un precio por casa. Todos los compañeros incluidos.',
    subtitle:
      'No es por persona. Es un valor único para toda la casa — 3, 5 u 8 compañeros, el precio es el mismo. Una suscripción, toda la casa con acceso completo.',
    planName: 'HeyFlat Casa',
    price: 'AU$ 15',
    period: '/mes por casa',
    trial: '30 días gratis para probar',
    features: ['Compañeros ilimitados, sin costo extra', '30 días gratis, sin tarjeta', 'Cancela cuando quieras'],
    cta: 'Empezar los 30 días gratis',
    finePrint: 'Solo a quien creó la casa se le cobra. Sin cargo de tarjeta para los demás compañeros.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿El precio es por persona o por casa?',
        answer:
          'Por casa, siempre. Son AU$15 al mes por toda la casa, sin importar cuántos compañeros sean. Una persona se suscribe y todos tienen acceso completo.',
      },
      { question: '¿Si entra un compañero más, sube el precio?', answer: 'No. Compañeros ilimitados, siempre AU$15 por casa.' },
      {
        question: '¿La app procesa los pagos entre nosotros?',
        answer:
          'No. HeyFlat calcula, organiza y avisa quién le debe qué a quién — el pago en sí lo hacen como ya lo hacen hoy, por transferencia entre ustedes. Después solo hay que marcarlo como pagado en la app.',
      },
      {
        question: '¿Y si alguien se muda a mitad de mes?',
        answer: 'HeyFlat mantiene el historial de compañeros y hace el cálculo proporcional de las cuentas del período en que esa persona vivió ahí.',
      },
      { question: '¿Funciona en español?', answer: 'Sí — portugués, inglés y español. Cada compañero elige su idioma, en la misma casa.' },
      { question: '¿Necesito tarjeta para probarlo?', answer: 'No. Son 30 días completos, con toda la casa, sin registrar tarjeta.' },
      {
        question: '¿Sirve para cualquier tipo de casa?',
        answer:
          'Sirve. Fue pensado para share house, pero funciona igual para un piso compartido, una pareja dividiendo gastos o una familia organizando la rutina.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Creado por quienes también compartieron casa lejos de su país',
    title: 'Tu casa se organiza sola a partir de hoy',
    text: 'Únete a las casas que cambiaron la planilla y el grupo de WhatsApp por una sola app.',
    cta: 'Empezar gratis por 30 días',
    finePrint: 'Sin tarjeta · Después de la prueba, AU$15/mes por casa',
  },
  contact: {
    title: 'Escríbenos',
    subtitle: '¿Duda, sugerencia o algún problema con tu casa? Mándanos un mensaje — te respondemos rapidito.',
    labels: { name: 'Nombre', email: 'Correo', message: 'Mensaje' },
    submit: 'Enviar mensaje',
    note: 'Esto abre tu app de correo con el mensaje listo para enviar a {email}.',
    mailSubject: 'Escríbenos',
  },
  footer: {
    tagline: 'HeyFlat — Tu casa compartida, organizada.',
    storeBadges: { comingSoon: 'Próximamente en', appStore: 'App Store', googlePlay: 'Google Play' },
    columns: { product: 'Producto', follow: 'Síguenos', legal: 'Legal', connect: 'Conectar' },
    productLinks: ['Funciones', 'Precio', 'Preguntas', 'Contacto', 'Guía'],
    legalLinks: ['Privacidad', 'Términos de uso', 'Cookies', 'Seguridad'],
    connectLinks: ['Contacto', 'Changelog', 'Acerca de'],
    copyright: 'Hecho en Australia 🇦🇺 · © {year} HeyFlat',
  },
  guide: {
    seo: {
      title: 'Guía completa de HeyFlat — cómo usar cada función',
      description:
        'Guía paso a paso de todo lo que hace HeyFlat: cómo unirte a una casa, dividir cuentas, organizar tareas, lista de compras, mantenimiento y más.',
    },
    title: 'Guía completa de HeyFlat',
    subtitle: 'Desde el primer inicio de sesión hasta el día a día de la casa — cómo usar cada función, explicada en detalle.',
    tocLabel: 'En esta página',
    sections: [
      {
        id: 'primeros-pasos',
        title: '1. Primeros pasos: crear tu cuenta y unirte a la casa',
        paragraphs: [
          'Para usar HeyFlat necesitas una cuenta y una casa. Si eres el primero de tu casa compartida en usar la app, tú creas la casa. Si un compañero ya la usa, te unes a su casa — ese es el camino más común.',
        ],
        steps: [
          'Crea tu cuenta con email y contraseña, desde el navegador o la app.',
          'En la primera pantalla, elige entre Crear casa (nadie en tu casa usa HeyFlat todavía) o Unirme a una casa (un compañero ya te invitó).',
          'Para unirte a una casa existente, pide el código de invitación a alguien que ya sea miembro — está en Casa → Invitar miembros — e ingrésalo en la pantalla de unirse.',
          'Listo: ya estás dentro de la casa, y las cuentas, tareas y listas compartidas aparecen automáticamente.',
        ],
        note: 'Ante la duda, casi siempre es así: quien se muda a una casa que ya existe se une con un código, no crea una casa nueva. Solo crea una casa nueva quien es la primera persona en configurar HeyFlat para esa casa.',
      },
      {
        id: 'cuentas',
        title: '2. Cuentas: dividiendo los gastos de la casa',
        paragraphs: [
          'En Cuentas registras cualquier gasto de la casa y lo divides entre los compañeros — alquiler, internet, luz, agua, o cualquier cuenta puntual.',
        ],
        list: [
          'Divide en partes iguales, por porcentaje, o por un monto exacto para cada persona.',
          'Las cuentas recurrentes (como el alquiler) se crean una vez y se repiten automáticamente cada período.',
          'Cada compañero marca su parte como pagada al arreglar cuentas con quien pagó.',
          'Puedes eliminar una cuenta entera, o solo una ocurrencia específica de una cuenta recurrente, sin afectar las demás.',
        ],
      },
      {
        id: 'tareas',
        title: '3. Tareas: organizando las tareas de la casa',
        paragraphs: ['En Tareas creas y asignas las tareas del hogar — a una persona, a algunas, o a toda la casa.'],
        list: [
          'Las tareas recurrentes (sacar la basura, limpiar la cocina) se repiten automáticamente según el período que configures.',
          'Cada quien marca su tarea como completada al terminarla.',
          "El ranking mensual 'Compañero del mes' muestra quién está haciendo más — una forma ligera de mantener a todos motivados.",
        ],
      },
      {
        id: 'gastos',
        title: '4. Gastos: siguiendo el historial',
        paragraphs: [
          'La pestaña Gastos muestra un resumen de todo lo que la casa ha gastado a lo largo del tiempo, organizado por categoría (alquiler, mercado, cuentas, etc.).',
          'Úsala para entender a dónde va el dinero de la casa, sin tener que sumar nada a mano.',
        ],
      },
      {
        id: 'compras',
        title: '5. Compras: lista compartida en tiempo real',
        paragraphs: [
          'La lista de Compras la comparten todos los compañeros. Cualquiera puede añadir un artículo en cuanto nota que se acabó, y todos ven la lista actualizarse al instante — sin grupo de WhatsApp lleno de mensajes de lista de compras.',
        ],
        note: 'Cuando alguien compra un artículo y registra cuánto gastó, esa compra se agrega automáticamente como una cuenta dividida en Cuentas — no hace falta registrarla de nuevo en otro lugar.',
      },
      {
        id: 'calendario',
        title: '6. Calendario: todo junto, en un solo lugar',
        paragraphs: [
          'El Calendario reúne cuentas y tareas con fecha en una sola vista, para que veas de un vistazo qué vence esta semana o este mes.',
        ],
      },
      {
        id: 'mantenimiento',
        title: '7. Mantenimiento: del problema hasta resuelto',
        paragraphs: [
          '¿Encontraste un problema en la casa — una llave que gotea, un foco quemado, algo roto? Regístralo en Mantenimiento con foto y descripción, y dale seguimiento hasta que quede resuelto.',
          'Así nada se pierde en una conversación de grupo, y todos saben qué ya se resolvió y qué sigue pendiente.',
        ],
      },
      {
        id: 'inspeccion',
        title: '8. Inspección: checklist de entrada y salida',
        paragraphs: [
          'Cuando alguien entra o sale de la casa, corre un checklist de inspección para documentar el estado de cada ambiente — evita discusiones sobre el depósito o daños al salir.',
        ],
      },
      {
        id: 'casa',
        title: '9. Casa: información e invitaciones',
        paragraphs: [
          'La pestaña Casa reúne la información práctica del día a día: contraseña del Wi-Fi, dirección, y otra información que todos en la casa necesitan consultar de vez en cuando.',
          'También aquí encuentras y compartes el código de invitación de la casa para sumar nuevos compañeros — revisa la sección Primeros pasos para saber cómo se usa ese código.',
        ],
      },
      {
        id: 'notificaciones',
        title: '10. Notificaciones y recordatorios',
        paragraphs: [
          'Las cuentas y tareas pueden tener tantos recordatorios como quieras, cada uno con su propio canal (email, notificación push, o ambos) y con la anticipación que prefieras — como una app de calendario.',
          'La lista de Compras funciona distinto: en cuanto alguien añade un artículo, toda la casa recibe una notificación instantánea, sin necesidad de configurar nada.',
        ],
      },
      {
        id: 'suscripcion',
        title: '11. Suscripción de la casa',
        paragraphs: [
          'Toda casa nueva en HeyFlat empieza con un período de prueba gratuito. Cuando ese período termina, la casa necesita una suscripción activa para seguir usando la app — es un acuerdo entre los compañeros de casa, no un cobro por persona.',
          'Cuando termine la prueba (o antes, si prefieres), puedes suscribirte directamente desde la app, y cancelar cuando quieras, sin penalización.',
        ],
      },
    ],
    cta: {
      title: '¿Listo para organizar tu casa?',
      subtitle: '30 días gratis, sin tarjeta de crédito.',
      button: 'Crear cuenta gratis',
    },
  },
}
