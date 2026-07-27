// Content for one blog post, all three locales in one file — keeps a
// single source of truth per article instead of spreading long-form copy
// across the giant per-language site dicts (src/i18n/*.js), which only
// hold short UI strings. Add new posts as sibling files and register them
// in ../registry.js.
export default {
  slug: 'dividir-contas-sem-brigar',
  publishedAt: '2026-07-28',
  readingMinutes: 6,
  // Section id on the Guide page (src/i18n/*.js -> guide.sections) this
  // post's CTA links to — the id is shared across locales, only the
  // heading text differs.
  ctaAnchor: 'contas',

  en: {
    title: 'How to split bills in a shared house without fighting about it',
    description:
      'The three most common ways to split household bills — equal, by percentage, or by actual usage — and the mistakes that cause the most friction in share houses.',
    excerpt:
      'Equal split, by percentage, or by usage: which method actually avoids drama in a share house — plus the most common mistakes.',
    sections: [
      {
        heading: 'Why splitting bills causes so much friction',
        paragraphs: [
          "Anyone who's lived in a share house knows: most arguments aren't really about money — they're about the lack of an agreed method. Nobody minds paying their share; the problem is when the method changes from bill to bill, or nobody remembers who paid what.",
          "The good news: there are really only three ways to split a bill between roommates, and picking the right one for each type of expense solves most of the friction before it even starts.",
        ],
      },
      {
        heading: 'Method 1: Equal split',
        paragraphs: [
          'The simplest option: divide the total by the number of roommates. Works well for bills everyone uses equally — internet, streaming, shared cleaning supplies.',
          "Where it breaks down: rooms with different sizes or setups (one has air conditioning, another doesn't), or when someone's away travelling for most of the month and barely uses the house.",
        ],
      },
      {
        heading: 'Method 2: Split by percentage',
        paragraphs: [
          'Each roommate pays a fixed percentage, agreed in advance — usually based on room size or income. It solves the unequal-rooms problem without recalculating everything every time a new bill lands.',
          "It's the most common method for rent in houses with rooms of very different sizes (ensuite vs. a small single, for example).",
        ],
      },
      {
        heading: 'Method 3: Split by exact amount or actual usage',
        paragraphs: [
          "Everyone pays what they actually used — the room with AC pays more on the power bill, whoever cooks the most pays more on gas. It's the fairest method, but also the one that needs the most bookkeeping: someone has to track different amounts per person instead of just dividing one total.",
          'This is where most houses give up trying to do it manually — in a spreadsheet or a group chat, this kind of tracking falls apart fast.',
        ],
      },
      {
        heading: 'The most common mistakes',
        list: [
          "Agreeing on a method verbally, with nothing written down — after two or three bills, nobody remembers what was agreed.",
          '"I\'ll cover this one, you get the next one" with no record — turns into a misunderstanding a few weeks later, because everyone remembers it differently.',
          "Splitting bills from memory, with no history — makes it hard to figure out who's already paid what when a question comes up.",
          'No due-date reminder — someone always forgets, and the bill goes late or racks up a late fee before the rest of the house notices.',
        ],
      },
    ],
    cta: {
      title: "You don't have to pick one method by hand",
      subtitle:
        'HeyFlat splits any bill however your house agrees — equal, by percentage, or exact amount — and sends due-date reminders to everyone automatically.',
      button: 'See how bill splitting works',
    },
  },

  pt: {
    title: 'Como dividir contas de uma casa compartilhada sem brigar',
    description:
      'Os três jeitos mais usados pra dividir contas entre moradores — igual, por porcentagem ou por consumo — e os erros que mais causam climão em república.',
    excerpt:
      'Igual, por porcentagem ou por consumo: veja qual método de divisão de contas evita mais climão em casa compartilhada — e os erros mais comuns.',
    sections: [
      {
        heading: 'Por que dividir contas dá tanto climão',
        paragraphs: [
          'Quem já morou de república sabe: a maior parte das brigas não é sobre dinheiro, é sobre falta de combinado. Ninguém se incomoda de pagar sua parte — o problema é quando o critério muda de conta pra conta, ou quando ninguém lembra quem pagou o quê.',
          'A boa notícia é que existem só três jeitos de dividir uma conta entre moradores, e escolher o certo pra cada tipo de despesa já resolve a maior parte do atrito antes que ele comece.',
        ],
      },
      {
        heading: 'Método 1: Divisão igual',
        paragraphs: [
          'O mais simples: divide o valor total pelo número de moradores e pronto. Funciona bem pra contas que todo mundo usa igual — internet, streaming, produtos de limpeza da área comum.',
          'Onde ele falha: quartos com tamanhos ou infraestrutura diferentes (um com ar-condicionado, outro sem), ou quando alguém viaja o mês inteiro e não usa quase nada da casa.',
        ],
      },
      {
        heading: 'Método 2: Divisão por porcentagem',
        paragraphs: [
          'Cada morador paga uma porcentagem fixa, combinada de antemão — geralmente proporcional ao tamanho do quarto ou à renda de cada um. Resolve o problema de quartos desiguais sem precisar recalcular tudo toda vez que chega uma conta nova.',
          'É o método mais comum pro aluguel em casas com quartos de tamanhos bem diferentes (suíte vs. quarto simples, por exemplo).',
        ],
      },
      {
        heading: 'Método 3: Divisão por valor exato ou consumo',
        paragraphs: [
          'Cada um paga o que efetivamente gastou — o quarto com ar-condicionado paga mais na conta de luz, quem cozinha mais paga mais no gás. É o método mais justo, mas também o que exige mais organização: alguém precisa registrar valores diferentes por pessoa em vez de só dividir um total.',
          "É aqui que a maioria das casas desiste de tentar fazer \"na mão\" — porque em planilha ou no grupo do WhatsApp, esse tipo de conta se perde rápido.",
        ],
      },
      {
        heading: 'Os erros mais comuns',
        list: [
          'Combinar o método de boca, sem anotar em lugar nenhum — depois de duas ou três contas, ninguém lembra qual foi combinado.',
          '"Eu pago dessa vez, você paga a próxima" sem registrar — algum tempo depois vira mal-entendido, porque cada um lembra de um jeito.',
          'Dividir de cabeça, sem histórico — dificulta descobrir quem já pagou o quê quando dá alguma dúvida.',
          'Não ter lembrete de vencimento — alguém sempre esquece, e a conta atrasa ou junta multa antes que o resto da casa perceba.',
        ],
      },
    ],
    cta: {
      title: 'Você não precisa escolher um método na mão',
      subtitle:
        'O HeyFlat divide qualquer conta do jeito que sua casa combinar — igual, por porcentagem ou valor exato — e manda lembrete de vencimento pra todo mundo, automaticamente.',
      button: 'Ver como funciona a divisão de contas',
    },
  },

  es: {
    title: 'Cómo dividir las cuentas de una casa compartida sin pelear',
    description:
      'Las tres formas más comunes de dividir las cuentas entre compañeros de casa —igual, por porcentaje o por consumo— y los errores que más generan conflicto.',
    excerpt:
      'Igual, por porcentaje o por consumo: qué método de división de cuentas evita más peleas en una casa compartida, y los errores más comunes.',
    sections: [
      {
        heading: 'Por qué dividir las cuentas genera tanto conflicto',
        paragraphs: [
          'Quien ya vivió en una casa compartida lo sabe: la mayoría de las peleas no son realmente por dinero, sino por la falta de un método acordado. A nadie le molesta pagar su parte; el problema es cuando el criterio cambia de una cuenta a otra, o cuando nadie recuerda quién pagó qué.',
          'La buena noticia es que en realidad solo hay tres formas de dividir una cuenta entre compañeros de casa, y elegir la correcta para cada tipo de gasto resuelve la mayoría de los conflictos antes de que empiecen.',
        ],
      },
      {
        heading: 'Método 1: División igualitaria',
        paragraphs: [
          'El más simple: se divide el total entre la cantidad de personas y listo. Funciona bien para cuentas que todos usan por igual: internet, streaming, artículos de limpieza de áreas comunes.',
          'Dónde falla: habitaciones de distinto tamaño o equipamiento (una con aire acondicionado, otra sin), o cuando alguien viaja casi todo el mes y casi no usa la casa.',
        ],
      },
      {
        heading: 'Método 2: División por porcentaje',
        paragraphs: [
          'Cada persona paga un porcentaje fijo, acordado de antemano —generalmente proporcional al tamaño de la habitación o al ingreso de cada uno. Resuelve el problema de las habitaciones desiguales sin tener que recalcular todo cada vez que llega una cuenta nueva.',
          'Es el método más común para el alquiler en casas con habitaciones de tamaños muy distintos (suite vs. habitación simple, por ejemplo).',
        ],
      },
      {
        heading: 'Método 3: División por monto exacto o consumo real',
        paragraphs: [
          'Cada quien paga lo que realmente gastó: la habitación con aire acondicionado paga más en la cuenta de luz, quien cocina más paga más de gas. Es el método más justo, pero también el que exige más organización: alguien tiene que registrar montos distintos por persona en vez de dividir un solo total.',
          'Acá es donde la mayoría de las casas se rinde tratando de hacerlo a mano: en una planilla o en el chat grupal, este tipo de cuenta se pierde rápido.',
        ],
      },
      {
        heading: 'Los errores más comunes',
        list: [
          'Acordar el método de palabra, sin anotarlo en ningún lado: después de dos o tres cuentas, nadie recuerda qué se había acordado.',
          '"Yo pago esta, vos pagás la próxima" sin registrarlo: unas semanas después se convierte en malentendido, porque cada uno lo recuerda distinto.',
          'Dividir de memoria, sin historial: dificulta saber quién ya pagó qué cuando surge una duda.',
          'No tener recordatorio de vencimiento: alguien siempre se olvida, y la cuenta se atrasa o suma recargo antes de que el resto de la casa se dé cuenta.',
        ],
      },
    ],
    cta: {
      title: 'No hace falta elegir un método a mano',
      subtitle:
        'HeyFlat divide cualquier cuenta como tu casa decida —igual, por porcentaje o monto exacto— y envía recordatorios de vencimiento a todos automáticamente.',
      button: 'Ver cómo funciona la división de cuentas',
    },
  },
}
