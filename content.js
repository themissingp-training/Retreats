/* =====================================================================
   ASCENDING TOGETHER · PAGE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change words, numbers,
   photos, videos or links on the page.

   HOW TO EDIT ON GITHUB
   1. Open this file on github.com and click the pencil (Edit) icon.
   2. Change the text INSIDE the quotes "like this". Keep the quotes,
      commas and brackets exactly as they are.
   3. Click "Commit changes". The live page updates in 1–2 minutes.

   PHOTOS / VIDEOS: upload the file into the assets/img (or assets/video)
   folder with "Add file → Upload files", then type its name here,
   e.g. "assets/img/my-new-photo.jpg".
   ===================================================================== */

window.CONTENT = {

  /* ---------- LINKS (fill these in when ready) ---------- */
  settings: {
    jotformId:   "",   // from Jotform: the number at the end of your form link, e.g. "243561234567890"
    calendlyUrl: "https://calendly.com/themissingp-support/30min",   // e.g. "https://calendly.com/themissingp/retreat-call"
    contactLine: "Prefer to talk first? Message us on WhatsApp or email and we'll call you back."
  },

  /* ---------- 1. TOP OF PAGE ---------- */
  hero: {
    eyebrow:   "Ascending Together · Team Building Retreat",
    titleA:    "One day out.",
    titleB:    "Back as one team.",
    subtitle:  "A high-energy retreat day of team challenges, energizers and guided reflection. Departments stop working in silos, people reconnect across levels, and your team walks back into the office aligned and ready to perform.",
    button:    "Plan your team's retreat",
    button2:   "See the day",
    photo:     "assets/img/irc-circle-lawn.jpg",
    photos:    ["assets/img/irc-circle-lawn.jpg", "assets/img/activity-balloons.jpg", "assets/img/irc-bonfire-collage.jpg", "assets/img/activity-limbo.jpg"]
  },

  proof: [
    { number: "2000+",   label: "IRC participants across 5 retreats" },
    { number: "15+",     label: "NGOs, UN agencies and corporates" },
    { number: "50,000+", label: "professionals trained by Usman Gulzari" },
    { number: "14 yrs",  label: "of facilitation, 2,000+ sessions" }
  ],

  logos: [
    { name: "IRC",                 file: "assets/logos/irc.png" },
    { name: "UN Women",            file: "assets/logos/unwomen.png" },
    { name: "The World Bank",      file: "assets/logos/worldbank.png" },
    { name: "GIZ",                 file: "assets/logos/giz.png" },
    { name: "European Union",      file: "assets/logos/eu.png" },
    { name: "Malteser International", file: "assets/logos/malteser.png" },
    { name: "Médecins du Monde",   file: "assets/logos/mdm.png" },
    { name: "Save the Children",   file: "assets/logos/savethechildren.png" },
    { name: "HUBCO",               file: "assets/logos/hubco.png" },
    { name: "Telenor",             file: "assets/logos/telenor.png" },
    { name: "Lucky Cement",        file: "assets/logos/lucky-cement.png" },
    { name: "Hayat Kimya",         file: "assets/logos/hayat-kimya.png" },
    { name: "The Asia Foundation", file: "assets/logos/asia-foundation.png" },
    { name: "Humanity & Inclusion", file: "assets/logos/handicap-international.png", tall: true },
    { name: "Islamic Relief",      file: "assets/logos/islamic-relief.png", tall: true }
  ],

  /* ---------- 2. VIDEOS ---------- */
  videos: {
    eyebrow: "Watch a retreat",
    title:   "Fun on the day. Results on Monday.",
    text:    "Every game is built to bring out one real workplace behaviour. The team plays it, feels it, then talks it through with the facilitator. That debrief is where the fun turns into change.",
    steps: [
      { word: "Play",   text: "A challenge that gets everyone moving and laughing." },
      { word: "Notice", text: "Who led, who waited, where the message broke." },
      { word: "Apply",  text: "The team agrees what they'll do differently at work." }
    ],
    items: [
      { label: "MDM · Ramada, Murree", file: "assets/video/mdm-ramada-murree.mp4", poster: "assets/video/mdm-poster.jpg",   shape: "wide" },
      { label: "Hayat Kimya",          file: "assets/video/hayat-kimya.mp4",       poster: "assets/video/hayat-poster.jpg", shape: "wide" }
    ]
  },

  /* ---------- 3. WHY US ---------- */
  why: {
    title: "Not a picnic with games.",
    text:  "Plenty of people can run activities. This is what HR and L&D heads tell us they got from us.",
    points: [
      { title: "An agenda built for your goal",   text: "We start with a needs call. Silos, low energy, new joiners or a target push each get a different mix of games and discussions." },
      { title: "Every game ends in a debrief",    text: "Each activity closes with a guided reflection, so people leave with takeaways for work, not just photos." },
      { title: "A seasoned facilitation team",    text: "Led by Usman Gulzari with a co-facilitator. 14 years, 125+ organizations, 2,000+ sessions." },
      { title: "Proven at 2000-person scale",     text: "2000+ IRC participants across 5 retreats in Karachi, Nathiagali and Lahore, including 120 at Nathiagali." },
      { title: "Works for NGOs and corporates",   text: "UN agencies, international NGOs, banks and corporates. Mixed levels, mixed departments." },
      { title: "We run the whole day",            text: "Games, materials, travel and participant certificates are included. You choose the venue; we handle the rest." }
    ]
  },

  /* ---------- 4. PAST RETREATS ---------- */
  portfolio: [
    { name: "IRC Pakistan", big: "2000+", unit: "participants", tags: ["5 retreats", "120 at Nathiagali", "Karachi · Nathiagali · Lahore"],
      text: "2000+ IRC participants across 5 retreats, including 120 at Nathiagali.",
      photos: ["assets/img/irc-group-hotel.jpg", "assets/img/irc-circle-lawn.jpg", "assets/img/irc-bonfire-collage.jpg", "assets/img/hall-session.jpg"] },
    { name: "UN Women", big: "", unit: "", tags: ["Staff retreat"],
      text: "Lots of fun and laughter with important takeaways for every participant.",
      photos: ["assets/img/unwomen-collage.jpg"] },
    { name: "The World Bank", big: "", unit: "", tags: ["Learning team", "Work With Fun"],
      text: "Brainstorming, connection, laughter and games for the learning team.",
      photos: ["assets/img/worldbank-collage.jpg"] },
    { name: "Handicap International", big: "", unit: "", tags: ["Annual staff retreat"],
      text: "Planned and run end to end for their annual staff retreat in the hills.",
      photos: ["assets/img/hi-snow.jpg", "assets/img/hi-forest.jpg"] },
    { name: "HUBCO", big: "", unit: "", tags: ["Outdoor team day"],
      text: "Outdoor challenges and team discussions for the HUBCO team.",
      photos: ["assets/img/hubco-collage.jpg"] },
    { name: "PIPS", big: "", unit: "", tags: ["Parliamentarian institute"],
      text: "Indoor team challenges for the Pakistan Institute for Parliamentary Services.",
      photos: ["assets/img/pips-hall.jpg"] }
  ],
  morePortfolioTitle: "More retreats we've run",
  morePortfolioText:  "Team size, format and venue at a glance",
  morePortfolio: [
    { name: "GIZ Migration Team", big: "20",   unit: "participants", note: "3-day retreat · Avari Lahore · Apr 2025" },
    { name: "MDM",                big: "100+", unit: "participants", note: "Retreat at Ramada, Murree" },
    { name: "IRC",                big: "100+", unit: "participants", note: "Rejuvenation retreat in Murree" },
    { name: "Malteser Pakistan",  big: "60+",  unit: "participants", note: "Fun break in the mountains of Murree" }
  ],

  /* Retreat films that play right on the page */
  filmsTitle: "Retreat films",
  filmsText:  "Press play and feel the energy of a retreat day: from reflection to alignment.",
  films: [
    { label: "It's time for a retreat", file: "assets/video/teaser.mp4",     poster: "assets/video/teaser-poster.jpg",     shape: "wide" },
    { label: "Retreat highlights",      file: "assets/video/highlights.mp4", poster: "assets/video/highlights-poster.jpg", shape: "tall" }
  ],

  /* More retreat videos (open on YouTube / OneDrive) */
  retreatVideos: [
    { name: "European Union", note: "Video compilation", link: "https://www.youtube.com/watch?v=fuTaVFKM33c" },
    { name: "IRC",            note: "Nathiagali · 120 people",       link: "https://www.youtube.com/watch?v=buz820_gliY" },
    // WHH: add back once there is a public link (YouTube, or Google Drive set to "Anyone with the link")
    // { name: "WHH", note: "Video compilation", link: "PASTE-PUBLIC-LINK-HERE" },
    { name: "Hayat Kimya",    note: "Full video on YouTube", link: "https://youtu.be/-M8UPA2Ol1w" },
    { name: "MDM · Ramada Murree", note: "Full video on YouTube", link: "https://www.youtube.com/watch?v=DySSgWfl1Cg" }
  ],

  /* ---------- 5. WHAT CLIENTS SAID ---------- */
  testimonials: [
    { quote: "This retreat had lots of fun and laughter with lots of important takeaways. It brought our staff closer together so that we can work as a cohesive and productive team.", name: "Sawai Malhi", org: "UN Women" },
    { quote: "We had a nice session today, Work With Fun. We learned how to work on our priorities, how to be positive, and how to handle our stress.", name: "Ehtisham-ul-Haq", org: "Learning Team, The World Bank" },
    { quote: "Usman and his team also helped us in planning and executing our Annual Staff Retreat, and each and every staff member simply loved it.", name: "Angelina Robinson", org: "Handicap International" },
    { quote: "A very balanced staff contribution and representation with high recorded spirit. It generated strong ties, an impressive beginning towards the year.", name: "Participant email to management", org: "After an IRC retreat" }
  ],
  screenshots: [
    { file: "assets/img/ss-unwomen.jpg",     caption: "Thank-you note · UN Women" },
    { file: "assets/img/ss-hi-linkedin.jpg", caption: "LinkedIn recommendation · Handicap International" },
    { file: "assets/img/ss-worldbank.jpg",   caption: "Feedback · The World Bank" }
  ],
  videoTestimonials: [
    { file: "assets/video/testimonial-1.mp4", poster: "assets/video/testimonial-1-poster.jpg", caption: "Nadir Khusro Gillani · Chief Commercial Officer, Lucky Cement", shape: "tall" }
  ],

  /* ---------- 6. THE CHALLENGES ---------- */
  behaviours: {
    intro: "Every retreat is built around the behaviours your team needs most. A typical focus:",
    items: [
      { word: "Ownership",     text: "Own the business, not just the task." },
      { word: "Collaboration", text: "Break silos, co-create and win together." },
      { word: "Empathy",       text: "Step into each other's shoes." }
    ],
    anchor: "We also give your team a simple memory anchor, built from your venue or theme, so the learning sticks long after the day."
  },
  agenda: [
    { time: "15 min", name: "Follow the Leader", stage: "Energy · Connection · Breaking barriers",
      text: "One person steps into the centre and performs a fun move; everyone copies. The leader keeps changing, so everyone gets a turn to lead.",
      debrief: "How fast does a group pick up energy from whoever leads? What do our people copy from us at work?",
      photo: "assets/img/activity-limbo.jpg" },
    { time: "10 min", name: "Bingo", stage: "Connection · Interaction · Fun",
      text: "Each person gets a BINGO sheet of statements and moves around the room to find colleagues who match each one. Each name only once. First to complete the pattern wins.",
      debrief: "What did you learn about a colleague today that you never knew? How does knowing people change how we work with them?",
      photo: "assets/img/hall-session.jpg" },
    { time: "Runs all day", name: "Scavenger Hunt", stage: "Strategy · Collaboration · Speed",
      text: "Coloured ribbons and flags are hidden around the venue, each worth different points. Teams decide where to search, how to split roles and what to prioritise. Highest score wins, not most flags.",
      debrief: "Did we chase quantity or value? How did we decide who does what?",
      photo: "assets/img/zic-outdoor-2.jpg" },
    { time: "20 min", name: "Water Passing", stage: "Collaboration · Coordination · Communication",
      text: "Teams stand in a line and pass water from a full glass at the front to an empty container at the back. Most water collected wins.",
      debrief: "Where do handovers leak between our departments, and who has to talk to whom to fix it?",
      photo: "assets/img/activity-bottles.jpg" },
    { time: "30 min", name: "Plane Flying Challenge", stage: "Strategy · Innovation · Teamwork",
      text: "Using A4 paper, teams build as many paper planes as they can and fly them across the finish line in the time given. Most successful planes wins. And expect a twist at the end!",
      debrief: "Which assumptions slowed us down? How did we react when the rules changed?",
      photo: "assets/img/activity-balloons.jpg" },
    { time: "30–45 min", name: "Egg Drop", stage: "Creativity · Communication · Teamwork",
      text: "With cups, ribbons, tape and paper, each team builds a structure to protect an egg dropped from a height. Scored out of 30: rules, beauty and creativity, and egg safety.",
      debrief: "Message, beauty, timeline: what makes communication land, and what breaks it?",
      photo: "assets/img/activity-tabletop.jpg" },
    { time: "1 hour", name: "Newspaper Race", stage: "Synergy · Excellence",
      text: "The facilitator calls out a news item. Teams find it in their newspaper, cut it out, and a runner sprints to paste it on the team's flip chart. First correct paste wins.",
      debrief: "Who took which role without being asked? Where did speed cost us accuracy?",
      photo: "assets/img/activity-wall.jpg" },
    { time: "1 hour", name: "Human Circuit", stage: "Coordination · Execution",
      text: "Teams pass energy balls through 7 zones, each with a rule: one hand, blindfolded, no looking back, forearms only, slow motion. One mistake and the team restarts.",
      debrief: "How did we balance speed with accuracy? What did it feel like when one slip sent everyone back?",
      photo: "assets/img/activity-rope.jpg" },
    { time: "30 min", name: "Landmine", stage: "Trust · Leadership",
      text: "Blindfolded team members cross a minefield guided only by their teammates' voices.",
      debrief: "What does it take to trust a colleague's direction, and to lead someone who can't see what you see?",
      photo: "assets/img/activity-landmine.jpg" }
  ],
  agendaNote: "We pick and order the challenges to fit your goal, group size and venue. Running 2 or 3 days? We add more challenges, team dinners and goal-setting sessions.",

  /* ---------- TRAINER ---------- */
  trainer: {
    name:  "Usman Gulzari",
    role:  "Lead Trainer, The Missing P",
    bio:   "Author of Wings to Fly, and named in Change Makers among the 33 most influential personalities.",
    photo: "assets/img/usman-facilitating.jpg",
    stats: [ ["14", "years"], ["125+", "organizations"], ["2,000+", "trainings"], ["50,000+", "professionals"] ]
  },

  /* ---------- 7. FORM ---------- */
  form: {
    title:    "Get a retreat plan for your team",
    text:     "Answer a few quick questions (about 2 minutes), then pick a time for a short call with our team.",
    promises: ["A draft agenda matched to your team's goal", "Format options for 1, 2 or 3 days", "Venue ideas for your city or a hill station", "A clear quote, with no obligation"],
    teamSize: ["Under 25", "25–50", "50–100", "100+"],
    needs:    ["Break silos between departments", "Re-energize the team", "Align on goals and targets", "Onboard new members", "Celebrate or reward", "Something else"],
    timeline: ["Within 1 month", "1–3 months", "3–6 months", "Just exploring"],
    duration: ["1 day", "2 days", "3 days"],
    location: ["In the city", "Hill station", "Not decided yet"],
    budget:   ["Under Rs 400k", "Rs 400k–800k", "Rs 800k–1.5M", "Above Rs 1.5M", "Not decided yet"],
    authority:["I make the decision", "I recommend to management", "I'm collecting options"],
    privacy:  "We only use your details to plan your retreat. No mailing lists."
  },

  thanks: {
    title: "Thank you",
    text:  "Pick a time below for a quick call. We'll come prepared with ideas for your team."
  }
};
