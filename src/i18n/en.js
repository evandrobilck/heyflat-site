export default {
  seo: {
    title: 'HeyFlat — Your shared house, organized',
    description:
      'Split bills, manage chores and take care of your shared house in one app. AU$15/month per house, unlimited roommates. Free for 30 days.',
  },
  header: {
    nav: {
      home: 'Home',
      howItWorks: 'How it works',
      features: 'Features',
      price: 'Pricing',
      faq: 'FAQ',
    },
    login: 'Log in',
    cta: 'Start free',
  },
  hero: {
    eyebrow: 'Made for people who share a house',
    titleStart: 'Your shared house,',
    titleHighlight: 'sorted.',
    subtitle:
      'Bills, chores, shopping and reminders — all in one app, split fairly between roommates. You stop being the one who has to chase everyone.',
    ctaPrimary: 'Start free for 30 days',
    ctaSecondary: 'See features',
    finePrint: 'No credit card. One plan per house, every roommate included.',
    trustBar: 'Português, English and Español · Unlimited roommates · Made in Australia',
  },
  problem: {
    title: "Sharing a house shouldn't be this complicated",
    items: [
      {
        title: 'The spreadsheet nobody opens.',
        text: "You build it, you update it, and someone always forgets to log what they spent.",
      },
      {
        title: 'The group-chat nagging.',
        text: '"Guys, rent\'s due tomorrow 🙏" — seen by five, answered by none.',
      },
      { title: 'The invisible chore roster.', text: "It always feels like you're the one doing everything. You probably are." },
      { title: 'The decisions that get lost.', text: "The plumber's message disappeared under a thousand WhatsApp texts." },
    ],
    closing: 'HeyFlat fixes all four.',
  },
  languagesStrip: {
    text: 'Available in 3 languages, with more on the way — for any house, in any country',
    more: '+ more coming',
  },
  previews: {
    balance: { youOwe: 'You owe', owedToYou: 'Owed to you' },
    hallOfFame: { badge: '🏆 Roommate of the month', name: 'Evandro Bilck', tasksDone: '8 chores done' },
    shopping: { item1: 'Toilet paper', item2: 'Detergent' },
    reminder: {
      billLabel: 'Rent — due on the 30th',
      reminder1: '7 days before, at 9:00 AM',
      reminder2: '1 day before, at 6:00 PM',
    },
    maintenance: { issue1: 'Kitchen leak', status1: 'In progress', issue2: 'Bathroom faucet', status2: 'Resolved' },
    inspection: {
      checklist: 'Move-out checklist',
      item1: 'Walls free of holes or stains',
      item2: 'Stove and fridge clean',
      item3: 'Keys and garage remote',
    },
    house: { address: 'Pohlman Street' },
  },
  features: {
    title: 'Our main features',
    subtitle: 'See, in detail, everything your shared house gets.',
    items: [
      {
        icon: '💰',
        title: 'Bills',
        description:
          "Split rent and bills in seconds. Add any bill — rent, power, internet, groceries — and HeyFlat splits it automatically between roommates. Even split, by percentage, or an exact amount, you choose. And the due-date reminder goes out to everyone through the app, not from you.",
        bullets: [
          'Weekly, fortnightly, monthly or yearly recurrence',
          'Custom categories, on top of the ready-made ones',
          'Mark payments as settled, one by one',
        ],
        preview: 'balance',
      },
      {
        icon: '✅',
        title: 'Chores',
        description:
          'A roster nobody argues with. Dishes, bins, bathroom, cleaning. Set up the house rotation once and you\'re done: everyone knows their turn, the app reminds them, and the "I always do everything" argument ends.',
        bullets: [
          'Mark as done by more than one person',
          'Daily, weekly or monthly recurrence',
          'Edit or remove anytime',
        ],
        preview: 'hallOfFame',
      },
      {
        icon: '🛒',
        title: 'Shopping List',
        description:
          "One list, always up to date. Any roommate can add to it, everyone sees it in real time. Whoever goes to the shop already knows what's missing before they leave the house.",
        bullets: [
          'History of everything ever bought',
          'Edit items and past purchases',
          'Reuses the same categories as bills',
        ],
        preview: 'shopping',
      },
      {
        icon: '📅',
        title: 'Unified calendar',
        description:
          "See, in one calendar, every recurring bill and chore in the house — including upcoming occurrences, not just the first date. Click any day to see exactly what's due or needs doing.",
        bullets: [
          'Recurring bills and chores show on every future date',
          'Different colors for bills (purple) and chores (blue)',
          "One click takes you straight to that day's details",
        ],
        preview: 'calendar',
      },
      {
        icon: '🔔',
        title: 'Custom reminders',
        description:
          "Nothing slips through anymore. Set up reminders for whatever your house needs: a bill due date, bin day, heater service. The whole house gets notified right on time, automatically.",
        bullets: [
          "Multiple reminders per bill or chore, each with its own channel",
          'Choose the day and time for each alert',
          'Shopping list notifies the whole house in real time',
        ],
        preview: 'reminder',
      },
      {
        icon: '📊',
        title: 'Expenses',
        description:
          "See where the house's money goes. Clear charts of how much the house spends by category and month. Spot where to cut back before the bill arrives.",
        bullets: [
          'Filter by period: current month, previous, or last 3 months',
          'Automatic comparison with the previous period',
          'Export to CSV anytime',
        ],
        preview: 'reports',
      },
      {
        icon: '🏠',
        title: 'House',
        description:
          'Everything the house needs in one place. Wi-Fi password, house details, shared calendar and important information always at hand. No more asking "what\'s the Wi-Fi password again?" every time someone visits.',
        bullets: [
          'Invite roommates with a code or link',
          'House vault: Wi-Fi and other important info',
          'History of who lived there and for how long',
        ],
        preview: 'house',
      },
      {
        icon: '🔧',
        title: 'Maintenance',
        description:
          'Maintenance under control. Log what broke, what\'s already fixed, and what\'s still pending. Everyone can track the status — no more "I thought someone already called the landlord."',
        bullets: [
          'Photos and description for every issue logged',
          'Status tracking through to resolution',
          'Full history of everything ever reported',
        ],
        preview: 'maintenance',
      },
      {
        icon: '📋',
        title: 'Inspections',
        description:
          'Inspections without the last-minute scramble. Set the inspection date and organize what needs to be ready beforehand. The house gets prepared together, ahead of time, instead of everyone cleaning all night before.',
        bullets: [
          'Configurable, item-by-item checklist',
          'Use it for move-in and move-out',
          'A record that avoids disputes over damage',
        ],
        preview: 'inspection',
      },
      {
        icon: '🌎',
        title: 'Multi-platform',
        description:
          'Today HeyFlat already works straight from the browser, on desktop or mobile, with the same account synced in real time between roommates. Native iOS and Android apps are on the way, using the same account you already have.',
        bullets: [
          'Same account on any device',
          'Real-time updates between roommates',
          'Native mobile app on the way',
        ],
        preview: 'devices',
      },
    ],
    ctaBox: {
      title: 'Ready to get your house organized?',
      subtitle: '30 days free, no commitment.',
      cta: 'Create free account',
    },
  },
  roommateOfMonth: {
    title: 'The house feels lighter when everyone pitches in',
    text: "At the end of each month, whoever helped the house most becomes Roommate of the Month — featured with a photo in the app. It's simple, it's a bit silly, and it works: living together gets better when everyone's effort is visible.",
  },
  howItWorks: {
    title: 'How it works',
    steps: [
      { title: 'Create your house', text: 'Takes less than a minute.' },
      { title: 'Invite your flatmates', text: "One link, and everyone's in." },
      { title: 'Let the app organize', text: 'Split bills, chores on the roster, automatic reminders.' },
    ],
    cta: 'Create my house now',
  },
  comparison: {
    title: 'Other apps split bills. HeyFlat runs the whole house.',
    columns: { feature: 'Feature', others: 'Other apps', heyflat: 'HeyFlat' },
    partial: 'Partial',
    rows: [
      'Bill splitting',
      'Flexible split (even, %, exact)',
      'Chores and house roster',
      'Shared shopping list',
      'Custom reminders',
      'Maintenance tracking',
      'Inspection organizing',
      'House calendar',
      'House vault (passwords & info)',
      'Spending reports',
      'Roommate of the Month',
      'Roommate history',
      'Portuguese, English, Spanish',
      'Price per house, not per person',
    ],
  },
  price: {
    title: 'One price per house. Every roommate included.',
    subtitle:
      'Not per person. One flat price for the whole house — 3, 5 or 8 roommates, same price. One subscription, the whole house with full access.',
    planName: 'HeyFlat House',
    price: 'AU$ 15',
    period: '/mo per house',
    trial: '30 days free to try',
    features: ['Unlimited roommates, no extra cost', '30 days free, no card', 'Cancel anytime'],
    cta: 'Start your 30 days free',
    finePrint: 'Only whoever created the house is charged. No card fee for the other roommates.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is the price per person or per house?',
        answer:
          "Per house, always. It's AU$15 a month for the whole house, no matter how many roommates you are. One person subscribes and everyone gets full access.",
      },
      { question: 'If one more roommate joins, does the price go up?', answer: 'No. Unlimited roommates, always AU$15 per house.' },
      {
        question: 'Does the app process payments between us?',
        answer:
          'No. HeyFlat calculates, organizes and tells you who owes what — the actual payment happens the way you already do it today, transferred directly between you. Then just mark it as paid in the app.',
      },
      {
        question: 'What if someone moves out mid-month?',
        answer: 'HeyFlat keeps a roommate history and prorates the bills for the period that person actually lived there.',
      },
      { question: 'Does it work in Portuguese?', answer: 'Yes — Portuguese, English and Spanish. Each roommate picks their own language, in the same house.' },
      { question: 'Do I need a card to try it?', answer: "No. It's 30 full days, with the whole house, no card required." },
      {
        question: 'Does it work for any kind of house?',
        answer:
          'It does. Built for share houses, but works just as well for a shared flat, a couple splitting expenses, or a family organizing their routine.',
      },
    ],
  },
  finalCta: {
    eyebrow: "Built by people who've shared a house far from home too",
    title: 'Your house organizes itself starting today',
    text: 'Join the houses that traded the spreadsheet and the WhatsApp group for one app.',
    cta: 'Start free for 30 days',
    finePrint: 'No card · After the trial, AU$15/month per house',
  },
  contact: {
    title: 'Get in touch',
    subtitle: "Question, suggestion, or an issue with your house? Send us a message — we'll get back to you quickly.",
    labels: { name: 'Name', email: 'Email', message: 'Message' },
    submit: 'Send message',
    note: 'This opens your email app with the message ready to send to {email}.',
    mailSubject: 'Get in touch',
  },
  footer: {
    tagline: 'HeyFlat — Your shared house, organized.',
    storeBadges: { comingSoon: 'Coming soon to', appStore: 'App Store', googlePlay: 'Google Play' },
    columns: { product: 'Product', follow: 'Follow us', legal: 'Legal', connect: 'Connect' },
    productLinks: ['Features', 'Pricing', 'FAQ', 'Contact'],
    legalLinks: ['Privacy', 'Terms of use', 'Cookies', 'Security'],
    connectLinks: ['Contact', 'Changelog', 'About'],
    copyright: 'Made in Australia 🇦🇺 · © {year} HeyFlat',
  },
}
