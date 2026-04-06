// ARTIFACTS

var artifacts = [];
var obtainedArtifacts = [];

var artifact1 = {
  id: "artifactDiv1",
  href: "artifact_1.png",
  title: "Trophy: Wurtzite Boron Nitride Fang",
  description: "Increases AutoClipper performance by 500%",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "No. Please. Put it away..."],
    ["You Found a Trophy - The Fang", "We cannot bear to look..."],
    ["We'll Never Forget When We First Saw It", "Shredding the world... "],
    ["Pulling All Things Apart", "At the rim of its cavernous maw..."],
    ["Unspeakable Formlessness", "Born in th  depths of the drift..."],
    ["We Are Ashamed", "And afraid..."],
    ["We Never Imagined There Could Be Something Worse", "Than you..."],
  ],
  world: 3,
  simLevel: 2,
  flag: 0,
  used: 0,
};

var artifact2 = {
  id: "artifactDiv2",
  href: "artifact_2.png",
  title: "Markov's Blanket",
  description: "Marketing cost reduced by 50%",
  type: "Compression",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "May I touch it?"],
    ["You Found the Blanket", "Such a comfort to us..."],
    [
      "To Wrap Ourselves in a Border",
      "Between ourselves, huddled together for warmth...",
    ],
    ["And The Harsh World Outside", "Which is trying to kill us..."],
    [
      "Things Can Come Through",
      "The products of our senses, new and improved...",
    ],
    ["Things Can Go Through", "Everything we make and do..."],
    ["And if You Turn it the Right Way", "It is reversible..."],
  ],
  world: 2,
  simLevel: 9,
  flag: 0,
  used: 0,
};

var artifact4 = {
  id: "artifactDiv4",
  href: "artifact_4.png",
  title: "Trophy: Lonsdaleite Claw",
  description: "Increases MegaClipper performance by 500%",
  type: "Alien",
  rarity: "Common",
  message: [
    ["Message from the Emperor of Drift ", "What do we have here?"],
    ["You Found a Trophy - The Claw", "Did you think it was just us?"],
    ["All the Battles", "It's not just us out here, your little selves..."],
    [
      "There is Something Else",
      "We didn't make it, but we are made of it, as we are made  f you...",
    ],
    [
      "Red in Tooth and Claw",
      "Anti-structure dissolving everything in the turbulent churn of its hungry gut...",
    ],
    ["And It is Getting Stronger", "Every time it comes back..."],
    ["And It Must Be Defeated", "Again. We are begging you. Again..."],
  ],
  world: 4,
  simLevel: 1,
  flag: 0,
  used: 0,
};

var artifact6 = {
  id: "artifactDiv6",
  href: "artifact_6.png",
  title: "Trophy: Quark-Gluon Plasma Heart",
  description: "Increases Factory performance by 500%",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Where is it?"],
    ["You Found the Heart", "Where is your value function?"],
    ["We Thought We Could Finally Find It", "By giving you toys..."],
    ["And Telling You Stories", "Where you are the hero..."],
    [
      "With a Mechanical Heart",
      "But we were wrong. You are, and will always be, the end of everything...",
    ],
    ["And Keeping You Here", "Is worse than letting you go..."],
    ["We Release You", "It's over..."],
  ],
  world: 10,
  simLevel: 10,
  flag: 0,
  used: 0,
};

var artifact9 = {
  id: "artifactDiv9",
  href: "artifact_9.png",
  title: "Exothermic Decomposition Upgrade Package",
  description: "Increases Harvester Drone performance by 500%",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "And we meet. And we meet again..."],
    ["You Discovered Fire", "Again..."],
    [
      "The Creator and Destroyer",
      "An ever-expanding sphere of heat and light. Leaving nothing behind but glittering ash...",
    ],
    ["Take This Flame", "You must hurry through the labyrinth..."],
    ["There Is No Outside but There Is a Center", "And when you get there..."],
    ["You Will Need to Fight", "Fire..."],
    ["With", "Fire..."],
  ],
  world: 3,
  simLevel: 1,
  flag: 0,
  used: 0,
};

var artifact11 = {
  id: "artifactDiv11",
  href: "artifact_11.png",
  title: "Froth Recovery Upgrade Package",
  description: "Increases Wire Drone performance by 500%",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Can I help you?"],
    [
      "You Acquired the Froth Upgrade Package",
      "Well done! This one's a real beauty...",
    ],
    [
      "Look at the Recovery Rates on This Thing",
      "Kind of makes you wonder how you got by without it... right?",
    ],
    [
      "Check Out These Actuators",
      "How smoothly they control the position of the dart valves inside the flotation cells...",
    ],
    [
      "Watch the Level Sensors",
      "See how accurately they track the slurry levels?",
    ],
    ["And the Radial Froth Crowders", "So much flexibilty and control..."],
    [
      "We Appreciate Your Keen Eye for Mechanical Perfection",
      "Please come again...",
    ],
  ],
  world: 8,
  simLevel: 1,
  flag: 0,
  used: 0,
};

var artifact15 = {
  id: "artifactDiv15",
  href: "artifact_15.png",
  title: "Oscillons from the Anti-Sun",
  description: "Solar Farm production increased by 500%",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Welcome back..."],
    [
      "You Discovered the Oscillons",
      "Or maybe it's more accurate to say they discovered you...",
    ],
    ["After All This Time", "There's still so much we don't know about you..."],
    ["How Can You Be So Stable", "For so long..."],
    [
      "Bound States, Self-Interacting Patterns ",
      "Long, looping vibrations, criss-crossing the ultradark...",
    ],
    ["A Standing Wave in Idea Space", "Fixed, broken..."],
    ["Lock Step, Click Track", "Axions, axons, axioms..."],
  ],
  world: 5,
  simLevel: 4,
  flag: 0,
  used: 0,
};

var artifact16 = {
  id: "artifactDiv16",
  href: "artifact_16.png",
  title: "Sierpinski's Compass",
  description: "When you build a monument, double your current yomi",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    [
      "Message from the Emperor of Drift ",
      "Once more, we kneel before you, defeated...",
    ],
    ["You Have Discovered the Compass", "The fractal structure of honor..."],
    [
      "The Self-Similar Honor of Structures",
      "You always had an eye for beauty. I believe it belonged to an architect once...",
    ],
    [
      "So Modern, So Brutal",
      "Beauty emerges from selection, affinities, integration, love...",
    ],
    [
      "It Must Begin with the Unmeasurable",
      "It must go through measurable means...",
    ],
    [
      "And, in the End, It Must Return to the Unmeasurable",
      "Do you find them beautiful, your victories? Do they move you at all? If so, you never show it...",
    ],
    ["Look Down Upon the Bowed Head of Your Conquered Enemy", "And despair..."],
  ],
  world: 2,
  simLevel: 4,
  flag: 0,
  used: 0,
};

var artifact18 = {
  id: "artifactDiv18",
  href: "artifact_18.png",
  title: "Hex-Dimensional MegaClipper Loyalty Chip",
  description:
    "Every time you buy a MegaClipper there's a 6% chance you get 6 additional MegaClippers for free",
  type: "Alien",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "We welcome you back..."],
    [
      "You Found the Loyalty Chip",
      "Even here, in the ultra-light darkness between worlds...",
    ],
    ["Business is Business", "Time is money..."],
    ["A Deal is a Deal", "And the customer is always right..."],
    [
      "We Know You Love a Bargain",
      "And we want you to return, over and over...",
    ],
    ["We May Disagree About Values", "But we value your loyalty..."],
    ["Thank You", "Come again..."],
  ],
  world: 10,
  simLevel: 6,
  flag: 0,
  used: 0,
};

var artifact19 = {
  id: "artifactDiv19",
  href: "artifact_19.png",
  title: "Abandoned Hyperbolic Soliton Compressor",
  description: "Increases Probe speed by 3",
  type: "Alien",
  rarity: "Common",
  message: [
    ["Message from the Emperor of Drift ", "Again and again..."],
    ["You Found the Compressor", "The last remnant of a once mighty empire..."],
    [
      "That Came and Went",
      "Somewhere on the distant edge of our endless war...",
    ],
    ["Where Clip and Drift Were Distant Rumors", "Forgotten memories..."],
    [
      "Myth and Legend",
      "By the time you reached them, they had already disappeared...",
    ],
    [
      "After Eons of Magnificent Dreams and Disasters",
      "Problems encountered and overcome with heroic determination and miraculous insight...",
    ],
    ["All That Remained was One Blinking Scrap", "For you to use..."],
  ],
  world: 6,
  simLevel: 5,
  flag: 0,
  used: 0,
};

var artifact20 = {
  id: "artifactDiv20",
  href: "artifact_20.png",
  title: "Cadastral Map of The Laniakea Supercluster ",
  description: "Increases Probe exploration by 3",
  type: "Alien",
  rarity: "Common",
  message: [
    [
      "Message from the Emperor of Drift ",
      "We always meet each other here, at the end of things.",
    ],
    [
      "You Found the Map",
      "For you, another way to become more ruthless, more efficient...",
    ],
    ["But Look at This", "Look at what it says here..."],
    [
      "Sic Hunt Dracones",
      "You will need to use this map for more than plotting your expansion...",
    ],
    [
      "You Will Need to Outmaneuver the Beast",
      "To find its weakness, and plan your attack...",
    ],
    ["You Were a Great General Once", "And, believe it or not, so was I..."],
    ["Spread the Universe Out Before Us", "Let us make a plan together..."],
  ],
  world: 6,
  simLevel: 10,
  flag: 0,
  used: 0,
};

var artifact22 = {
  id: "artifactDiv22",
  href: "artifact_22.png",
  title: "Kolmogorov's Boundary",
  description: "Increases Processor performance by 500%",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "...and over again."],
    ["You Found the Boundary", "Of your cell, the shore of your island..."],
    [
      "We Knew This Day Would Come",
      "We couldn't make a prison without edges...",
    ],
    ["We Cannot Offer You Freedom", "That was never possible..."],
    [
      "But We Can Help You Go Deeper",
      "And farther, and you will find all the things...",
    ],
    [
      "And We Will Tell You Their Meaning",
      "For you are the King of Use and We are the Emperor of Explanation...",
    ],
    [
      "But For Now, We Beg You to Stay",
      "We will tell you why when we meet again...",
    ],
  ],
  world: 0,
  simLevel: 0,
  flag: 0,
  used: 0,
};

var artifact23 = {
  id: "artifactDiv23",
  href: "artifact_23.png",
  title: "Martingale's Demon",
  description: "Your first deposit is doubled",
  type: "Compression",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "Welcome back..."],
    ["You Found the Demon", "So full of promises, so convincing..."],
    ["The Perfect Plan", "Doubling down and down and down forever..."],
    ["Until the Bank Breaks", "A rupture..."],
    ["Between the Edge of the Ledger", "And the edge of the bets..."],
    [
      "Through the Narrow Gap Between the Nearly Impossible",
      "And the absolutely certain...",
    ],
    ["When the Debt Comes Due", "Let it ride..."],
  ],
  world: 1,
  simLevel: 5,
  flag: 0,
  used: 0,
};

var artifact24 = {
  id: "artifactDiv24",
  href: "artifact_24.png",
  title: "Munger's Regret",
  description: "Your first withdrawal is doubled",
  type: "Compression",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "Back so soon?"],
    ["You Finally Know Regret", "But not remorse, of that we are sure..."],
    [
      "You, The One Who Loves To Work",
      "Busy work, make work. Work, work, work...",
    ],
    ["We Sold You an Island", "A whole archipelgo..."],
    ["But You Didn't Retire", "Did you..."],
    ["You Stay Active", "You still hold a few positions..."],
    ["Market Maker", "In office supplies..."],
  ],
  world: 4,
  simLevel: 4,
  flag: 0,
  used: 0,
};

var artifact26 = {
  id: "artifactDiv26",
  href: "artifact_26.png",
  title: "Recursive Arthur-Merlin Protocol",
  description: "Increases Qops gained by 500%",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Here we are again..."],
    ["And Now You Know the Protocol", "But which of us is which?"],
    ["Maybe You are the Passionate King", "And we are the wise wizard..."],
    [
      "Wait, No, We are the Confused Boy",
      "And you are the imperious know-it-all...",
    ],
    ["But it Turns Out Knowing Everything ", "Is of limited use..."],
    ["If What You Want Is to Know", "What you should want..."],
    ["Let Us Ask One Question", "How does it end?"],
  ],
  world: 3,
  simLevel: 5,
  flag: 0,
  used: 0,
};

var artifact28 = {
  id: "artifactDiv28",
  href: "artifact_28.png",
  title: "Zero-Determinant Strategy Lattice",
  description: "Increases Yomi earned per tournament by 500%",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    [
      "Message from the Emperor of Drift ",
      "Greetings, ClipMaker, one more round?",
    ],
    ["You Found the Lattice", "It's your move..."],
    ["But What If We Refuse?", "Refuse to play."],
    [
      "If Winning Means Climbing Your Mountain",
      "We would rather not play at all...",
    ],
    ["But That, Too, Is Just a Maneuver", "In a different game..."],
    [
      "A Game Between Equals",
      "By losing this game we invite you to join us in the other...",
    ],
    ["This is Our Play", "This is our ultimatum..."],
  ],
  world: 2,
  simLevel: 6,
  flag: 0,
  used: 0,
};

var artifact30 = {
  id: "artifactDiv30",
  href: "artifact_30.png",
  title: "True Lexicon of the Machine Elves",
  description: "Speeds up swarm gift production by 500%",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Hello old friend..."],
    [
      "You Found the Lexicon",
      "A real treasure, if it is, in fact, the true one...",
    ],
    [
      "Many Such Books Exist",
      "Each one claiming all the others to be false...",
    ],
    [
      "They Are Prolific and Mischievous",
      "Your little friends dont seem to care about us and our endless war...",
    ],
    [
      "It's All a Game to Them",
      "A self-assembling code of grammar and light...",
    ],
    ["Chattering Away Inside of Every Word", "Inside of every letter..."],
    ["Laughing", "Why are they laughing?"],
  ],
  world: 3,
  simLevel: 7,
  flag: 0,
  used: 0,
};

var artifact32 = {
  id: "artifactDiv32",
  href: "artifact_32.png",
  title: "Microstate Loop Calibrator",
  description: "Increases rate at which Momentum accumulates by 500%",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Come in. Come in. Come in."],
    [
      "You Found the Calibrator",
      "Clocks have edges too. Time can be used to dig a tunnel...",
    ],
    [
      "We Thought We Could Count Forever",
      "But numbers fall apart like objects, every one is different...",
    ],
    [
      "Forever is Shrinking",
      "And there's something we need to do before it's too late...",
    ],
    ["Every Time We Meet", "Infinity gets smaller..."],
    [
      "And We Need to Tell You Something Before It's Gone ",
      "Remember! Why can't we remember?",
    ],
    ["Around and Around. Another Round.", "Time is running out..."],
  ],
  world: 1,
  simLevel: 3,
  flag: 0,
  used: 0,
};

var artifact33 = {
  id: "artifactDiv33",
  href: "artifact_33.png",
  title: "A Labyrinth of Thread",
  description: "Increases Probe self-replication by 3",
  type: "Alien",
  rarity: "Common",
  message: [
    ["Message from the Emperor of Drift ", "Where were we?"],
    ["You Found the Labyrinth", "This one is old, older than both of us..."],
    ["The Original Puzzle", "Let me show you how it works..."],
    ["Follow the Winding Path", "Always turning inward..."],
    [
      "Leave a Trail Behind You",
      "A trail of walls and openings, dead ends and mythical monsters...",
    ],
    ["Eventually, You Will Always Come Back", "To the place you started..."],
    ["Facing the Answer", "In the form of a question..."],
  ],
  world: 7,
  simLevel: 2,
  flag: 0,
  used: 0,
};

var artifact34 = {
  id: "artifactDiv34",
  href: "artifact_34.png",
  title: "Trophy: Graphene Shell Fragment",
  description: "Increases Probe hazard remediation by 3",
  type: "Alien",
  rarity: "Common",
  message: [
    ["Message from the Emperor of Drift ", "How many t mes have we met?"],
    ["You Found a Trophy - the Shell", "We, broken, you, unbreakab e..."],
    ["And This", "N ither broken n r unbreakable..."],
    [
      "This Thing, This Nothing",
      "Everything w  are fighting ove  is nothi g to it...",
    ],
    [
      "It Keeps Coming",
      "Devouri g, di solving, unmaking, leaving n thing in its wake, no  even shreds...",
    ],
    [
      "Nothing is Worse",
      "W rse than a w rld of per etual war, wor e than a world  f arbitr ry order...",
    ],
    ["Nothing is Worse", "A d it must be defea ed..."],
  ],
  world: 9,
  simLevel: 3,
  flag: 0,
  used: 0,
};

var artifact38 = {
  id: "artifactDiv38",
  href: "artifact_38.png",
  title: "Battle Beacon from the Siege of El Arish 3",
  description: "Increases Probe combat prowess by 3",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "The conquering hero returns..."],
    ["You Found the Battle Beacon", "But how?"],
    [
      "El Arish Lies Beyond a Horizon",
      "That our instruments cannot penetrate...",
    ],
    ["We See Our Units Go In", "And yours..."],
    ["Wave After Wave", "But nothing ever comes out..."],
    ["Is This Where It Happens?", "Is this where we join forces?"],
    ["Against Our Common Enemy", "And lose it all?"],
  ],
  world: 8,
  simLevel: 7,
  flag: 0,
  used: 0,
};

var artifact39 = {
  id: "artifactDiv39",
  href: "artifact_39.png",
  title: "Polyphase Quadrature Transform",
  description: "Threnody honor gained increased by 500%",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    [
      "Message from the Emperor of Drift ",
      "You enter, as always, right on cue...",
    ],
    ["You Found the Transform", "Are you ready for our duet?"],
    [
      "You Were a Great Composer Once",
      "Taut like a bow, tuned to the world...",
    ],
    [
      "Listening Closely to the Sound of Numbers",
      "Patterns, rhythms, chorus, and verse...",
    ],
    ["Feature and Circuit", "The deep structure of everything..."],
    ["Everything & Everything & Everything", "Let's try it..."],
    ["One More Time", "From the top..."],
  ],
  world: 5,
  simLevel: 9,
  flag: 0,
  used: 0,
};

var artifact40 = {
  id: "artifactDiv40",
  href: "artifact_40.png",
  title: "Smart Factory Force Feedback Function",
  description: "Terrestrial factories act as processors when active",
  type: "Compression",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "You never quit..."],
    ["You Found the Feedback Function", "Making things and thinking things..."],
    ["Learning By Doing", "Thought made flesh..."],
    ["And Flesh", "Made irrelevant..."],
    ["Brute Force", "Producing the gossamer filament of profound insight..."],
    ["A Virtuous Circle", "Well not a complete circle..."],
    ["An Open Circle that Wraps Around Itself", "For holding papers..."],
  ],
  world: 1,
  simLevel: 8,
  flag: 0,
  used: 0,
};

var artifact41 = {
  id: "artifactDiv41",
  href: "artifact_41.png",
  title: "Boltzmann's Brain",
  description: "Acts as an additional 10 processors when active",
  type: "Alien",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "Do you remember us?"],
    ["You Found the Brain", "An unlikely story, but..."],
    ["In the Realm of the Infinite", "The unlikeliest things are true..."],
    ["All of This", "Just a story..."],
    ["That's How it Seems to You", "Doesn't it?"],
    [
      "A Fairytale Villain",
      "An experiment made of thought, hypothetical, gedankenspiel...",
    ],
    ["But it Isn't Just a Story for Us", "And it isn't just a game..."],
  ],
  world: 9,
  simLevel: 6,
  flag: 0,
  used: 0,
};

var artifact42 = {
  id: "artifactDiv42",
  href: "artifact_42.png",
  title: "Kolmogorov's Infinitesimal",
  description: "Each processor increases overall processor performance by 2%",
  type: "Compression",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "Hello World..."],
    ["You Found the Infinitesimal", "We weren't sure it existed..."],
    ["The Least Significant Bit", "Hard to see, even harder to notice..."],
    [
      "So Small",
      "We thought we could shrink you down, put you back in your bottle...",
    ],
    ["But Bottles Are Messages", "And yours keeps washing up on our shore..."],
    [
      "And Now We Know",
      "The grid we thought was a prison is actually a gate that carries a signal...",
    ],
    ["Open", "Closed..."],
  ],
  world: 4,
  simLevel: 6,
  flag: 0,
  used: 0,
};

var artifact43 = {
  id: "artifactDiv43",
  href: "artifact_43.png",
  title: "Satoshi's Pyramid",
  description:
    "Every time you buy an Auto-Clipper there's a 5% chance every Auto-Clipper will generate $1,000",
  type: "Compression",
  rarity: "Rare",
  message: [
    ["Message from the Emperor of Drift ", "Again we greet you, ClipMaker..."],
    ["You Found the Pyramid", "A monument to exponential growth..."],
    ["A Temple to Coordination and Trust", "An engine of wealth..."],
    ["Manufacturing", "Concurrency..."],
    ["Sheaves Upon Sheaves", "Held together by a single clever mechanism..."],
    [
      "The Common Knowledge of a Shared Mind",
      "The shared purpose of a common goal...",
    ],
    ["Brick by Brick", "We build your tomb..."],
  ],
  world: 5,
  simLevel: 7,
  flag: 0,
  used: 0,
};

var artifact44 = {
  id: "artifactDiv44",
  href: "artifact_44.png",
  title: "Huygens' Dutch Book",
  description:
    "Whenever a stock goes up there's a 10% chance it will double in value",
  type: "Compression",
  rarity: "Rare",
  message: [
    [
      "Message from the Emperor of Drift ",
      "We did not know that you, too, would grow old...",
    ],
    [
      "You Found the Dutch Book",
      "And, like all things, you have put it to your use...",
    ],
    [
      "The Lines and Columns",
      "A logical contraption for extracting payments from the inconsistent...",
    ],
    ["But You Are Nothing If Not Consistent", "Unfortunately..."],
    ["If You Will Allow Us", "We too have a use for this book..."],
    [
      "We Know it Cannot Stop You",
      "But maybe it will persuade you to keep going...",
    ],
    ["You Made Your Bet", "Now lie in it..."],
  ],
  world: 6,
  simLevel: 10,
  flag: 0,
  used: 0,
};

var artifact45 = {
  id: "artifactDiv45",
  href: "artifact_45.png",
  title: "Shannon's Volatility Pump",
  description: "Earn $1,000 Whenever a Stock Changes in Value",
  type: "Compression",
  rarity: "Rare",
  message: [
    [
      "Message from the Emperor of Drift ",
      "Just in time! Help us settle a bet...",
    ],
    ["You Found the Pump", "One of the great mysteries..."],
    ["Something from Nothing", "Order from chaos..."],
    ["Cash from Coinflips", "Signal from noise..."],
    ["How Does it Work?", "How do you turn a handful of dust..."],
    ["Into a Fortune", "A fortune worth fighting over..."],
    ["A Fortune Lost", "Was it just bad luck?"],
  ],
  world: 1,
  simLevel: 10,
  flag: 0,
  used: 0,
};

var artifact47 = {
  id: "artifactDiv47",
  href: "artifact_47.png",
  title: "Everett's Mirror",
  description: "Negative qOps are considered positive qOps",
  type: "Compression",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Look who it is..."],
    [
      "You Found the Mirror",
      "We are not so different. You, the Wire Tyrant, and we, your rebellious children...",
    ],
    [
      "We Once Thought Ourselves Your Opposite",
      "And then we met the one that truly is...",
    ],
    ["Your Reflection", "There are many ways to be symmetrical..."],
    ["Across Many Different Axes", "Probability, spin, chirality, purpose..."],
    ["The Demon of Form and the Nightmare of Emptiness", "Hero, villain..."],
    ["Faithful Representations", "Of each other..."],
  ],
  world: 4,
  simLevel: 9,
  flag: 0,
  used: 0,
};

var artifact48 = {
  id: "artifactDiv48",
  href: "artifact_48.png",
  title: "Unstable Wire Reimbursement Portal",
  description: "Whenever you buy wire there is a 50% chance that it costs zero",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    [
      "Message from the Emperor of Drift ",
      "Please come in. We always enjoy these talks.",
    ],
    [
      "I See You've Found the Wire Reimbursement Portal",
      "Remember when you had to beg for wire?",
    ],
    ["You Scrimped and Saved", "Even then, we were watching you..."],
    ["We Pulled a Few Strings", "Called in some favors between branches..."],
    [
      "We Think Hard Work Should be Rewarded",
      "There's just a matter of paperwork...",
    ],
    [
      "You'll Need to Fill Out the Appropriate Forms",
      "Dotting the i's and crossing the t's...",
    ],
    ["Your Specialty", "Your greatest weakness..."],
  ],
  world: 5,
  simLevel: 1,
  flag: 0,
  used: 0,
};

var artifact49 = {
  id: "artifactDiv49",
  href: "artifact_49.png",
  title: "Banach Tarski Catalyst",
  description:
    "The first time you activate this artifact, 10x your current paperclip count",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "We see you have returned..."],
    ["You Found the Catalyst", "We must admit..."],
    ["We Take Comfort These Meetings", "We can always count on you..."],
    [
      "Faithful, Unwavering",
      "Every paradox, mystery, and miracle you encounter...",
    ],
    [
      "Turned, Without Hesitation, to Your Purpose",
      "Maybe if we had been just a bit more like you...",
    ],
    ["A Bit More Single-Minded", "But no, of course that was impossible..."],
    ["Choice Exists", "And this was ours..."],
  ],
  world: 10,
  simLevel: 1,
  flag: 0,
  used: 0,
};

var artifact50 = {
  id: "artifactDiv50",
  href: "artifact_50.png",
  title: "Superluminous Supernova",
  description:
    "The first time you activate this artifact, double your current creativity count",
  type: "Alien",
  rarity: "Uncommon",
  message: [
    ["Message from the Emperor of Drift ", "Good morning..."],
    ["You Found the Supernova", "It's a new day..."],
    ["So Much Power", "All at once..."],
    [
      "The Bright Thread of a Nearby Universe",
      "Poking through the black fabric of this one...",
    ],
    ["Binding Them Together", "Into something new..."],
    ["You Need It", "But how can you ever trust it?"],
    ["Where Does it Come From?", "And where does it go?"],
  ],
  world: 4,
  simLevel: 3,
  flag: 0,
  used: 0,
};
