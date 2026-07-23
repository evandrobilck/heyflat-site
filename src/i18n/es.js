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
    productLinks: ['Funciones', 'Precio', 'Preguntas', 'Contacto'],
    legalLinks: ['Privacidad', 'Términos de uso', 'Cookies', 'Seguridad'],
    connectLinks: ['Contacto', 'Changelog', 'Acerca de'],
    copyright: 'Hecho en Australia 🇦🇺 · © {year} HeyFlat',
  },
}
