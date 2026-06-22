export const editorial = {
  name: 'XMR Wallet Safety Editorial Desk',
  reviewer: 'Independent wallet-safety editor',
  lastReviewed: '2026-06-22',
  policy: 'Every guide is written as safety education, checked for non-affiliation disclosure, seed-phrase boundaries, realistic privacy language, and visible source paths. We do not provide financial advice, official support, wallet recovery services, or live status claims.'
};

export const coreSources = [
  ['Cake Wallet website', 'https://cakewallet.com/', 'Use the public website as the first place to verify product, download, documentation, and support paths.'],
  ['Cake Wallet documentation', 'https://docs.cakewallet.com/', 'Use public documentation to understand wallet behavior without exposing recovery material.'],
  ['Monero project', 'https://www.getmonero.org/', 'Use the Monero project site for protocol-level context, especially privacy and wallet terminology.'],
  ['Google helpful content guidance', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', 'This site is maintained as people-first safety content, not as a thin affiliate doorway.'],
  ['Google spam policies', 'https://developers.google.com/search/docs/essentials/spam-policies', 'The site is checked against doorway abuse, thin affiliation, scaled-content abuse, cloaking, hidden text, and misleading affiliate-link patterns.']
];

const commonStopSignals = [
  'A page asks for recovery words, private keys, wallet files, screenshots, or remote-control access.',
  'A helper moves the conversation into urgency, secrecy, or a private chat before you can verify the source path.',
  'A download, login, restore, or support flow promises certainty instead of explaining limits and safe next steps.'
];

export const pageDepth = {
  'cake-wallet-login-safety': {
    summary: ['Web login confusion is a high-risk phishing moment.', 'Cake Wallet safety starts with source verification, not with typing secrets into a page.', 'The safest answer to an unexpected seed request is to stop.'],
    sections: [
      { heading: 'Why login searches are risky', body: 'Wallet users often search for login help when they are stressed or switching devices. That creates space for copied landing pages, ads, and fake help desks to look useful. A legitimate safety flow should help you verify the source before it asks you to do anything sensitive.' },
      { heading: 'What a safer navigation path looks like', body: 'Use a known official source path, confirm the app publisher or website, and avoid treating a search ad as proof. If you need the wallet app, verify the listing and support links independently before restoring or moving funds.' },
      { heading: 'Seed phrase boundary', body: 'A recovery phrase is not a login password. If a page calls itself a Cake Wallet login and asks for recovery words, treat it as a stop condition. Recovery words belong offline and inside trusted wallet software only.' },
      { heading: 'What to do after a suspicious result', body: 'Close the page, do not reuse any pasted information, check your device and browser history, and return through a verified source path. If you entered recovery words into an untrusted page, treat the wallet as compromised and move carefully from a clean environment.' }
    ],
    sourceTrail: ['Cake Wallet website', 'Cake Wallet documentation', 'Google helpful content guidance']
  },
  'restore-cake-wallet': {
    summary: ['Restore should happen inside verified wallet software.', 'Restore height can affect Monero scanning but is not secret.', 'Support should never need your seed phrase.'],
    sections: [
      { heading: 'Restore is a local recovery process', body: 'A safer restore flow happens in trusted wallet software on a device you control. It should not require a website form, support chat, screen share, or stranger-operated recovery service.' },
      { heading: 'Prepare before you type recovery words', body: 'Check the install source, device condition, app version, and network context before entering a phrase. This reduces the chance that a fake app, clipboard attack, or rushed troubleshooting flow captures sensitive material.' },
      { heading: 'Understand sync before assuming funds are gone', body: 'Monero wallets may need time to scan. A late restore height, unstable network, or incomplete sync can make a wallet look incomplete. That stressful moment is exactly when fake support can become persuasive.' },
      { heading: 'Escalate without exposing secrets', body: 'If you need help, describe non-sensitive context such as app version, operating system, approximate restore date, and visible error wording. Do not provide recovery words, private keys, wallet files, screenshots of secrets, or remote-control access.' }
    ],
    sourceTrail: ['Cake Wallet documentation', 'Monero project', 'Cake Wallet website']
  },
  'cake-wallet-official-download-check': {
    summary: ['The safest install starts before the app opens.', 'Ads and copied links are leads, not proof.', 'A download page should never need a seed phrase.'],
    sections: [
      { heading: 'Start with the source, not the button', body: 'A download button is not proof. Check whether the path came from a trusted Cake Wallet source, whether the domain or store listing looks consistent, and whether the page is trying to move you quickly into a seed phrase or recovery form. Wallet installs should be boring and verifiable.' },
      { heading: 'Check the publisher and update story', body: 'On app stores, look beyond the app name. Review the publisher, update cadence, support links, screenshots, and whether the listing history feels consistent. Fake listings often copy names and visuals while using rushed descriptions, strange support channels, or links that do not match the expected wallet ecosystem.' },
      { heading: 'Red flags before installation', body: 'Stop if a page asks for recovery words, offers to verify your wallet before install, promises certain asset recovery, or sends you into a chat for setup. Installing wallet software should not require a seed phrase, private key, wallet file, screenshot, or remote-control session.' },
      { heading: 'After installation', body: 'Before receiving meaningful funds, confirm you can open the app from the expected source, back up the recovery phrase offline, and run a small test flow. The goal is to prove the path slowly before the wallet holds value.' }
    ],
    sourceTrail: ['Cake Wallet website', 'Cake Wallet documentation', 'Google helpful content guidance']
  },
  'monero-restore-height-guide': {
    summary: ['Restore height is scanning context, not a password.', 'Choosing too late can hide older activity until rescan.', 'No website needs a seed to explain restore height.'],
    sections: [
      { heading: 'What restore height actually does', body: 'A Monero wallet scans the blockchain to find outputs that belong to it. Restore height tells the wallet where to begin that scan. If the starting point is far earlier than needed, syncing can take longer; if it is later than the wallet activity, older transactions can be missed until the wallet is rescanned from an earlier point.' },
      { heading: 'Why a restored wallet may look empty at first', body: 'A newly restored wallet can appear incomplete while scanning is still in progress, while network connectivity is unstable, or when restore height starts too late. Do not let that stressful moment push you into sharing a seed phrase with a stranger, bot, website, or remote helper.' },
      { heading: 'Safe restore-height behavior', body: 'Use conservative timing, keep recovery words offline, and prefer official app guidance over random forms. Restore height is ordinary metadata; the sensitive material is the recovery phrase and keys. No public page needs them to explain the concept.' },
      { heading: 'Practical troubleshooting order', body: 'First verify the app source, then check sync progress, then review restore-height context, then seek non-sensitive help if needed. Do not jump directly from an empty-looking wallet into a private support chat.' }
    ],
    sourceTrail: ['Monero project', 'Cake Wallet documentation']
  },
  'cake-wallet-support-scam-warning': {
    summary: ['Fake support works by creating urgency.', 'Recovery services and private chats are common danger zones.', 'Real troubleshooting can happen without seed words.'],
    sections: [
      { heading: 'The common fake-support pattern', body: 'A user searches for help, sees a convincing account or support page, and is moved into a private chat. The scammer asks for a screenshot, seed phrase, wallet file, screen share, verification payment, or emergency recovery form. Each step is framed as normal support, but the real goal is account takeover or fund theft.' },
      { heading: 'Phrases that should stop the conversation', body: 'Be cautious when someone says they can restore funds for a fee, validate your wallet, synchronize your account manually, or unlock funds if you paste recovery words. Wallet support should not need your seed phrase or private keys. The person asking for them is the risk.' },
      { heading: 'Safer support behavior', body: 'Use public documentation and verified support paths, describe issues without revealing secrets, and keep recovery material offline. If a restore is not showing the expected balance, check sync status, restore height, network state, and app source before escalating.' },
      { heading: 'If you already shared sensitive material', body: 'Assume the exposed wallet may be compromised. Work from a clean device, avoid further chats with the requester, and use verified information to decide whether funds need to be moved. Do not pay recovery-service fees to the same channel that asked for secrets.' }
    ],
    sourceTrail: ['Cake Wallet website', 'Cake Wallet documentation', 'Google helpful content guidance']
  },
  'cake-wallet-seed-phrase-backup': {
    summary: ['The seed phrase is the wallet’s critical recovery material.', 'Photos, cloud notes, and chats create avoidable exposure.', 'Backups should be checked without being broadcast.'],
    sections: [
      { heading: 'What the backup must protect against', body: 'A seed phrase backup has to survive device loss without becoming easy for someone else to copy. That means accuracy, physical safety, separation from cloud accounts, and a process that avoids cameras, chats, and shared documents.' },
      { heading: 'Why screenshots and notes are dangerous', body: 'Photos and cloud notes can sync to other devices, backups, browser sessions, or compromised accounts. A wallet backup that is convenient for you can become convenient for an attacker if it leaves the offline environment.' },
      { heading: 'Check accuracy without exposing the phrase', body: 'Verify spelling and word order carefully. If you rehearse recovery, do it in trusted wallet software and avoid using a page, bot, or helper that asks you to paste the phrase for validation.' },
      { heading: 'Storage planning', body: 'Consider where the backup lives, who could access it, and what happens if you lose the device. Separate copies can reduce single-location failure, but every extra copy also needs protection.' }
    ],
    sourceTrail: ['Cake Wallet documentation', 'Monero project']
  },
  'monero-wallet-setup-checklist': {
    summary: ['Setup is a sequence of trust decisions.', 'Privacy expectations need to be realistic.', 'Small tests reduce irreversible mistakes.'],
    sections: [
      { heading: 'Install source before wallet creation', body: 'The setup process begins before the wallet exists. Verify the download source, publisher, and update path first so that the recovery phrase is generated inside trusted software rather than a copied interface.' },
      { heading: 'Backup before meaningful funds arrive', body: 'Do not wait until a problem to think about the recovery phrase. Record it accurately, store it offline, and avoid cloud photos or notes before receiving funds that would be painful to lose.' },
      { heading: 'Restore-height context for Monero', body: 'Monero wallet setup should include basic awareness of when the wallet was created. That context can help future restores scan efficiently, but it should be recorded without exposing seed words or private keys.' },
      { heading: 'Run a small proof path', body: 'Before using the wallet for meaningful activity, test receiving and sending a small amount. Verify address handling, sync behavior, and your own process while the stakes are low.' }
    ],
    sourceTrail: ['Cake Wallet documentation', 'Monero project']
  },
  'cake-wallet-security-checklist': {
    summary: ['Security is mostly boring repetition.', 'Urgency is a risk signal.', 'The checklist should be used before install, restore, support, and send events.'],
    sections: [
      { heading: 'The 12-check mindset', body: 'A checklist works because it slows down obvious mistakes. Verify source, app version, device state, backup location, address handling, support channel, restore context, privacy assumptions, update prompts, clipboard behavior, screenshot habits, and small-test flow.' },
      { heading: 'Device risk is wallet risk', body: 'A wallet can only do so much if the device is compromised. Malware, fake keyboards, clipboard replacement, remote-control tools, and malicious browser extensions can turn a correct wallet flow into an unsafe one.' },
      { heading: 'Support and update prompts', body: 'Treat urgent update warnings, recovery promises, and private support links as untrusted until verified. The more emotional the prompt, the more useful a slow checklist becomes.' },
      { heading: 'Make the checklist repeatable', body: 'Use the same order every time: source, device, recovery boundary, destination check, small test. Repetition is not glamorous, but it prevents one-off panic decisions.' }
    ],
    sourceTrail: ['Cake Wallet website', 'Cake Wallet documentation', 'Google helpful content guidance']
  },
  'non-custodial-wallet-safety': {
    summary: ['Self-custody gives control and responsibility.', 'Custody and privacy are separate topics.', 'Backup mistakes can permanently matter.'],
    sections: [
      { heading: 'What non-custodial actually means', body: 'A non-custodial wallet means the service is not holding the recovery phrase for you. That reduces one class of counterparty risk, but it also means there may be no support desk that can reverse a seed leak, lost backup, or mistaken transaction.' },
      { heading: 'What the user controls', body: 'The user controls backup safety, device hygiene, source verification, transaction review, and how much sensitive context appears in screenshots, chats, cloud storage, and exchange accounts.' },
      { heading: 'What wallet software does not solve', body: 'Wallet software cannot make a compromised device safe, erase exchange records, prevent a user from sharing a seed phrase, or guarantee privacy after screenshots and public support posts expose context.' },
      { heading: 'Safer mental model', body: 'Think of the wallet as one part of a system: source, device, backup, network, exchange, support behavior, and user process. Good self-custody is the whole system working together.' }
    ],
    sourceTrail: ['Monero project', 'Cake Wallet documentation']
  },
  'cake-wallet-faq': {
    summary: ['Short answers should still preserve safety boundaries.', 'This FAQ is not official support.', 'No answer requires wallet secrets.'],
    sections: [
      { heading: 'How to use this FAQ', body: 'Use the FAQ as a quick safety triage tool. If the question involves installing, restoring, contacting support, or privacy assumptions, slow down and open the detailed guide before acting.' },
      { heading: 'What the FAQ will not do', body: 'It will not check a wallet, validate a seed phrase, recover funds, host wallet software, or claim official support. Those limits are deliberate because support impersonation and seed capture are common wallet-safety risks.' },
      { heading: 'Best first step for most questions', body: 'Return to the verified source path, keep recovery material offline, and choose the guide that matches the moment: login, download, restore, support, backup, setup, privacy, or non-custodial responsibility.' },
      { heading: 'Why short answers are not enough', body: 'A one-line answer can prevent a bad click, but wallet safety often needs context. Use the linked manual entries when the decision involves funds, recovery words, device trust, or exchange records.' }
    ],
    sourceTrail: ['Cake Wallet website', 'Cake Wallet documentation', 'Google helpful content guidance']
  },
  'cake-wallet-privacy-limits': {
    summary: ['Privacy is a workflow, not a switch.', 'A wallet cannot erase exchange records or device leaks.', 'Monero privacy claims should stay realistic and operational.'],
    sections: [
      { heading: 'A wallet is only one layer of privacy', body: 'Monero is designed for stronger transaction privacy than many public-ledger assets, but user context can leak outside the chain. Exchange accounts, purchase receipts, browser history, device compromise, copied addresses, and screenshots can reveal information even when the wallet software itself behaves correctly.' },
      { heading: 'Exchange and payment trails still matter', body: 'If funds enter or leave through a regulated exchange, merchant, payment processor, or public account, those services may keep records. A wallet cannot rewrite that history. Treat exchange withdrawals and deposits as separate privacy decisions, and avoid assuming that a wallet install makes earlier records disappear.' },
      { heading: 'Device and support behavior can defeat good software', body: 'Malware, clipboard replacement, fake support chats, remote-control sessions, cloud seed backups, and copied recovery screenshots are practical risks. Keep the device clean, verify update sources, do not share recovery material, and never let a support account turn troubleshooting into a seed-phrase handoff.' },
      { heading: 'Use realistic privacy language', body: 'Safe self-custody content should not promise absolute anonymity or certain fund return. Better wording is operational: verify sources, protect secrets, understand exchange exposure, test small, and document the process that worked without recording sensitive wallet material.' }
    ],
    sourceTrail: ['Monero project', 'Cake Wallet documentation', 'Google helpful content guidance']
  }
};

export function sourcesFor(page) {
  const names = pageDepth[page.slug]?.sourceTrail || ['Cake Wallet website', 'Cake Wallet documentation', 'Google helpful content guidance'];
  return coreSources.filter(([name]) => names.includes(name));
}

export function stopSignalsFor() {
  return commonStopSignals;
}
