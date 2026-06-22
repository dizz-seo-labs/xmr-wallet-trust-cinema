export const SITE = {
  name: 'XMR Wallet Safety Guide',
  url: 'https://xmrtrust.uk',
  referralUrl: 'https://webcakewallet.com/?ref=Id542',
  referralDestination: 'https://webcakewallet.com/?ref=Id542',
  referralDisclosure: 'Sponsored partner link. Verify the destination before installing wallet software or entering any wallet information.',
  disclosure: 'Independent educational resource; not affiliated with Cake Wallet.',
  image: '/og-wallet-safety.svg'
};

export const pageCluster = [
  {
    slug: 'cake-wallet-login-safety',
    title: 'Cake Wallet Login Safety: Navigate Without Phishing',
    description: 'A short safety guide for Cake Wallet login-related searches: official navigation, app-store checks, and phishing red flags without asking for seeds.',
    intent: 'cake wallet login',
    directAnswer: 'Cake Wallet does not need your seed phrase for ordinary navigation. For login-related searches, start from official app listings or the official website, check the publisher, avoid ads that ask for recovery words, and never enter a seed into a website.',
    scene: 'Login searches are where wallet phishing pages like to dress up as help desks.',
    checks: ['Use official website or app-store listing only', 'Check publisher, reviews pattern, and update history', 'Never type a recovery phrase into a web page', 'Bookmark trusted sources after verification'],
    contextualLinks: [
      ['Check the official download source first', 'cake-wallet-official-download-check'],
      ['Learn how fake support scams ask for seeds', 'cake-wallet-support-scam-warning']
    ],
    faqs: [
      ['Is there a Cake Wallet web login?', 'Treat any website asking for a Cake Wallet seed or recovery phrase as a major warning sign. Wallet recovery belongs inside trusted wallet software, not random login pages.'],
      ['What should I do before tapping a result?', 'Check the domain, app publisher, and whether the page is asking for sensitive wallet material.']
    ]
  },
  {
    slug: 'restore-cake-wallet',
    title: 'Restore Cake Wallet Safely: Recovery Checklist',
    description: 'Restore Cake Wallet safely with a short checklist covering recovery phrase handling, restore height context, device hygiene, and scam avoidance.',
    intent: 'restore cake wallet',
    directAnswer: 'To restore Cake Wallet safely, use trusted wallet software, keep your recovery phrase offline, verify the device is clean, use restore-height guidance where relevant, and stop immediately if a site or support account asks you to paste your seed.',
    scene: 'A restore flow should feel calm, local, and private — not like a rushed support chat.',
    checks: ['Prepare offline seed phrase access', 'Use a clean device and current wallet version', 'Understand restore height for Monero sync time', 'Do not share screenshots, seeds, or keys with support accounts'],
    contextualLinks: [
      ['Understand Monero restore height before rescanning', 'monero-restore-height-guide'],
      ['Avoid recovery-service and support impersonation scams', 'cake-wallet-support-scam-warning'],
      ['Review seed phrase backup boundaries', 'cake-wallet-seed-phrase-backup']
    ],
    faqs: [
      ['Can support restore my wallet for me?', 'No trustworthy support path should need your seed phrase or private keys.'],
      ['Why does restore height matter?', 'For Monero wallets it helps scanning start near the wallet creation period, reducing sync time.']
    ]
  },
  {
    slug: 'cake-wallet-official-download-check',
    title: 'Cake Wallet Official Download Check: Avoid Fake Apps',
    description: 'Learn how to check Cake Wallet download sources, app-store publisher details, website links, update prompts, and phishing red flags before installing.',
    intent: 'cake wallet official download',
    directAnswer: 'Before installing Cake Wallet, verify the download path, publisher name, store listing, linked website, update prompt, and permission context. A safer install flow never asks for a recovery phrase on a website and does not pressure you through ads, chats, or urgent popups.',
    scene: 'The safest wallet install starts before the app opens: source, publisher, and prompt all need to make sense.',
    checks: ['Start from trusted Cake Wallet sources, not ads or copied links', 'Check publisher details and app-store listing history', 'Be suspicious of urgent update prompts and cloned landing pages', 'Never enter recovery words into an install page'],
    contextualLinks: [
      ['Use the login safety checklist after install', 'cake-wallet-login-safety'],
      ['Review the Monero setup checklist before receiving funds', 'monero-wallet-setup-checklist'],
      ['Spot fake support before asking for help', 'cake-wallet-support-scam-warning']
    ],
    sections: [
      {
        heading: 'Start with the source, not the button',
        body: 'A download button is not proof. Check whether the path came from a trusted Cake Wallet source, whether the domain or store listing looks consistent, and whether the page is trying to move you quickly into a seed phrase or recovery form. Wallet installs should be boring and verifiable.'
      },
      {
        heading: 'Check the publisher and update story',
        body: 'On app stores, look beyond the app name. Review the publisher, update cadence, support links, screenshots, and whether the listing history feels consistent. Fake listings often copy names and visuals while using rushed descriptions, strange support channels, or links that do not match the expected wallet ecosystem.'
      },
      {
        heading: 'Red flags before installation',
        body: 'Stop if a page asks for recovery words, offers to verify your wallet before install, promises certain asset recovery, or sends you into a chat for setup. Installing wallet software should not require a seed phrase, private key, wallet file, screenshot, or remote-control session.'
      }
    ],
    faqs: [
      ['Can a fake Cake Wallet app steal funds?', 'A fake or modified wallet can be dangerous because it may capture recovery material, misdirect transactions, or push users into phishing flows. Verify sources before installing.'],
      ['Should I trust a sponsored search result?', 'Treat ads as unverified leads, not final proof. Check the destination, publisher, and official source path before downloading or entering any wallet information.'],
      ['Does this page host a download?', 'No. This page is an independent safety checklist and does not host wallet software or collect wallet information.']
    ]
  },
  {
    slug: 'monero-restore-height-guide',
    title: 'Monero Restore Height Guide for Cake Wallet Users',
    description: 'Simple guide to Monero restore height in Cake Wallet: what it means, why syncing can take time, and how to avoid recovery scams.',
    intent: 'cake wallet restore height',
    directAnswer: 'Monero restore height is a starting point for scanning the blockchain during wallet recovery. In Cake Wallet-related restore flows, it can reduce sync time when set near the wallet creation period, but it never replaces the recovery phrase and no support account should ask you to reveal that phrase.',
    scene: 'Restore height is a scanning shortcut, not a secret and not a reason to hand your seed to anyone.',
    checks: ['Use an approximate wallet creation date or earlier block context', 'Expect syncing to take time before judging a missing balance', 'Do not paste seeds into restore-height tools or websites', 'Recheck app source and network status before seeking help'],
    contextualLinks: [
      ['Restore Cake Wallet safely from the broader checklist', 'restore-cake-wallet'],
      ['Protect the recovery phrase during any rescan', 'cake-wallet-seed-phrase-backup'],
      ['Avoid fake support while troubleshooting', 'cake-wallet-support-scam-warning']
    ],
    sections: [
      {
        heading: 'What restore height actually does',
        body: 'A Monero wallet scans the blockchain to find outputs that belong to it. Restore height tells the wallet where to begin that scan. If the starting point is far earlier than needed, syncing can take longer; if it is later than the wallet activity, older transactions can be missed until the wallet is rescanned from an earlier point.'
      },
      {
        heading: 'Why a restored wallet may look empty at first',
        body: 'A newly restored wallet can appear incomplete while scanning is still in progress, while network connectivity is unstable, or when restore height starts too late. Do not let that stressful moment push you into sharing a seed phrase with a stranger, bot, website, or remote helper.'
      },
      {
        heading: 'Safe restore-height behavior',
        body: 'Use conservative timing, keep recovery words offline, and prefer official app guidance over random forms. Restore height is ordinary metadata; the sensitive material is the recovery phrase and keys. No public page needs them to explain the concept.'
      }
    ],
    faqs: [
      ['Is restore height the same as my seed phrase?', 'No. Restore height is not a secret. The recovery phrase is the sensitive key material that must stay private and offline.'],
      ['What if I set restore height too late?', 'The wallet may miss earlier activity until rescanned from an earlier point. When unsure, choose a safer earlier context and expect a longer scan.'],
      ['Can a website calculate restore height from my seed?', 'Do not enter a seed phrase into a website. Restore-height guidance should not require recovery words, private keys, or wallet files.']
    ]
  },
  {
    slug: 'cake-wallet-support-scam-warning',
    title: 'Cake Wallet Support Scam Warning: Never Share Your Seed',
    description: 'How to recognize fake Cake Wallet support, seed phrase scams, Telegram and DM impersonators, and recovery-service claims before you lose funds.',
    intent: 'cake wallet support scam',
    directAnswer: 'Fake wallet support often appears during stressful moments: login confusion, missing balance, failed restore, or urgent update prompts. Realistic wallet safety means never sharing a recovery phrase, private key, wallet file, screen-share session, or transaction-signing approval with anyone claiming to fix Cake Wallet for you.',
    scene: 'The attacker wants urgency. Your best defense is slowing the support conversation down before secrets leave your device.',
    checks: ['Reject any request for seed phrases, private keys, or wallet files', 'Be careful with Telegram, Discord, email, and social-media impersonators', 'Avoid recovery services that promise certain fund return', 'Use official support paths and keep sensitive data out of chats'],
    contextualLinks: [
      ['Review restore safety before seeking help', 'restore-cake-wallet'],
      ['Check backup rules for seed phrases', 'cake-wallet-seed-phrase-backup'],
      ['Verify the install source before trusting prompts', 'cake-wallet-official-download-check']
    ],
    sections: [
      {
        heading: 'The common fake-support pattern',
        body: 'A user searches for help, sees a convincing account or support page, and is moved into a private chat. The scammer asks for a screenshot, seed phrase, wallet file, screen share, verification payment, or emergency recovery form. Each step is framed as normal support, but the real goal is account takeover or fund theft.'
      },
      {
        heading: 'Phrases that should stop the conversation',
        body: 'Be cautious when someone says they can restore funds for a fee, validate your wallet, synchronize your account manually, or unlock funds if you paste recovery words. Wallet support should not need your seed phrase or private keys. The person asking for them is the risk.'
      },
      {
        heading: 'Safer support behavior',
        body: 'Use public documentation and verified support paths, describe issues without revealing secrets, and keep recovery material offline. If a restore is not showing the expected balance, check sync status, restore height, network state, and app source before escalating.'
      }
    ],
    faqs: [
      ['Can support ask for my recovery phrase?', 'No. Treat any request for recovery words, private keys, or wallet files as a critical red flag.'],
      ['Are Telegram or social-media helpers safe?', 'They may be impersonators. Verify support paths independently and do not move sensitive wallet material into chats or screen shares.'],
      ['What should I share when asking for help?', 'Share non-sensitive context only, such as app version, device type, general sync status, and error wording. Never share seed phrases, private keys, wallet files, or screenshots that expose secrets.']
    ]
  },
  {
    slug: 'cake-wallet-seed-phrase-backup',
    title: 'Cake Wallet Seed Phrase Backup Safety',
    description: 'Seed phrase backup practices for Cake Wallet users: offline storage, duplicate checks, photo risks, and recovery rehearsal boundaries.',
    intent: 'cake wallet seed phrase backup',
    directAnswer: 'A Cake Wallet seed phrase should be backed up offline, checked for accuracy, stored away from cloud photos or notes apps, and never shared with any website, bot, ad, or person claiming to verify a wallet.',
    scene: 'The seed phrase is the vault key. The safest interface is usually paper, metal, and silence.',
    checks: ['Write the seed clearly and verify word order', 'Avoid photos, cloud notes, and chat messages', 'Store copies in separate safe places', 'Consider a recovery rehearsal without exposing funds'],
    contextualLinks: [
      ['Understand support scams before asking for help', 'cake-wallet-support-scam-warning'],
      ['Restore Cake Wallet without exposing secrets', 'restore-cake-wallet']
    ],
    faqs: [
      ['Can I store my seed phrase in a password manager?', 'Some users choose encrypted storage, but offline backups reduce cloud-account and malware exposure.'],
      ['Should I send my seed phrase to support?', 'No. Treat any request for a seed phrase as a critical red flag.']
    ]
  },
  {
    slug: 'monero-wallet-setup-checklist',
    title: 'Monero Wallet Setup Checklist for First-Time Users',
    description: 'A practical Monero wallet setup checklist: official sources, backup, restore height, small test transaction, and privacy-claim boundaries.',
    intent: 'monero wallet setup checklist',
    directAnswer: 'A safer Monero wallet setup starts with official downloads, a verified backup, basic restore-height awareness, a small test transaction, and realistic privacy expectations. No wallet can protect careless operational behavior by itself.',
    scene: 'Setup is not one click. It is a small sequence of trust decisions.',
    checks: ['Install from official sources', 'Back up before receiving meaningful funds', 'Record approximate wallet creation date', 'Run a small receive/send test first'],
    contextualLinks: [
      ['Check the official download source', 'cake-wallet-official-download-check'],
      ['Understand restore height before recovery', 'monero-restore-height-guide'],
      ['Review non-custodial responsibility', 'non-custodial-wallet-safety']
    ],
    faqs: [
      ['Is Monero private by default?', 'Monero has strong privacy design, but user behavior, endpoints, malware, and exchange flows still matter.'],
      ['Do I need restore height?', 'It is useful context for Monero wallet restoration and scan performance.']
    ]
  },
  {
    slug: 'cake-wallet-security-checklist',
    title: 'Cake Wallet Security Checklist: 12 Calm Checks',
    description: 'A compact Cake Wallet security checklist for phishing, seed phrase hygiene, device risk, updates, and transaction review.',
    intent: 'cake wallet security checklist',
    directAnswer: 'Cake Wallet security is mostly about boring habits: trusted installs, offline seed backups, careful restore flows, device hygiene, address checking, update awareness, and skepticism toward urgent support messages or ads.',
    scene: 'Security should feel boring. Drama is usually the attacker entering the room.',
    checks: ['Verify install source', 'Keep seed phrase offline', 'Review destination addresses', 'Ignore urgent DMs and sponsored recovery pages'],
    contextualLinks: [
      ['Verify Cake Wallet download sources', 'cake-wallet-official-download-check'],
      ['Spot fake support and recovery-service claims', 'cake-wallet-support-scam-warning'],
      ['Protect seed phrase backups', 'cake-wallet-seed-phrase-backup']
    ],
    faqs: [
      ['What is the biggest wallet safety mistake?', 'Entering a seed phrase into an untrusted website or sharing it with a person/bot.'],
      ['Are wallet updates important?', 'Yes, but verify update sources and avoid fake update prompts.']
    ]
  },
  {
    slug: 'non-custodial-wallet-safety',
    title: 'Non-Custodial Wallet Safety: What Users Actually Control',
    description: 'An easy explanation of non-custodial wallet safety: what the user controls, what the wallet software controls, and where risk still exists.',
    intent: 'non custodial wallet safety',
    directAnswer: 'A non-custodial wallet means the user controls the recovery phrase and keys. That increases control, but also means backup mistakes, phishing, malware, and rushed recovery decisions can permanently matter.',
    scene: 'Self-custody moves the key from an institution to you. That is power, not magic.',
    checks: ['Know who controls the seed phrase', 'Separate wallet software trust from device trust', 'Plan backup and inheritance basics', 'Treat privacy and custody as different topics'],
    contextualLinks: [
      ['Review seed phrase backup safety', 'cake-wallet-seed-phrase-backup'],
      ['Avoid fake support requests for private keys', 'cake-wallet-support-scam-warning'],
      ['Use the wider security checklist', 'cake-wallet-security-checklist']
    ],
    faqs: [
      ['Does non-custodial mean safer?', 'It can reduce custodial counterparty risk, but it increases personal responsibility.'],
      ['Is privacy the same as custody?', 'No. Custody is about who controls keys; privacy is about what information leaks through usage and infrastructure.']
    ]
  },
  {
    slug: 'cake-wallet-faq',
    title: 'Cake Wallet FAQ for Safety Searches',
    description: 'Short answers for Cake Wallet safety searches: login, restore, backup, seed phrase, Monero restore height, support scams, and non-affiliation disclosure.',
    intent: 'cake wallet faq',
    directAnswer: 'This FAQ gives short safety answers for Cake Wallet-related searches. It is independent, educational, and does not ask for seeds, keys, wallet files, screenshots, or personal wallet details.',
    scene: 'Fast answers for risky moments — but never a shortcut around seed safety.',
    checks: ['Use official sources', 'Never share recovery phrases', 'Understand restore-height basics', 'Keep expectations realistic'],
    contextualLinks: [
      ['Check official download-source signals', 'cake-wallet-official-download-check'],
      ['Read the restore-height guide', 'monero-restore-height-guide'],
      ['Review fake support warning signs', 'cake-wallet-support-scam-warning'],
      ['Understand privacy-limit boundaries', 'cake-wallet-privacy-limits']
    ],
    faqs: [
      ['Is this an official Cake Wallet page?', 'No. This is an independent educational resource and is not affiliated with Cake Wallet.'],
      ['Can this page check my wallet?', 'No. It does not collect wallet data, seed phrases, private keys, or screenshots.']
    ]
  },
  {
    slug: 'cake-wallet-privacy-limits',
    title: 'Cake Wallet Privacy Limits: What Monero Wallets Cannot Fix',
    description: 'A practical guide to Cake Wallet and Monero privacy limits: exchange trails, device risk, network exposure, address handling, and realistic self-custody expectations.',
    intent: 'cake wallet privacy limits',
    directAnswer: 'Cake Wallet can help users hold and transact with Monero, but no wallet can erase every privacy risk. Exchange records, device malware, network behavior, reused addresses, screenshots, cloud backups, support chats, and rushed operational habits can still expose sensitive context.',
    scene: 'Privacy is a workflow, not a button. The wallet matters, but the surrounding device, exchange, network, and user habits matter too.',
    checks: ['Separate wallet privacy from exchange account records', 'Keep recovery material out of photos, cloud notes, and chats', 'Avoid reusing screenshots or addresses in public support threads', 'Use small tests and clean-device checks before high-value activity'],
    contextualLinks: [
      ['Review non-custodial responsibility first', 'non-custodial-wallet-safety'],
      ['Use the security checklist before moving funds', 'cake-wallet-security-checklist'],
      ['Check fake-support warning signs', 'cake-wallet-support-scam-warning'],
      ['Verify download sources before install', 'cake-wallet-official-download-check']
    ],
    sections: [
      {
        heading: 'A wallet is only one layer of privacy',
        body: 'Monero is designed for stronger transaction privacy than many public-ledger assets, but user context can leak outside the chain. Exchange accounts, purchase receipts, browser history, device compromise, copied addresses, and screenshots can reveal information even when the wallet software itself behaves correctly.'
      },
      {
        heading: 'Exchange and payment trails still matter',
        body: 'If funds enter or leave through a regulated exchange, merchant, payment processor, or public account, those services may keep records. A wallet cannot rewrite that history. Treat exchange withdrawals and deposits as separate privacy decisions, and avoid assuming that a wallet install makes earlier records disappear.'
      },
      {
        heading: 'Device and support behavior can defeat good software',
        body: 'Malware, clipboard replacement, fake support chats, remote-control sessions, cloud seed backups, and copied recovery screenshots are practical risks. Keep the device clean, verify update sources, do not share recovery material, and never let a support account turn troubleshooting into a seed-phrase handoff.'
      },
      {
        heading: 'Use realistic privacy language',
        body: 'Safe self-custody content should not promise absolute anonymity or certain fund return. Better wording is operational: verify sources, protect secrets, understand exchange exposure, test small, and document the process that worked without recording sensitive wallet material.'
      }
    ],
    faqs: [
      ['Does Cake Wallet guarantee anonymity?', 'No wallet should be treated as a guarantee of anonymity. Privacy depends on wallet software, device security, exchange behavior, network habits, and user mistakes.'],
      ['Can an exchange withdrawal still create a record?', 'Yes. Exchanges and payment services may keep account, withdrawal, deposit, or compliance records. Wallet software does not erase those records.'],
      ['What is the safest first privacy habit?', 'Do not expose the recovery phrase. Then verify source paths, avoid public troubleshooting with sensitive screenshots, and use small tests before moving meaningful funds.']
    ]
  }
];

export const homepageFaq = [
  ['What is this site?', 'This is an independent educational hub for Cake Wallet-related safety questions. It helps users slow down before downloads, restore flows, backup decisions, and support claims.'],
  ['Is this official support?', 'No. This site is not affiliated with Cake Wallet. Verify support, downloads, and documentation from trusted Cake Wallet sources.'],
  ['Does this site collect wallet data?', 'No. It is static educational content. Never enter seed phrases, keys, wallet files, or screenshots into random websites.']
];
