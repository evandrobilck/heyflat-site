export default {
  seo: {
    title: 'HeyFlat — Sua casa compartilhada, organizada',
    description:
      'Divida contas, organize tarefas e cuide da sua casa compartilhada num app só. AU$15/mês por casa, moradores ilimitados. Grátis por 30 dias.',
  },
  header: {
    nav: {
      home: 'Início',
      howItWorks: 'Como funciona',
      features: 'Recursos',
      price: 'Preço',
      faq: 'Perguntas',
    },
    login: 'Login',
    cta: 'Começar grátis',
  },
  hero: {
    eyebrow: 'Feito pra quem mora dividido',
    titleStart: 'Sua casa compartilhada,',
    titleHighlight: 'resolvida.',
    subtitle:
      'Contas, tarefas, compras e avisos — tudo num app só, dividido de forma justa entre os moradores. Você para de ser o chato que cobra todo mundo.',
    ctaPrimary: 'Começar grátis por 30 dias',
    ctaSecondary: 'Ver recursos',
    finePrint: 'Sem cartão. Um plano por casa, todos os moradores inclusos.',
    trustBar: 'Português, English e Español · Moradores ilimitados · Feito na Austrália',
  },
  problem: {
    title: 'Dividir casa não deveria ser tão complicado',
    items: [
      { title: 'A planilha que ninguém abre.', text: 'Você monta, atualiza, e sempre falta alguém lançar o que gastou.' },
      {
        title: 'A cobrança no grupo.',
        text: '"Gente, o aluguel vence amanhã 🙏" — visualizado por cinco, respondido por nenhum.',
      },
      { title: 'A escala de tarefas invisível.', text: 'Sempre parece que é você que faz tudo. E provavelmente é.' },
      { title: 'As decisões perdidas.', text: 'O aviso do encanador sumiu entre mil mensagens no WhatsApp.' },
    ],
    closing: 'O HeyFlat resolve os quatro.',
  },
  languagesStrip: {
    text: 'Disponível em 3 idiomas, com mais chegando — pra qualquer casa, em qualquer país',
    more: '+ mais em breve',
  },
  previews: {
    balance: { youOwe: 'Você deve', owedToYou: 'Devem a você' },
    hallOfFame: { badge: '🏆 Morador do mês', name: 'Evandro Bilck', tasksDone: '8 tarefas feitas' },
    shopping: { item1: 'Papel higiênico', item2: 'Detergente' },
    reminder: {
      billLabel: 'Aluguel — vence dia 30',
      reminder1: '7 dias antes, às 09:00',
      reminder2: '1 dia antes, às 18:00',
    },
    maintenance: { issue1: 'Vazamento na cozinha', status1: 'Em andamento', issue2: 'Torneira do banheiro', status2: 'Resolvido' },
    inspection: {
      checklist: 'Checklist de saída',
      item1: 'Paredes sem furos ou manchas',
      item2: 'Fogão e geladeira limpos',
      item3: 'Chaves e controle da garagem',
    },
    house: { address: 'Pohlman Street' },
  },
  features: {
    title: 'Nossos principais recursos',
    subtitle: 'Conheça, em detalhes, tudo que a sua casa compartilhada ganha.',
    items: [
      {
        icon: '💰',
        title: 'Contas',
        description:
          'Aluguel e contas divididos em segundos. Adicione qualquer conta — aluguel, luz, internet, mercado — e o HeyFlat divide automaticamente entre os moradores. Divisão igual, por porcentagem ou valor exato, você escolhe. E o lembrete de vencimento chega pra todo mundo pelo app, não por você.',
        bullets: [
          'Recorrência semanal, quinzenal, mensal ou anual',
          'Categorias personalizadas, além das já prontas',
          'Marque pagamentos como quitados, um por um',
        ],
        preview: 'balance',
      },
      {
        icon: '✅',
        title: 'Tarefas',
        description:
          'Uma escala que ninguém discute. Louça, lixo, banheiro, faxina. Monte a rotação da casa uma vez e pronto: cada um sabe a sua vez, o app avisa, e a discussão de "eu sempre faço tudo" acaba.',
        bullets: [
          'Marcar como feita por mais de uma pessoa',
          'Recorrência diária, semanal ou mensal',
          'Editar ou remover a qualquer momento',
        ],
        preview: 'hallOfFame',
      },
      {
        icon: '🛒',
        title: 'Lista de Compras',
        description:
          'Uma lista só, sempre atualizada. Qualquer morador adiciona, todo mundo vê em tempo real. Quem for ao mercado já sai de casa sabendo o que falta.',
        bullets: [
          'Histórico de tudo que já foi comprado',
          'Edição de itens e compras registradas',
          'Reaproveita as mesmas categorias das contas',
        ],
        preview: 'shopping',
      },
      {
        icon: '📅',
        title: 'Calendário unificado',
        description:
          'Veja, num só calendário, todas as contas e tarefas recorrentes da casa — inclusive as próximas ocorrências, não só a primeira data. Clique em qualquer dia pra ver exatamente o que vence ou o que precisa ser feito.',
        bullets: [
          'Contas e tarefas recorrentes aparecem em todas as datas futuras',
          'Cores diferentes pra contas (roxo) e tarefas (azul)',
          'Um clique leva direto pros detalhes do dia',
        ],
        preview: 'calendar',
      },
      {
        icon: '🔔',
        title: 'Lembretes personalizados',
        description:
          'Nada mais passa batido. Configure lembretes pro que a sua casa precisa: vencimento de conta, dia do lixo, revisão do aquecedor. A casa toda é avisada na hora certa, automaticamente.',
        bullets: [
          'Vários lembretes por conta ou tarefa, cada um com seu canal',
          'Escolha o dia e o horário de cada aviso',
          'Lista de compras avisa a casa inteira em tempo real',
        ],
        preview: 'reminder',
      },
      {
        icon: '📊',
        title: 'Expenses',
        description:
          'Veja pra onde vai o dinheiro da casa. Gráficos claros de quanto a casa gasta por categoria e por mês. Dá pra enxergar onde apertar antes da conta chegar.',
        bullets: [
          'Filtro por período: mês atual, anterior ou últimos 3 meses',
          'Comparativo automático com o período anterior',
          'Exportação em CSV a qualquer momento',
        ],
        preview: 'reports',
      },
      {
        icon: '🏠',
        title: 'House',
        description:
          'Tudo que a casa precisa num lugar só. Senha do Wi-Fi, dados da casa, calendário compartilhado e informações importantes sempre à mão. Chega de perguntar "qual mesmo a senha?" toda vez que chega visita.',
        bullets: [
          'Convide moradores com um código ou link de convite',
          'Cofre da casa: Wi-Fi e outras informações importantes',
          'Histórico de quem morou e por quanto tempo',
        ],
        preview: 'house',
      },
      {
        icon: '🔧',
        title: 'Manutenção',
        description:
          'Manutenção sob controle. Registre o que quebrou, o que já foi consertado e o que ainda está pendente. Todo mundo acompanha o status — sem aquele "achei que alguém já tinha ligado pro proprietário".',
        bullets: [
          'Fotos e descrição em cada problema registrado',
          'Acompanhamento de status até a resolução',
          'Histórico completo de tudo que já foi relatado',
        ],
        preview: 'maintenance',
      },
      {
        icon: '📋',
        title: 'Inspeções',
        description:
          'Inspeção sem correria. Marque a data da inspeção e organize o que precisa estar pronto antes dela. A casa se prepara junto, com antecedência, em vez de virar noite arrumando tudo na véspera.',
        bullets: [
          'Checklist configurável, item por item',
          'Use na entrada e na saída de moradores',
          'Registro que evita discussão sobre danos',
        ],
        preview: 'inspection',
      },
      {
        icon: '🌎',
        title: 'Multiplataforma',
        description:
          'Hoje o HeyFlat já funciona direto do navegador, no computador ou no celular, com a mesma conta sincronizada em tempo real entre todos os moradores. Apps nativos para iOS e Android estão a caminho, usando a mesma conta que você já tem.',
        bullets: [
          'Mesma conta em qualquer dispositivo',
          'Atualizações em tempo real entre moradores',
          'App mobile nativo a caminho',
        ],
        preview: 'devices',
      },
    ],
    ctaBox: {
      title: 'Pronto pra organizar a sua casa?',
      subtitle: '30 dias grátis, sem compromisso.',
      cta: 'Criar conta grátis',
    },
  },
  roommateOfMonth: {
    title: 'A casa fica leve quando todo mundo colabora',
    text: 'No fim de cada mês, quem mais ajudou a casa vira o Morador do Mês — com foto em destaque no app. É simples, é bobo, e funciona: a convivência melhora quando o esforço de cada um fica visível.',
  },
  howItWorks: {
    title: 'Como funciona',
    steps: [
      { title: 'Crie sua casa', text: 'Leva menos de um minuto.' },
      { title: 'Convide seus flatmates', text: 'Um link, e todo mundo está dentro.' },
      { title: 'Deixe o app organizar', text: 'Contas divididas, tarefas na escala, lembretes automáticos.' },
    ],
    cta: 'Criar minha casa agora',
  },
  comparison: {
    title: 'Outros apps dividem contas. O HeyFlat cuida da casa inteira.',
    columns: { feature: 'Recurso', others: 'Outros apps', heyflat: 'HeyFlat' },
    partial: 'Parcial',
    rows: [
      'Divisão de contas',
      'Divisão flexível (igual, %, exata)',
      'Tarefas e escala da casa',
      'Lista de compras compartilhada',
      'Lembretes personalizados',
      'Controle de manutenção',
      'Organização de inspeções',
      'Calendário da casa',
      'Cofre da casa (senhas e dados)',
      'Relatórios de gastos',
      'Morador do Mês',
      'Histórico de moradores',
      'Português, English, Español',
      'Preço por casa, não por pessoa',
    ],
  },
  price: {
    title: 'Um preço por casa. Todos os moradores inclusos.',
    subtitle:
      'Não é por pessoa. É um valor único pela casa inteira — 3, 5 ou 8 moradores, o preço é o mesmo. Uma assinatura, a casa toda com acesso completo.',
    planName: 'HeyFlat Casa',
    price: 'AU$ 15',
    period: '/mês por casa',
    trial: '30 dias grátis pra testar',
    features: ['Moradores ilimitados, sem custo extra', '30 dias grátis, sem cartão', 'Cancele quando quiser'],
    cta: 'Começar os 30 dias grátis',
    finePrint: 'Só quem criou a casa é cobrado. Sem taxa de cartão pros demais moradores.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'O preço é por pessoa ou por casa?',
        answer:
          'Por casa, sempre. São AU$15 por mês pela casa inteira, independente de quantos moradores vocês são. Uma pessoa assina e todo mundo tem acesso completo.',
      },
      { question: 'Se entrar mais um morador, o preço sobe?', answer: 'Não. Moradores ilimitados, sempre AU$15 por casa.' },
      {
        question: 'O app processa os pagamentos entre a gente?',
        answer:
          'Não. O HeyFlat calcula, organiza e avisa quem deve o quê — o pagamento em si vocês fazem como já fazem hoje, por transferência entre vocês. Depois é só marcar como pago no app.',
      },
      {
        question: 'E se alguém sair da casa no meio do mês?',
        answer:
          'O HeyFlat mantém o histórico de moradores e faz o cálculo proporcional das contas do período em que a pessoa morou aí.',
      },
      { question: 'Funciona em português?', answer: 'Sim — português, inglês e espanhol. Cada morador escolhe o idioma dele, na mesma casa.' },
      { question: 'Preciso de cartão pra testar?', answer: 'Não. São 30 dias completos, com a casa toda, sem cadastrar cartão.' },
      {
        question: 'Serve pra qualquer tipo de casa?',
        answer:
          'Serve. Foi pensado pra share house, mas funciona igual pra república, casal dividindo despesas ou família organizando a rotina.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Criado por quem também já dividiu casa fora do Brasil',
    title: 'Sua casa se organiza sozinha a partir de hoje',
    text: 'Junte-se às casas que trocaram a planilha e o grupo do WhatsApp por um app só.',
    cta: 'Começar grátis por 30 dias',
    finePrint: 'Sem cartão · Depois do teste, AU$15/mês por casa',
  },
  contact: {
    title: 'Fale com a gente',
    subtitle: 'Dúvida, sugestão ou algum problema com a sua casa? Manda uma mensagem — a gente responde rapidinho.',
    labels: { name: 'Nome', email: 'E-mail', message: 'Mensagem' },
    submit: 'Enviar mensagem',
    note: 'Isso abre seu app de e-mail com a mensagem pronta pra {email}.',
    mailSubject: 'Fale com a gente',
  },
  footer: {
    tagline: 'HeyFlat — Sua casa compartilhada, organizada.',
    storeBadges: { comingSoon: 'Em breve na', appStore: 'App Store', googlePlay: 'Google Play' },
    columns: { product: 'Produto', follow: 'Siga-nos', legal: 'Legal', connect: 'Conectar' },
    productLinks: ['Recursos', 'Preço', 'Perguntas', 'Contato'],
    legalLinks: ['Privacidade', 'Termos de uso', 'Cookies', 'Segurança'],
    connectLinks: ['Contato', 'Changelog', 'Sobre'],
    copyright: 'Feito na Austrália 🇦🇺 · © {year} HeyFlat',
  },
}
