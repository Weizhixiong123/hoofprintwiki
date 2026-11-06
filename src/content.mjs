export const sources = {
  steam: { title: 'Official Steam store', url: 'https://store.steampowered.com/app/3727090/Horses_of_Hoofprint_Bay/?l=english' },
  launch: { title: 'Publisher’s launch article & developer Q&A', url: 'https://www.themanequest.com/blog/2026/11/4/game-release-amp-developer-qampa-horses-of-hoofprint-bay-is-out-now-insights-from-anna-glinsmann-and-theresa-thoma' },
  studio: { title: 'Thogli Studios', url: 'https://thoglistudios.com/' }
};
export const categories = [
  { id: 'getting-started', title: 'Getting started', icon: 'book', description: 'Your first horse, your first day, and what comes next.' },
  { id: 'horses', title: 'Horses & care', icon: 'horse', description: 'Get to know the horses at the heart of your yard.' },
  { id: 'breeding', title: 'Breeding', icon: 'leaf', description: 'Pairing horses and welcoming the next generation.' },
  { id: 'training', title: 'Training', icon: 'flag', description: 'Build strength and confidence, one session at a time.' },
  { id: 'competitions', title: 'Competitions', icon: 'trophy', description: 'From the training arena to the competition course.' },
  { id: 'buildings', title: 'Buildings & staff', icon: 'home', description: 'Make room for your horses and grow your stable.' }
];
export const articles = [
  {
    path: '/guides/beginners-guide/', title: 'Beginner guide', category: 'getting-started', icon: 'book', image: 0,
    description: 'Understand the care, training, and competition loop before expanding your yard.',
    answer: 'Horses of Hoofprint Bay starts with a small, run-down yard and a mare. Caring for your horse, building her abilities, and entering competitions form the foundation for growing your stable.',
    sections: [
      ['Start with your horse', 'Spend time learning the care screen before planning a larger herd. Grooming and hoof care are part of the game’s health system, so they deserve attention alongside training. The in-game library is a useful companion when a term or care activity is unfamiliar.'],
      ['Choose an early goal', 'A manageable first goal is to learn one complete care and training routine with your starting horse. This is an editorial suggestion, rather than a mandatory quest sequence. Read the current in-game goals and their requirements before spending money toward them.'],
      ['Understand the progression loop', 'Training develops abilities used in competitions. Competition winnings can contribute to the next stage of your yard. As your stable grows, buildings and staff become part of managing the extra workload. Compare your next purchase with the needs of the horses you already own.'],
      ['Expand with a plan', 'Before acquiring another horse, inspect your current space, available funds, and care workload. Exact purchase prices and building requirements are not documented here yet. Use the figures shown by your own game rather than assuming a screenshot reflects the current release.']
    ],
    faq: [['Is this a racing game?', 'The official description focuses on stable management, horse care, show jumping, cross country, and trail riding.'], ['Can I try it first?', 'The Steam store lists a free demo. The publisher describes its progression limit as 25 in-game days.'], ['Is this guide a tested walkthrough?', 'No. This is an introduction based on official information, with planning suggestions clearly separated from verified game mechanics.']],
    unknown: 'Exact tutorial order, early purchase costs, and optimal opening-day actions need release-version playtesting.', references: ['steam', 'launch']
  },
  {
    path: '/guides/buy-sell-horses/', title: 'Buying & selling horses', category: 'horses', icon: 'horse', image: 0,
    description: 'Where horse trading fits into the town and what to check before expanding.',
    answer: 'The publisher confirms that you can buy and sell horses in the town of Hoofprint Bay. The precise shop navigation, prices, and transaction restrictions still need release-version verification.',
    sections: [['Head to town', 'The town is a hub for horse trading as well as tack, feed, and competitions. Look for the horse sales location in your game’s town screen. The launch article includes a screenshot of the horse sales interface, but does not document a complete sequence of buttons.'], ['Before buying', 'As a planning checklist, review the horse information displayed by the game, check your balance, and inspect your yard’s available space. These checks help you decide whether a purchase fits your goals; they do not establish a verified list of purchase restrictions.'], ['Before selling', 'Consider whether the horse is part of your competition or breeding plans before confirming a sale. This wiki has not verified whether sold horses can be bought back. Do not assume that a transaction is reversible.']],
    faq: [['Where are horses traded?', 'In town, according to the publisher’s launch article.'], ['How much does a horse cost?', 'A reliable price table has not been verified for this wiki. Check the current offer in your game.'], ['Is a second horse required immediately?', 'This wiki has not verified a mandatory early purchase sequence. Follow the goals shown in your game.']],
    unknown: 'Shop labels, horse availability, sale values, refresh behavior, and capacity checks remain unverified.', references: ['launch', 'steam']
  },
  {
    path: '/guides/horse-care/', title: 'Horse care guide', category: 'horses', icon: 'heart', image: 0,
    description: 'Grooming, hoof care, and the role of injuries in everyday stable life.',
    answer: 'Horse care includes brushing, combing, hoof picking, and treating injuries. The official store connects grooming and hoof care with preventing problems such as saddle sores and abscesses.',
    sections: [['Read the care screen', 'Inspect your horse’s condition and the available care tools. Official screenshots show a dedicated horse care view with access to feeding, grooming, tack, and medical options. Store screenshots can show an earlier build, so labels may differ in your copy.'], ['Grooming and hooves', 'Brushing and using the hoof pick are functional parts of caring for a horse. Learn what each tool does in the game and use the in-game guidance when a problem appears. This wiki does not claim a fixed number of brush strokes or a proven daily tool order.'], ['Injuries and recovery', 'Scrapes and other injuries can require treatment. Read the game’s medical information for the affected horse before deciding what to do next. Exact treatment items, recovery times, and hidden injury chances have not been verified.'], ['Keep the herd manageable', 'As an editorial recommendation, make sure you can keep up with care before growing the herd. Staff can help with a larger yard, but their precise task coverage should be checked in your game.']],
    faq: [['Does grooming affect gameplay?', 'Yes. The store explicitly connects care tools with avoiding certain health problems.'], ['What is the correct treatment for every injury?', 'A complete, verified treatment table is not available here yet. Consult the in-game medical information.'], ['Can staff help with care?', 'The official store confirms that staff assist with care and training, without publishing a complete task table.']],
    unknown: 'Care thresholds, injury probabilities, treatment costs, and recovery durations need in-game verification.', references: ['steam']
  },
  {
    path: '/guides/breeding/', title: 'Breeding guide', category: 'breeding', icon: 'leaf', image: 5,
    description: 'What foals can inherit, choosing a pairing, and the breeding lab.',
    answer: 'Foals can inherit a combination of their parents’ coloring, white patterns, and personality traits. The official description also identifies a later breeding station lab that can preview possible foals.',
    sections: [['Decide what you want from a pairing', 'You may be interested in a foal’s appearance, future abilities, or personality. Compare the information the game provides about each parent before committing. This is a planning approach, not a claim that a particular pairing guarantees a specific result.'], ['Understand inheritance', 'Official information confirms inheritance across coloring, white patterns, and personality. It does not publish a complete genetics model. Real-world coat genetics can provide context, but should not be used to calculate game outcomes without testing the actual implementation.'], ['The breeding station lab', 'The store describes an advanced breeding station lab with possible-foal previews and expanded stud services. Check the upgrade information in your current game for its exact unlock conditions and cost. A preview should not be interpreted as a published probability formula.'], ['Keep a useful breeding record', 'For your own comparisons, note the parents, visible traits, game version, and foal outcome. Repeated observations are more informative than a single attractive foal, but even a small set of outcomes cannot establish an exact inheritance percentage.']],
    faq: [['Are foal colors inherited?', 'The official store confirms a mix of parental coloring and white patterns.'], ['Can personality be inherited?', 'Yes, personality traits are included in the official inheritance description.'], ['Is a particular coat guaranteed?', 'This wiki has no verified guarantee or probability table for specific pairings.']],
    unknown: 'Breeding costs, eligibility, pregnancy duration, guaranteed outcomes, and inheritance probabilities remain unverified.', references: ['steam']
  },
  {
    path: '/guides/training/', title: 'Training guide', category: 'training', icon: 'flag', image: 4,
    description: 'How training relates to strength, confidence, and competition readiness.',
    answer: 'Training exercises develop your horse’s strength and confidence toward competition readiness. The publisher also identifies desensitization training among the features added before launch.',
    sections: [['Train toward a goal', 'Choose a competition or in-game goal, then read its stated requirements. Planning backward from that requirement is more useful than assuming every available exercise develops the same ability. Exact gains by exercise are not verified here.'], ['Confidence and desensitization', 'Confidence is part of the official training description, and desensitization is a confirmed training feature. A complete mapping between exercises, behavior changes, and numerical gains requires playtesting.'], ['New courses and upgrades', 'Advanced building stages can unlock training courses. If a course is unavailable, inspect your building’s current upgrade panel for the requirements shown in your version.']],
    faq: [['What does training develop?', 'The official store names strength and confidence.'], ['Is desensitization included?', 'Yes, the publisher identifies it in the launch article.'], ['What is the fastest training schedule?', 'No optimal schedule has been tested for this wiki.']],
    unknown: 'Per-session gains, limits, fatigue behavior, and the best schedule need in-game testing.', references: ['steam', 'launch']
  },
  {
    path: '/guides/competitions/', title: 'Competition guide', category: 'competitions', icon: 'trophy', image: 1,
    description: 'An introduction to show jumping, cross country, and preparing to enter.',
    answer: 'Horses of Hoofprint Bay includes show jumping and cross-country competitions with prize money. Training is part of preparing your horse to qualify.',
    sections: [['Show jumping and cross country', 'Both disciplines are confirmed by the official store and the publisher. They provide goals for developing a horse, but this wiki does not yet provide a complete list of classes or course layouts.'], ['Before entering', 'Read the entry screen, compare its requirements with your horse, and review any displayed costs. This is a suggested preparation checklist. Entry thresholds, penalties, and reward schedules must be documented from the released game.'], ['Use winnings thoughtfully', 'Competition prizes support the stable-building loop. Decide whether your next spending priority is the current horse’s needs or expanding the yard. This is general planning advice, not a tested profit-maximizing strategy.']],
    faq: [['What competitions are available?', 'Official sources name show jumping and cross country.'], ['Can competitions earn money?', 'Yes, prize money is explicitly part of the game description.'], ['Where are exact rewards listed?', 'Use the current in-game competition information; this wiki has not verified a reward table.']],
    unknown: 'Classes, eligibility, entry fees, scoring formulas, and prize tables remain unverified.', references: ['steam', 'launch']
  },
  {
    path: '/buildings/', title: 'Buildings & upgrades', category: 'buildings', icon: 'home', image: 2,
    description: 'More horse space, new training courses, and a growing stable.',
    answer: 'Building upgrades help accommodate more horses and can unlock training courses, staff applications, and advanced breeding facilities.',
    sections: [['Space and horse needs', 'The official description ties upgrades to more room and better meeting horse needs. Inspect the in-game building panel before buying more horses; a screenshot’s capacity is not a reliable universal limit.'], ['Unlocks beyond capacity', 'Some later building stages unlock courses and staff applications. The breeding station lab adds possible-foal previews and expanded stud services. Exact stage names and prerequisites have not been compiled here.'], ['Plan your next upgrade', 'Compare the upgrade’s stated benefit with your immediate goal. If your focus is a larger herd, space and workload matter; if it is training, a course unlock may be more relevant. These are decision criteria, not a prescribed upgrade order.']],
    faq: [['Do upgrades add horse space?', 'Yes, expanding space is a confirmed purpose of upgrades.'], ['Do upgrades unlock staff?', 'The official store says advanced building stages unlock staff applications.'], ['What is the best upgrade order?', 'No complete cost or unlock table has been verified, so this wiki does not prescribe an optimal order.']],
    unknown: 'Building names, stage-by-stage costs, capacity, and unlock requirements need release-version verification.', references: ['steam']
  },
  {
    path: '/horses/colors-and-patterns/', title: 'Horse colors & patterns', category: 'horses', icon: 'palette', image: 5,
    description: 'Coloring, white markings, and what is known about coat variation.',
    answer: 'The game supports coat variation and white patterns that can be passed to foals. The developers describe a shader-based approach to creating pattern variation.',
    sections: [['Color and pattern are related topics', 'When comparing horses, record the visible base coloring separately from white patterning. The official description mentions both, but it does not provide a complete named coat catalog.'], ['Variation is part of the design', 'In the launch interview, the programmer explains how observing real horse patterns informed the pattern system. This supports describing the art as horse-informed, but does not establish a one-to-one simulation of real genetics.'], ['A catalog needs evidence', 'A useful reference needs an in-game name, a clear image, and the version in which it was observed. Until those records are collected, this page intentionally avoids presenting an invented complete list of coats.']],
    faq: [['Can foals inherit white patterns?', 'Yes, this is part of the official breeding description.'], ['Is the system scientifically exact?', 'The developer does not claim scientific accuracy in every detail.'], ['Is this a complete coat catalog?', 'No. This is an overview; a verified illustrated catalog remains to be researched.']],
    unknown: 'The full named coat list, pattern parameters, and inheritance probabilities are not verified.', references: ['steam', 'launch']
  },
  {
    path: '/horses/personality-traits/', title: 'Personality traits', category: 'horses', icon: 'heart', image: 0,
    description: 'An introduction to horse personality and its role in inheritance.',
    answer: 'Horse personality traits are a confirmed feature, and the official breeding description says foals can inherit them from their parents.',
    sections: [['A confirmed part of the horse system', 'The launch article identifies personality traits among the additions made after the initial demo. The store also includes them in its description of foal inheritance.'], ['Compare observations carefully', 'When noting a horse’s behavior, distinguish the displayed trait from a temporary condition or an assumption about temperament. A visible reaction by itself is not enough to prove the numerical effect of a trait.'], ['Breeding and personality', 'Personality can be one consideration when planning a pair. The sources do not explain the exact selection rules or the likelihood of each outcome, so a pairing should not be treated as a guaranteed route to a particular temperament.']],
    faq: [['Are personality traits in the full game?', 'Yes, the publisher confirms them.'], ['Can foals inherit traits?', 'Yes, inheritance is described on the official store.'], ['What does every trait do?', 'A complete list of trait names and measured effects is not yet available here.']],
    unknown: 'Trait names, effect values, compatibility rules, and inheritance chances need in-game verification.', references: ['steam', 'launch']
  },
  {
    path: '/guides/staff/', title: 'Staff guide', category: 'buildings', icon: 'users', image: 6,
    description: 'Hiring help for a larger herd and understanding staff unlocks.',
    answer: 'You can hire staff to help with care and training. Advanced building stages can unlock staff applications, according to the official store description.',
    sections: [['Help for a growing yard', 'The staff system supports managing more horses as your yard expands. Before hiring, check the job description displayed by the game rather than assuming every employee handles every task.'], ['Applications and buildings', 'Building progression is connected to staff applications. If you cannot see a hiring option, inspect the upgrade descriptions in your current game. This wiki has not verified the precise unlock stage.'], ['Compare cost with your needs', 'A useful planning question is which recurring task you need help with. Read any displayed pay and assignment details before hiring. No wage table or efficiency ranking has been tested for this wiki.']],
    faq: [['Can staff train horses?', 'The official store describes staff helping with both care and training.'], ['How are applications unlocked?', 'Advanced building stages are identified as an unlock source.'], ['Which employee is best?', 'This wiki has not verified named staff, wages, or comparative performance.']],
    unknown: 'Staff roles, wages, assignment rules, availability, and efficiency remain unverified.', references: ['steam']
  },
  {
    path: '/guides/demo-vs-full-game/', title: 'Demo vs full game', category: 'getting-started', icon: 'book', image: 3,
    description: 'The confirmed day limit, release status, and how to read older screenshots.',
    answer: 'The publisher states that the demo is limited to the first 25 in-game days, while the full release allows play beyond that limit. The game launched as a complete product rather than Early Access.',
    sections: [['The confirmed progression difference', 'The launch article contrasts the demo’s first 25 in-game days with unlimited days in the full game. This describes the play limit; it does not mean every activity is immediately unlocked in a new full-game save.'], ['Demo information can become outdated', 'The demo changed before launch, and official screenshots can contain demo labels. Check the date and build before applying an older guide to the current release. This wiki does not claim every demo build contains the same features.'], ['Release and future plans', 'The publisher describes the launch as a finished game, with feedback and bugs to be monitored. Major content additions were not promised at launch. That is a statement of the launch plan, rather than a guarantee that no future update will ever occur.']],
    faq: [['How long is the demo?', 'The publisher describes a limit of 25 in-game days.'], ['Is the full game Early Access?', 'The publisher says it launched as a complete product without the Early Access label.'], ['Does a demo save carry over?', 'Save transfer has not been verified for this wiki. Check the latest official guidance before relying on it.']],
    unknown: 'Save transfer, current demo feature parity, and build-specific restrictions need separate verification.', references: ['launch', 'steam']
  }
];
