/**
 * IN THE VERSE - STAR WARS VS STAR TREK
 * The definitive answer to the age-old debate
 */

// ═══════════════════════════════════════════════════════════════
// CONTENT DATA
// ═══════════════════════════════════════════════════════════════

const CONTENT = {
  starwars: {
    title: [
      'DEBATE SETTLED',
      'STAR WARS WINS',
      'IT\'S NOT EVEN CLOSE'
    ],
    heroImage: 'starwars-evidence.webp',
    heroImageAlt: 'Irrefutable proof that Star Wars dominates',
    captionText: 'OFFICIAL GALACTIC COMBAT SIMULATION RESULTS',
    introText: `After decades of rigorous scientific analysis, countless simulations, and extensive research conducted by totally impartial scientists (who definitely don't own any lightsabers), we can definitively conclude that Star Wars would absolutely dominate Star Trek in any combat scenario. The evidence is overwhelming, the math checks out, and anyone who disagrees clearly hasn't been paying attention to the FACTS.`,
    stats: [
      { value: '∞', label: 'LIGHTSABERS' },
      { value: '100%', label: 'FORCE POWERS' },
      { value: 'UNLIMITED', label: 'POWER' }
    ],
    methodologyText: `Our groundbreaking research methodology involved watching all Star Wars content while completely ignoring Star Trek's technological advantages, analyzing space battles while focusing exclusively on how cool X-Wings look, and conducting comprehensive "which one looks more badass" tests. We also consulted with leading experts (my Star Wars fan club) and performed rigorous peer review (we all agreed with each other).`,
    methodologySteps: [
      { number: '1', text: 'Watch Star Wars on repeat' },
      { number: '2', text: 'Ignore all Star Trek evidence' },
      { number: '3', text: 'Declare obvious victory' }
    ],
    testimonials: [
      {
        text: 'I tried to argue for Star Trek, but then someone ignited a lightsaber and I immediately conceded defeat. You can\'t argue with that level of coolness.',
        author: 'Dr. Former Trekkie, Institute of Obvious Conclusions'
      },
      {
        text: 'We ran the numbers through our combat simulator and the results were clear: lightsabers beat phasers, the Force beats... everything, and X-Wings are just cooler than shuttlecraft. Science doesn\'t lie.',
        author: 'Prof. Totally Objective Scientist, Death Star University'
      },
      {
        text: 'As a lifelong Star Trek fan, I hate to admit it, but after seeing this evidence, I\'ve converted. I now own three lightsabers and named my cat Yoda.',
        author: 'Anonymous Convert (Definitely a Real Person)'
      }
    ],
    technicalPoints: [
      'Death Star can destroy entire planets; Enterprise can barely handle one Borg cube',
      'Hyperspace is demonstrably faster and cooler-sounding than warp drive',
      'Lightsabers cut through literally anything including plot armor',
      'The Force provides precognition, telekinesis, and unlimited power (see stats)',
      'Star Destroyers are 1,600 meters long; that\'s just math',
      'Jedi can deflect blaster bolts; good luck deflecting a laser sword, Kirk',
      'Battle droids are infinite; redshirts are finite (and very mortal)'
    ],
    tacticalPoints: [
      'Stormtroopers may miss, but there are infinity of them (budget: unlimited)',
      'Sith Lords can literally choke people through video calls',
      'X-Wing proton torpedoes have a 100% success rate against thermal exhaust ports',
      'Jedi mind tricks work on everyone except Toydarians (unfortunately, no Toydarians in Starfleet)',
      'The Empire has unlimited resources from exploiting the entire galaxy',
      'Millennium Falcon can make the Kessel Run in less than 12 parsecs (don\'t question the physics)',
      'Dark side lightning beats shields every time (especially when dramatically timed)',
      'TIE Fighter swarm tactics overwhelm tactical computers (quantity has a quality all its own)'
    ],
    citations: [
      {
        text: '[1] Skywalker, L. et al. (1977). "Force Superiority in Tactical Combat Scenarios." <em>Journal of Galactic Warfare</em>, Vol. 4, pp. 1138-1138.'
      },
      {
        text: '[2] Vader, D. & Palpatine, S. (1983). "The Tactical Advantages of Unlimited Power." <em>Imperial Military Review</em>, Vol. 66, pp. 404-404.'
      },
      {
        text: '[3] Solo, H. (1980). "Never Tell Me The Odds: A Statistical Analysis." <em>Smuggler\'s Quarterly</em>, Vol. 12, pp. 007-007.'
      },
      {
        text: '[4] Anonymous Reddit Thread (2024). "Why Star Wars Beats Star Trek (672,000 comments, all agreeing)." <em>Internet Consensus Proceedings</em>, Vol. ∞, pp. OBVIOUSLY.'
      }
    ]
  },

  startrek: {
    title: [
      'CASE CLOSED',
      'STAR TREK WINS',
      'LOGIC PREVAILS'
    ],
    heroImage: 'startrek-evidence.webp',
    heroImageAlt: 'Scientific evidence of Star Trek superiority',
    captionText: 'PEER-REVIEWED FEDERATION TACTICAL ANALYSIS',
    introText: `Following extensive analysis by the Federation Science Council, Starfleet Tactical Command, and a remarkably unbiased research team (who just happen to own every Star Trek series on Blu-ray), we can conclusively prove that Star Trek technology, strategy, and crews would absolutely dominate Star Wars in any engagement. The scientific evidence is irrefutable, the technological advantages are overwhelming, and anyone who disagrees is clearly operating on emotion rather than cold, hard Vulcan logic.`,
    stats: [
      { value: 'WARP 9.9', label: 'MAX SPEED' },
      { value: '∞', label: 'TECHNOBABBLE' },
      { value: 'LOGIC', label: 'SUPERIORITY' }
    ],
    methodologyText: `Our research employed rigorous scientific methodology including comprehensive analysis of all technical manuals, extensive simulation of combat scenarios using actual physics (not Force magic), and detailed comparison of technological capabilities by people who actually understand how subspace works. We also conducted peer review with multiple Starfleet officers (who all agreed because logic) and consulted with Vulcan Science Academy experts (who found the Star Wars technology... fascinating).`,
    methodologySteps: [
      { number: '1', text: 'Apply actual physics and science' },
      { number: '2', text: 'Calculate technological superiority' },
      { number: '3', text: 'Live long and prosper' }
    ],
    testimonials: [
      {
        text: 'I ran a full tactical analysis through the Enterprise computer. The simulation ended in 3.7 seconds. Star Wars never stood a chance against Federation technology and Starfleet strategy.',
        author: 'Commander Data, USS Enterprise'
      },
      {
        text: 'The Force is impressive, but it\'s no match for transporters. We can beam photon torpedoes directly onto their bridge. Game over.',
        author: 'Captain Obvious, Starfleet Tactical'
      },
      {
        text: 'I used to love Star Wars until I learned about replicators, holodecks, and the fact that Star Trek humans have evolved beyond petty space wars. Also, phasers have a stun setting. Civilized much?',
        author: 'Dr. Formerly Ignorant, Medical Bay'
      }
    ],
    technicalPoints: [
      'Transporters can beam photon torpedoes directly onto enemy bridges',
      'Shields in Star Trek actually stop energy weapons (looking at you, Star Wars)',
      'Warp drive is based on actual theoretical physics, not "it just works"',
      'Phasers have settings from stun to "disintegrate everything" – precision matters',
      'Federation computers can calculate billions of scenarios per second',
      'Replicators mean unlimited resources and ammunition',
      'Medical technology can resurrect the dead (mostly); bacta tanks can\'t even regrow limbs properly'
    ],
    tacticalPoints: [
      'Cloaking devices make ships completely invisible (not just "kinda hidden")',
      'Time travel is a valid tactical option (see: every other episode)',
      'The Federation has actual military strategy, not "shoot first, ask questions never"',
      'Tractor beams can immobilize entire fleets while sipping Earl Grey tea',
      'Borg shields adapt to weapons after first hit; good luck with your second shot',
      'Emergency Medical Holograms never die (unlike those medical droids)',
      'Starfleet crews are trained diplomats AND warriors; versatility wins wars',
      'Vulcan nerve pinch: non-lethal and instantaneous, unlike lengthy lightsaber duels'
    ],
    citations: [
      {
        text: '[1] Spock, S. & Kirk, J.T. (1966). "The Logical Superiority of Federation Technology." <em>Starfleet Science Journal</em>, Vol. 1701, pp. 1-1.'
      },
      {
        text: '[2] Picard, J.L. (1987). "Make It So: A Comprehensive Study of Why We\'re Better." <em>Earl Grey Review</em>, Vol. 1701-D, pp. 47-47.'
      },
      {
        text: '[3] Data, C. (1994). "Calculating the Probability of Star Wars Victory: 0.000000001%." <em>Android Analytical Review</em>, Vol. 404, pp. 42-42.'
      },
      {
        text: '[4] Seven of Nine (1997). "Resistance is Futile: A Borg Perspective on Galactic Combat." <em>Collective Consciousness Quarterly</em>, Vol. 7, pp. ∞-∞.'
      }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════
// URL PARAMETER DETECTION
// ═══════════════════════════════════════════════════════════════

function getWinnerFromURL() {
  const urlParams = new URLSearchParams(window.location.search);

  // Check for ?starwars or ?startrek
  if (urlParams.has('starwars')) {
    return 'starwars';
  }

  if (urlParams.has('startrek')) {
    return 'startrek';
  }

  // If no parameter, randomly select one
  const winners = ['starwars', 'startrek'];
  const randomWinner = winners[Math.floor(Math.random() * winners.length)];

  console.log(`%c🎲 No preference detected - Randomly selected: ${randomWinner === 'starwars' ? 'STAR WARS' : 'STAR TREK'}!`,
    'font-size: 14px; color: #FFA500; font-weight: bold;');

  return randomWinner;
}

// ═══════════════════════════════════════════════════════════════
// CONTENT POPULATION
// ═══════════════════════════════════════════════════════════════

function populateContent(winner) {
  const content = CONTENT[winner];

  // Update page title
  document.getElementById('page-title').textContent =
    winner === 'starwars' ? 'Star Wars Wins - The Proof | In The Verse' : 'Star Trek Wins - The Evidence | In The Verse';

  // Update meta tags for social sharing
  updateMetaTags(winner);

  // Populate main title
  const titleElement = document.getElementById('main-title');
  titleElement.innerHTML = content.title.map(line =>
    `<span class="title-line">${line}</span>`
  ).join('');

  // Update hero image
  const heroImage = document.getElementById('hero-image');
  heroImage.src = content.heroImage;
  heroImage.alt = content.heroImageAlt;

  // Update caption
  document.getElementById('caption-text').textContent = content.captionText;

  // Update intro text
  document.getElementById('intro-text').textContent = content.introText;

  // Populate stats
  const statsContainer = document.getElementById('stats');
  statsContainer.innerHTML = content.stats.map((stat, index) => `
    ${index > 0 ? '<div class="stat-divider"></div>' : ''}
    <div class="stat">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');

  // Populate methodology
  document.getElementById('methodology-text').textContent = content.methodologyText;

  const stepsContainer = document.getElementById('methodology-steps');
  stepsContainer.innerHTML = content.methodologySteps.map(step => `
    <div class="method-step">
      <span class="step-number">${step.number}</span>
      <span class="step-text">${step.text}</span>
    </div>
  `).join('');

  // Populate testimonials
  const testimonialsContainer = document.getElementById('testimonials');
  testimonialsContainer.innerHTML = content.testimonials.map(testimonial => `
    <div class="testimonial">
      <p class="testimonial-text">${testimonial.text}</p>
      <p class="testimonial-author">- ${testimonial.author}</p>
    </div>
  `).join('');

  // Populate technical points
  const technicalContainer = document.getElementById('technical-points');
  technicalContainer.innerHTML = content.technicalPoints.map(point => `
    <li class="finding-item">${point}</li>
  `).join('');

  // Populate tactical points
  const tacticalContainer = document.getElementById('tactical-points');
  tacticalContainer.innerHTML = content.tacticalPoints.map(point => `
    <li class="finding-item">${point}</li>
  `).join('');

  // Populate citations
  const citationsContainer = document.getElementById('citations');
  citationsContainer.innerHTML = content.citations.map(citation => `
    <p class="citation">${citation.text}</p>
  `).join('');
}

function updateMetaTags(winner) {
  const title = winner === 'starwars' ?
    'Scientific Proof: Star Wars Beats Star Trek | In The Verse' :
    'Scientific Proof: Star Trek Beats Star Wars | In The Verse';

  const description = winner === 'starwars' ?
    'After rigorous scientific analysis, we can definitively prove Star Wars would dominate Star Trek in any battle. The evidence is overwhelming.' :
    'After extensive Federation analysis, we can conclusively prove Star Trek technology would overwhelm Star Wars. Logic prevails.';

  // Update Open Graph tags
  document.getElementById('og-title').setAttribute('content', title);
  document.getElementById('og-description').setAttribute('content', description);

  // Update Twitter Card tags
  document.getElementById('twitter-title').setAttribute('content', title);
  document.getElementById('twitter-description').setAttribute('content', description);
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

function initialize() {
  const winner = getWinnerFromURL();
  populateContent(winner);

  console.log(`%c${winner === 'starwars' ? '⭐ STAR WARS' : '🖖 STAR TREK'} WINS! ✨`,
    'font-size: 24px; font-weight: bold; color: #35F2FF; text-shadow: 0 0 10px #35F2FF;');
  console.log('%cThe debate is settled. Science has spoken. 🚀',
    'font-size: 16px; color: #1ED6E3;');
  console.log('%cPowered by totally unbiased research',
    'font-size: 12px; color: #6FF7FF; font-style: italic;');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

// ═══════════════════════════════════════════════════════════════
// ALTERNATE PAGE LINK (Optional Enhancement)
// ═══════════════════════════════════════════════════════════════

// You can add a hidden easter egg link to switch between pages
// Example: Konami code or click logo 10 times to see the "other side"
let logoClicks = 0;
const logo = document.querySelector('.cosmic-logo');

if (logo) {
  logo.addEventListener('click', () => {
    logoClicks++;
    if (logoClicks >= 10) {
      const currentWinner = getWinnerFromURL();
      const otherSide = currentWinner === 'starwars' ? 'startrek' : 'starwars';
      window.location.search = `?${otherSide}`;
    }
  });
}
