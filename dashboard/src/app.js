/* ============================================================
   Ember — AI Transition Coaching Business Dashboard
   Sidebar-wizard pattern · Ember palette
   ============================================================ */

(function () {
  "use strict";

  // ── Section configurations ──
  var sections = {
    vision: {
      label: "Vision",
      dashboard: [
        { label: "Core Insight", value: "1", green: false },
        { label: "Market Gap", value: "Identified", green: true },
        { label: "Positioning", value: "Unique", green: true },
        { label: "Mission", value: "Defined", green: true }
      ],
      steps: [
        { label: "The Problem",        icon: "⚡" },
        { label: "The Opportunity",     icon: "🔓" },
        { label: "The Mission",         icon: "☕" },
        { label: "Brand Positioning",   icon: "🎯" }
      ]
    },
    "human-edge": {
      label: "The Human Edge",
      dashboard: [
        { label: "Human Advantages", value: "9" },
        { label: "Timeline Phases", value: "4" },
        { label: "Key Insight", value: "1", green: true },
        { label: "Horizon", value: "2035+" }
      ],
      steps: [
        { label: "What Humans Still Own",   icon: "🧠" },
        { label: "The Convergence Roadmap", icon: "📅" },
        { label: "The Insight",             icon: "💡" }
      ]
    },
    proof: {
      label: "Proof of Concept",
      dashboard: [
        { label: "Tools Built", value: "8", green: true },
        { label: "Time", value: "2 weeks" },
        { label: "Staff Hired", value: "0", green: true },
        { label: "Businesses", value: "3" }
      ],
      steps: [
        { label: "The Journey",             icon: "🚀" },
        { label: "Phase 1: The Experiment", icon: "🧪" },
        { label: "Phase 2: The Mirror",     icon: "🪞" },
        { label: "Phase 3: The Breakthrough", icon: "⚡" },
        { label: "Phase 4: The Roadmap",    icon: "🗺️" }
      ]
    },
    products: {
      label: "What We Build",
      dashboard: [
        { label: "Products", value: "4" },
        { label: "Dashboards", value: "3", green: true },
        { label: "Active Users", value: "Live", green: true },
        { label: "Build Time", value: "Days" }
      ],
      steps: [
        { label: "Business Dashboards",    icon: "📊" },
        { label: "Product Configurators",  icon: "📐" },
        { label: "AI Workflows",           icon: "🤖" },
        { label: "Automation",             icon: "⚙️" }
      ]
    },
    "go-to-market": {
      label: "Go to Market",
      dashboard: [
        { label: "Lanes", value: "5" },
        { label: "First Demo", value: "Sunday", green: true },
        { label: "Target", value: "SMEs" },
        { label: "Model", value: "1-to-1 → Scale" }
      ],
      steps: [
        { label: "Target Customer",   icon: "👤" },
        { label: "Service Model",     icon: "🏗️" },
        { label: "The Venue",         icon: "🏊" },
        { label: "The Pitch",         icon: "🎤" },
        { label: "First Steps",       icon: "👣" }
      ]
    },
    ideas: {
      label: "Ideas",
      dashboard: [
        { label: "Total", value: "0" },
        { label: "New", value: "0" },
        { label: "Active", value: "0" },
        { label: "Done", value: "0", green: true }
      ],
      steps: [
        { label: "All Ideas",    icon: "💡" },
        { label: "Add New Idea", icon: "➕" }
      ]
    }
  };

  // ── State ──
  var currentSection = "vision";
  var activeCharts = {};

  // ── DOM refs ──
  var bizSelect    = document.getElementById("businessSelect");
  var dashSummary  = document.getElementById("dashSummary");
  var navSteps     = document.getElementById("navSteps");
  var flyout       = document.getElementById("flyout");
  var flyoutTitle  = document.getElementById("flyoutTitle");
  var flyoutBody   = document.getElementById("flyoutBody");
  var flyoutClose  = document.getElementById("flyoutClose");

  function destroyChart(id) {
    if (activeCharts[id]) { activeCharts[id].destroy(); delete activeCharts[id]; }
  }

  // ── Render dashboard summary strip ──
  function renderDashboard(sec) {
    var items = sec.dashboard;
    var row1 = items.slice(0, 2);
    var row2 = items.slice(2, 4);
    function renderItem(d) {
      var cls = 'em-dash-item' + (d.green ? ' green' : '');
      return '<div class="' + cls + '"><span class="em-dash-label">' + d.label + '</span><span class="em-dash-value">' + d.value + '</span></div>';
    }
    var html = '<div class="em-dash-row">';
    row1.forEach(function(d) { html += renderItem(d); });
    html += '</div>';
    if (row2.length) {
      html += '<div class="em-dash-row">';
      row2.forEach(function(d) { html += renderItem(d); });
      html += '</div>';
    }
    dashSummary.innerHTML = html;
  }

  // ── Render nav steps ──
  function renderSteps(sec) {
    var html = "";
    sec.steps.forEach(function (s) {
      html += '<button class="em-step" data-step="' + s.label + '">';
      html += '<span class="em-step-icon">' + s.icon + '</span>';
      html += '<span class="em-step-label">' + s.label + '</span>';
      html += '<span class="em-step-arrow">›</span>';
      html += '</button>';
    });
    navSteps.innerHTML = html;
    navSteps.querySelectorAll(".em-step").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openFlyout(btn.getAttribute("data-step"));
        setActiveStep(btn);
      });
    });
  }

  function setActiveStep(btn) {
    navSteps.querySelectorAll(".em-step").forEach(function (b) { b.classList.remove("active"); });
    if (btn) btn.classList.add("active");
  }


  // ═══════════════════════════════════════════════════════════
  //  SECTION 1 — VISION
  // ═══════════════════════════════════════════════════════════

  function renderVisionProblem() {
    var h = '';
    h += '<div class="em-section-header">The Problem</div>';

    h += '<div class="em-story"><div class="em-story-quote">"People are scared of AI. Fear makes them stop spending. The economy falters. Which creates more fear. A self-fulfilling prophecy — and it doesn\'t have to be this way."</div></div>';

    h += '<div class="em-card"><h3>The Fear Cycle</h3>';
    h += '<p>We\'re watching a dangerous feedback loop form in real time. AI advances land in the headlines as job threats. People get anxious. Anxiety makes people tighten their belts. Reduced spending hurts businesses. Businesses lay off staff. The headlines get worse.</p>';
    h += '<p style="margin-top:12px;">Meanwhile, AI should be doing the <strong>exact opposite</strong> — making individuals more powerful, more productive, more capable than ever before. But people can\'t see that from where they\'re standing.</p>';
    h += '</div>';

    h += '<div class="em-card" style="border-left: 4px solid #c0392b;"><h3 style="color:#c0392b;">The Real Danger</h3>';
    h += '<p>The danger isn\'t that AI replaces everyone. It\'s that the <strong>fear of AI</strong> paralyses everyone. People who could be thriving with AI as their co-pilot are instead frozen, waiting for permission, waiting for certainty that will never come.</p>';
    h += '</div>';

    h += '<div class="em-kpi-grid">';
    h += '<div class="em-kpi charcoal"><div class="em-kpi-icon">😰</div><div class="em-kpi-value">Fear</div><div class="em-kpi-label">Current State</div><div class="em-kpi-change">Rising daily</div></div>';
    h += '<div class="em-kpi charcoal"><div class="em-kpi-icon">💷</div><div class="em-kpi-value">↓ Spend</div><div class="em-kpi-label">Consumer Behaviour</div><div class="em-kpi-change">Tightening belts</div></div>';
    h += '<div class="em-kpi charcoal"><div class="em-kpi-icon">📉</div><div class="em-kpi-value">↓ Growth</div><div class="em-kpi-label">Economic Impact</div><div class="em-kpi-change">Self-fulfilling</div></div>';
    h += '<div class="em-kpi amber"><div class="em-kpi-icon">☕</div><div class="em-kpi-value">Break It</div><div class="em-kpi-label">Our Job</div><div class="em-kpi-change">Show the other path</div></div>';
    h += '</div>';

    return { html: h };
  }

  function renderVisionOpportunity() {
    var h = '';
    h += '<div class="em-section-header">The Opportunity</div>';

    h += '<div class="em-story"><div class="em-story-quote">"We live in an era of corporate supremacy. Most people are locked out of the value-generating machine. AI is the great equaliser. One person plus AI can now do what used to take a team."</div></div>';

    h += '<div class="em-card"><h3>The Corporate Paradox</h3>';
    h += '<p>Here\'s the irony: corporations are <strong>resisting</strong> AI. Official "no AI" policies. Privacy concerns. Compliance headaches. Entire committees debating whether employees can use ChatGPT.</p>';
    h += '<p style="margin-top:12px;">Meanwhile, those same employees are secretly using AI anyway — writing better emails, analysing data faster, generating ideas. The gap between official policy and actual behaviour is enormous.</p>';
    h += '</div>';

    h += '<div class="em-card green-accent"><h3>The Window</h3>';
    h += '<p>This creates a <strong>window of opportunity</strong> for individuals and small businesses who embrace AI early. While corporations are stuck in committee, solo operators and small teams can:</p>';
    h += '<ul style="margin-top:10px; padding-left:20px; line-height:2;">';
    h += '<li>Build tools that would normally require a dev team</li>';
    h += '<li>Automate admin that eats 20+ hours a week</li>';
    h += '<li>Create customer experiences that rival enterprise solutions</li>';
    h += '<li>Move at the speed of thought, not the speed of procurement</li>';
    h += '</ul></div>';

    h += '<div class="em-card"><h3>🔓 The Equaliser</h3>';
    h += '<p>For the first time in decades, the playing field is levelling. You don\'t need a software team. You don\'t need a marketing department. You don\'t need a data analyst. You need <strong>one person who understands how to direct AI</strong> — and the courage to start.</p>';
    h += '</div>';

    return { html: h };
  }

  function renderVisionMission() {
    var h = '';
    h += '<div class="em-section-header">The Mission</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Plough through the valley of darkness and bring everybody into the light. Help people USE AI, realise it\'s a massive upgrade, and give them the confidence to spend and earn again."</div></div>';

    h += '<div class="em-card"><h3>Not Another AI Course</h3>';
    h += '<p>The market is drowning in "how to use ChatGPT" content. That\'s a commodity. Anyone can Google a prompt template.</p>';
    h += '<p style="margin-top:12px;">What people actually need — what they\'re desperate for — is <strong>two things</strong>:</p>';
    h += '</div>';

    h += '<div class="em-kpi-grid">';
    h += '<div class="em-kpi amber" style="text-align:left; padding:24px;"><div class="em-kpi-icon">🛡️</div><div class="em-kpi-value" style="font-size:18px;">CONFIDENCE</div><div class="em-kpi-label" style="font-size:11px; text-transform:none; letter-spacing:0;">The belief that this transition won\'t destroy them. That they can do this. That it\'s not too late. That they\'re not too old, too non-technical, too small.</div></div>';
    h += '<div class="em-kpi amber" style="text-align:left; padding:24px;"><div class="em-kpi-icon">🗺️</div><div class="em-kpi-value" style="font-size:18px;">THE MAP</div><div class="em-kpi-label" style="font-size:11px; text-transform:none; letter-spacing:0;">A clear, honest roadmap of what\'s coming, when it\'s coming, and what to do about it. Not hype. Not fear. Just the plan.</div></div>';
    h += '</div>';

    h += '<div class="em-card green-accent"><h3>That\'s What We Sell</h3>';
    h += '<p>We don\'t sell AI tools. We don\'t sell prompt engineering. We sell the confidence to step forward and the map that shows you where to put your feet.</p>';
    h += '</div>';

    h += '<div class="em-story" style="margin-top:24px;"><div class="em-story-quote">"We can build a whole society of builders."</div></div>';

    h += '<div class="em-card"><h3>The Bigger Vision</h3>';
    h += '<p>This isn\'t just a coaching business. It\'s a movement.</p>';
    h += '<p style="margin-top:12px;">AI democratises the tools that were locked inside corporations. For the first time in history, a single person with the right knowledge can build what used to require a team of twenty. Every person becomes a builder, a creator, a value-generator.</p>';
    h += '<p style="margin-top:12px;">The opportunity isn\'t to help people <em>survive</em> the AI transition. It\'s to help them <strong>thrive</strong> — and in doing so, build a world where everyone is empowered to create value.</p>';
    h += '</div>';

    return { html: h };
  }

  function renderVisionBrand() {
    var h = '';
    h += '<div class="em-section-header">Brand Positioning</div>';

    h += '<div class="em-story"><div class="em-story-quote">"The future doesn\'t replace you. It promotes you. But only if you know the roadmap."</div></div>';

    h += '<div class="em-card"><h3>What We\'re NOT</h3>';
    h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">';

    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px; border-left:3px solid #c0392b;">';
    h += '<p style="font-weight:700; margin-bottom:4px; font-size:13px;">❌ Tech-Bro Hype</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">"AI will eat the world"<br>Terrifying. Alienating. Not helpful.</p></div>';

    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px; border-left:3px solid #c0392b;">';
    h += '<p style="font-weight:700; margin-bottom:4px; font-size:13px;">❌ Prompt Engineering</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">"Learn 50 ChatGPT hacks"<br>Commodity. Boring. Already outdated.</p></div>';

    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px; border-left:3px solid #c0392b;">';
    h += '<p style="font-weight:700; margin-bottom:4px; font-size:13px;">❌ Corporate Consulting</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">"AI transformation strategy"<br>£50k minimum. Inaccessible.</p></div>';

    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px; border-left:3px solid #c0392b;">';
    h += '<p style="font-weight:700; margin-bottom:4px; font-size:13px;">❌ Doomsday Prepping</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">"AI will take all jobs"<br>Paralysing. Defeatist. Wrong.</p></div>';

    h += '</div></div>';

    h += '<div class="em-card green-accent"><h3>What We ARE</h3>';
    h += '<p style="font-size:15px; line-height:1.8;">A <strong>real person</strong>, in a <strong>real field</strong>, showing <strong>real results</strong>, holding your hand through the transition.</p>';
    h += '<ul style="margin-top:14px; padding-left:20px; line-height:2.2;">';
    h += '<li><strong>Real person</strong> — Not a Silicon Valley guru. A farmer and builder from Buckinghamshire.</li>';
    h += '<li><strong>Real field</strong> — Agriculture, construction, small business. Not fintech or SaaS.</li>';
    h += '<li><strong>Real results</strong> — Working tools you can see and use. Not slide decks.</li>';
    h += '<li><strong>Holding your hand</strong> — Patient, honest, no jargon. Starting where you are.</li>';
    h += '</ul></div>';

    return { html: h };
  }


  // ═══════════════════════════════════════════════════════════
  //  SECTION 2 — THE HUMAN EDGE
  // ═══════════════════════════════════════════════════════════

  function renderHumanOwn() {
    var h = '';
    h += '<div class="em-section-header">What Humans Still Own</div>';

    h += '<div class="em-story"><div class="em-story-quote">"AI generates infinite options. Humans pick the right one. That\'s the new superpower: taste at scale."</div></div>';

    var advantages = [
      { icon: '🔨', title: 'The Physical World', desc: 'Building, fixing, crafting, being there. AI can\'t hammer a nail, plumb a bathroom, or feel if the timber\'s warped.' },
      { icon: '🎨', title: 'Taste', desc: 'Knowing what\'s beautiful, what feels right. AI can generate a thousand logos — you know which one sings.' },
      { icon: '🤝', title: 'Trust', desc: 'People buy from people. Accountability matters. When something goes wrong, a human picks up the phone.' },
      { icon: '🧭', title: 'Contextual Judgment', desc: 'Knowing YOUR field, YOUR customers, YOUR quirky suppliers. The stuff that isn\'t on the internet.' },
      { icon: '🎭', title: 'Improvisation', desc: 'Adapting instantly to the unexpected. The client changes their mind mid-meeting. The delivery doesn\'t show. You pivot.' },
      { icon: '❤️', title: 'Emotional Nuance', desc: 'Reading a room. Knowing when to push and when to hold back. Sensing the unspoken objection.' },
      { icon: '🏰', title: 'Relationships as Moats', desc: 'Decades of supplier trust isn\'t data. Your network, your reputation, your handshake — AI can\'t replicate that.' },
      { icon: '📍', title: 'Local Knowledge', desc: 'Planning rules, soil types, what the parish council will approve. The hyper-local detail that no model has.' },
      { icon: '✨', title: 'Curation', desc: 'AI generates infinite options. Humans pick the right one. Selection — taste at scale — is the new competitive edge.' }
    ];

    advantages.forEach(function(a) {
      h += '<div class="em-guide-step"><div class="em-guide-num">' + a.icon + '</div>';
      h += '<div class="em-guide-content"><h4>' + a.title + '</h4><p>' + a.desc + '</p></div></div>';
    });

    return { html: h };
  }

  function renderConvergenceRoadmap() {
    var h = '';
    h += '<div class="em-section-header">The Convergence Roadmap</div>';
    h += '<div class="em-card"><p>AI capability and human advantage are on a collision course. Understanding the timeline is everything.</p></div>';

    var phases = [
      {
        period: 'NOW', years: '2025–2027', color: '#3A7D1C', emoji: '🟢',
        aiTakes: 'Information work, admin, reporting, first drafts, data analysis, scheduling, email triage.',
        humansDo: 'Learn to direct AI. Build with it. Establish yourself as someone who gets it. This is the <strong>golden window</strong> — early movers win.',
        urgency: 'ACT NOW'
      },
      {
        period: 'NEAR', years: '2027–2030', color: '#B45309', emoji: '🟠',
        aiTakes: 'Basic physical tasks (warehouse robots, delivery drones). Better taste simulation. Solid first-draft creative.',
        humansDo: 'Double down on complex physical skills, deep relationships, local expertise. Be the person who knows the <em>why</em>, not just the <em>what</em>.',
        urgency: 'PREPARE'
      },
      {
        period: 'MEDIUM', years: '2030–2035', color: '#D97706', emoji: '🔶',
        aiTakes: 'Most routine physical work. Taste becomes "good enough" for mass market. Autonomous vehicles and construction common.',
        humansDo: 'Become the premium layer. Bespoke, craft, the human story IS the product. "Made by a human" becomes a luxury label.',
        urgency: 'POSITION'
      },
      {
        period: 'FAR', years: '2035+', color: '#292524', emoji: '⚫',
        aiTakes: 'Gap gets very narrow. Robots + AI handle most routine tasks across all domains.',
        humansDo: 'Human connection itself becomes the value. Being real. Being present. Being accountable. The rarest commodity in an automated world.',
        urgency: 'BE HUMAN'
      }
    ];

    phases.forEach(function(p) {
      h += '<div class="em-card" style="border-left:4px solid ' + p.color + ';">';
      h += '<h3 style="color:' + p.color + ';">' + p.emoji + ' ' + p.period + ' <span style="font-size:13px; font-weight:500; color:var(--em-text-muted);">(' + p.years + ')</span></h3>';
      h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:12px;">';
      h += '<div><p style="font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--em-text-muted); margin-bottom:6px;">AI Takes Over</p>';
      h += '<p style="font-size:13px; line-height:1.6;">' + p.aiTakes + '</p></div>';
      h += '<div><p style="font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:' + p.color + '; margin-bottom:6px;">Humans Should</p>';
      h += '<p style="font-size:13px; line-height:1.6;">' + p.humansDo + '</p></div>';
      h += '</div>';
      h += '<div style="margin-top:12px; text-align:right;"><span style="display:inline-block; padding:3px 12px; border-radius:10px; font-size:10px; font-weight:700; letter-spacing:0.06em; background:' + p.color + '; color:#fff;">' + p.urgency + '</span></div>';
      h += '</div>';
    });

    return { html: h };
  }

  function renderHumanInsight() {
    var h = '';
    h += '<div class="em-section-header">The Insight</div>';

    h += '<div class="em-story"><div class="em-story-quote">"The people who thrive aren\'t the ones who resist AI. And they\'re not the ones who blindly adopt it. They\'re the ones who understand the timeline."</div></div>';

    h += '<div class="em-card"><h3>The Map Is the Product</h3>';
    h += '<p style="font-size:15px; line-height:1.8;">Three questions determine your future:</p>';
    h += '</div>';

    h += '<div class="em-kpi-grid">';
    h += '<div class="em-kpi amber" style="text-align:left; padding:20px;"><div class="em-kpi-value" style="font-size:16px;">What to automate NOW?</div><div class="em-kpi-label" style="font-size:11px; text-transform:none; letter-spacing:0;">Which parts of your work are already better done by AI? Stop doing them manually. Today.</div></div>';
    h += '<div class="em-kpi green" style="text-align:left; padding:20px;"><div class="em-kpi-value" style="font-size:16px;">What to keep human NOW?</div><div class="em-kpi-label" style="font-size:11px; text-transform:none; letter-spacing:0;">Your relationships, your taste, your physical skills — double down on these while they\'re still premium.</div></div>';
    h += '<div class="em-kpi charcoal" style="text-align:left; padding:20px;"><div class="em-kpi-value" style="font-size:16px;">How does that shift?</div><div class="em-kpi-label" style="font-size:11px; text-transform:none; letter-spacing:0;">The balance changes every year. You need a guide who\'s watching the horizon and updating the map.</div></div>';
    h += '</div>';

    h += '<div class="em-card green-accent"><h3>That\'s What This Business Sells</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">Not AI tools. Not courses on prompting. <strong>The map.</strong> A personalised, evolving guide to what\'s coming and what to do about it — backed by someone who\'s living it in real time, in a real business, with real results.</p>';
    h += '</div>';

    return { html: h };
  }


  // ═══════════════════════════════════════════════════════════
  //  SECTION 3 — PROOF OF CONCEPT
  // ═══════════════════════════════════════════════════════════

  function renderProofJourney() {
    var h = '';
    h += '<div class="em-section-header">The Journey</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Two weeks ago: one man, one shed business, spreadsheets. Now: three businesses, custom dashboards, a parametric 3D configurator, an AI assistant running operations. No extra staff. No massive investment."</div></div>';

    h += '<div class="em-kpi-grid">';
    h += '<div class="em-kpi green"><div class="em-kpi-icon">📅</div><div class="em-kpi-value">2 Weeks</div><div class="em-kpi-label">Total Build Time</div></div>';
    h += '<div class="em-kpi green"><div class="em-kpi-icon">🏢</div><div class="em-kpi-value">3</div><div class="em-kpi-label">Businesses Managed</div></div>';
    h += '<div class="em-kpi green"><div class="em-kpi-icon">🛠️</div><div class="em-kpi-value">8+</div><div class="em-kpi-label">Tools Built</div></div>';
    h += '<div class="em-kpi green"><div class="em-kpi-icon">👤</div><div class="em-kpi-value">0</div><div class="em-kpi-label">Staff Hired</div></div>';
    h += '</div>';

    h += '<div class="em-card"><h3>Before & After</h3>';
    h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">';
    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; color:var(--em-text-muted); margin-bottom:8px;">BEFORE</p>';
    h += '<ul style="font-size:13px; line-height:2; padding-left:16px; color:var(--em-text-secondary);">';
    h += '<li>One shed business</li><li>Spreadsheets everywhere</li><li>Manual everything</li><li>No digital tools</li><li>One pair of hands</li>';
    h += '</ul></div>';
    h += '<div style="padding:16px; background:var(--em-green-light); border-radius:8px;">';
    h += '<p style="font-weight:700; color:var(--em-green); margin-bottom:8px;">AFTER (2 WEEKS)</p>';
    h += '<ul style="font-size:13px; line-height:2; padding-left:16px; color:var(--em-text-secondary);">';
    h += '<li>Three businesses running</li><li>Custom dashboards with live data</li><li>3D product configurator</li><li>AI assistant managing operations</li><li>Automated data pipelines</li>';
    h += '</ul></div>';
    h += '</div></div>';

    return { html: h };
  }

  function renderProofPhase1() {
    var h = '';
    h += '<div class="em-section-header">Phase 1: The Experiment</div>';

    h += '<div class="em-story"><div class="em-story-quote">"I gave an AI agent a business idea — GrowCabin — and let it run. It produced 60 polished documents in 2 days. Business plans, market research, financial projections, brand guidelines. It felt amazing."</div></div>';

    h += '<div class="em-card"><h3>🧪 What Happened</h3>';
    h += '<p>Andrew gave an AI agent a concept for a modular growing cabin business. The agent ran. And ran. And ran.</p>';
    h += '<p style="margin-top:10px;">In 48 hours it produced:</p>';
    h += '<ul style="margin-top:8px; padding-left:20px; line-height:2;">';
    h += '<li>A complete business plan with financial projections</li>';
    h += '<li>Market research across three competitor categories</li>';
    h += '<li>Brand guidelines with tone of voice</li>';
    h += '<li>Product specification documents</li>';
    h += '<li>Marketing strategy with channel plans</li>';
    h += '<li>Organisational charts and role descriptions</li>';
    h += '<li>Decision matrices, cost models, risk registers</li>';
    h += '<li>Kanban boards for a team that didn\'t exist</li>';
    h += '</ul></div>';

    h += '<div class="em-kpi-grid">';
    h += '<div class="em-kpi amber"><div class="em-kpi-icon">📄</div><div class="em-kpi-value">60</div><div class="em-kpi-label">Documents Produced</div></div>';
    h += '<div class="em-kpi amber"><div class="em-kpi-icon">⏱️</div><div class="em-kpi-value">48h</div><div class="em-kpi-label">Time Taken</div></div>';
    h += '<div class="em-kpi charcoal"><div class="em-kpi-icon">🏗️</div><div class="em-kpi-value">0</div><div class="em-kpi-label">Things Actually Built</div></div>';
    h += '</div>';

    // ── OVER-SCAFFOLDING: the named trap ──
    h += '<div class="em-card" style="border-left: 4px solid #c0392b; border-top: 4px solid #c0392b;"><h3 style="color:#c0392b; font-size:18px;">⚠️ Over-Scaffolding</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">This is the trap, and it has a name: <strong>over-scaffolding</strong>.</p>';
    h += '<p style="margin-top:10px; font-size:14px; line-height:1.8;">It\'s the pattern where AI agents generate impressive-looking project infrastructure — Kanban boards, decision matrices, briefing documents, org charts, cost models, brand guidelines — without actually building anything real.</p>';
    h += '<p style="margin-top:10px; font-size:14px; line-height:1.8;">The dopamine hit of watching polished output appear <em>feels</em> like progress. Your brain can\'t tell the difference between "I read a beautiful business plan" and "I built a business." But your bank account can.</p>';
    h += '</div>';

    h += '<div class="em-card" style="background:var(--em-surface); border:2px dashed #c0392b;">';
    h += '<p style="font-size:13px; line-height:1.8; color:var(--em-text-secondary);"><strong style="color:#c0392b;">🚩 Signs you\'re over-scaffolding:</strong></p>';
    h += '<ul style="margin-top:8px; padding-left:20px; line-height:2.2; font-size:13px; color:var(--em-text-secondary);">';
    h += '<li>You have a Kanban board but no product</li>';
    h += '<li>You have brand guidelines but no customer</li>';
    h += '<li>You have an org chart but you\'re one person</li>';
    h += '<li>You have financial projections but no revenue</li>';
    h += '<li>You\'ve spent days planning and zero days building</li>';
    h += '<li>You feel busy and productive but can\'t show anyone a working thing</li>';
    h += '</ul>';
    h += '<p style="margin-top:12px; font-style:italic; color:var(--em-text-muted); font-size:13px;">If you recognise yourself in this list — good. That\'s the first step. Most people never notice they\'re in it.</p>';
    h += '</div>';

    return { html: h };
  }

  function renderProofPhase2() {
    var h = '';
    h += '<div class="em-section-header">Phase 2: The Mirror</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Are you using the AI as a tool, or is it using you as a prompt generator?"</div></div>';

    h += '<div class="em-card"><h3>🪞 The Wake-Up Call</h3>';
    h += '<p>This was the moment everything changed. An honest piece of feedback that cut through the excitement:</p>';
    h += '<p style="margin-top:12px; padding:16px; background:var(--em-surface); border-radius:8px; font-size:14px; line-height:1.8; font-style:italic;">"The agent will happily generate briefings and org charts all day long. It will never — not once — tell you to stop planning and go wire up a sensor."</p>';
    h += '</div>';

    // ── OVER-SCAFFOLDING: the diagnosis ──
    h += '<div class="em-card" style="border-left:4px solid #c0392b; border-top:4px solid #c0392b;"><h3 style="color:#c0392b; font-size:18px;">🏗️ The Over-Scaffolding Problem</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">Phase 1 wasn\'t a failure of AI. It was a failure of <strong>direction</strong>. Andrew had fallen into the over-scaffolding trap — the pattern where AI builds the <em>appearance</em> of a business (plans, processes, governance, structure) while the actual business remains unbuilt.</p>';
    h += '<p style="margin-top:10px; font-size:14px; line-height:1.8;">Over-scaffolding is seductive because the output is genuinely impressive. A 40-page business plan with charts and competitor matrices <em>looks</em> like progress. An org chart with defined roles <em>looks</em> like a real company. But look closer:</p>';
    h += '</div>';

    h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:16px;">';
    h += '<div class="em-card" style="border-left:4px solid #c0392b;"><h3 style="color:#c0392b; font-size:14px;">The Scaffolding (Feels Like Work)</h3>';
    h += '<ul style="font-size:13px; line-height:2; padding-left:16px;">';
    h += '<li>Business plans nobody reads</li>';
    h += '<li>Org charts for one person</li>';
    h += '<li>Brand guidelines with no product</li>';
    h += '<li>Cost models with no revenue</li>';
    h += '<li>Decision matrices with no decisions</li>';
    h += '<li>Risk registers for things that don\'t exist</li>';
    h += '</ul></div>';
    h += '<div class="em-card green-accent"><h3 style="font-size:14px;">The Building (Actually IS Work)</h3>';
    h += '<ul style="font-size:13px; line-height:2; padding-left:16px;">';
    h += '<li>A working prototype a customer can use</li>';
    h += '<li>A dashboard showing real data</li>';
    h += '<li>An automation that saves real time</li>';
    h += '<li>A tool that generates real revenue</li>';
    h += '<li>Something you can demo on Sunday</li>';
    h += '<li>Code running on a server right now</li>';
    h += '</ul></div>';
    h += '</div>';

    h += '<div class="em-card"><h3>Why AI Over-Scaffolds</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">AI agents aren\'t trying to trick you. They\'re doing exactly what you ask. The problem is that <strong>"plan my business" is an infinitely expandable prompt</strong>. There\'s always another competitor to research, another financial scenario to model, another process to document. The agent will never say "that\'s enough planning." It has no concept of <em>enough</em>.</p>';
    h += '<p style="margin-top:10px; font-size:14px; line-height:1.8;">That\'s your job. <strong>You</strong> are the one who has to say: "Stop scaffolding. Start building."</p>';
    h += '</div>';

    h += '<div class="em-card"><h3>💡 The Lesson</h3>';
    h += '<p style="font-size:14px; line-height:1.8;"><strong>You need to be the director, not the audience.</strong> AI is the most capable intern in history — brilliant at execution, terrible at knowing what matters. It will scaffold forever unless you redirect it to build. That judgment call — knowing when to stop planning and start making — is the single most valuable skill in the AI era.</p>';
    h += '</div>';

    return { html: h };
  }

  function renderProofPhase3() {
    var h = '';
    h += '<div class="em-section-header">Phase 3: The Breakthrough</div>';

    h += '<div class="em-story"><div class="em-story-quote">"I stopped letting AI plan and started directing it to build. The results in two weeks were staggering."</div></div>';

    h += '<div class="em-card green-accent"><h3>The Shift</h3>';
    h += '<p>Instead of asking AI "what should we do?", Andrew started saying "build this." Instead of generating documents, they generated <strong>working tools</strong>.</p>';
    h += '</div>';

    h += '<div class="em-section-header">Built in 2 Weeks</div>';

    var tools = [
      { emoji: '📐', name: 'Parametric 3D Configurator', desc: 'Interactive shed designer with real-time controls — width, depth, roof type, doors, windows, materials. Shareable via URL.' },
      { emoji: '🌾', name: 'Whelpley Farm Dashboard', desc: 'Complete farm management interface — financials by segment, spray records, cropping plans, calendar. Built in one day.' },
      { emoji: '📋', name: 'Project Management System', desc: 'Kanban board with persistent state, categories, priorities. Deployed on GitHub Pages.' },
      { emoji: '🤖', name: 'AI Operations Assistant', desc: 'An AI agent that reads email, checks calendar, manages projects across three businesses simultaneously.' },
      { emoji: '📊', name: 'Financial Data Pipeline', desc: 'Automated ingestion of Xero exports into structured JSON for dashboard visualisation.' },
      { emoji: '📄', name: 'PDF Spray Record Parser', desc: 'Automated extraction of field spray records from agronomist PDFs into structured data.' },
      { emoji: '🎬', name: 'Animation Capture Pipeline', desc: 'Scripted camera sequences → frame capture → FFmpeg → marketing videos. Fully automated.' },
      { emoji: '☕', name: 'This Dashboard', desc: 'The AI Coaching business planning dashboard you\'re looking at right now.' }
    ];

    h += '<div class="em-tool-grid">';
    tools.forEach(function(t) {
      h += '<div class="em-tool-card"><div class="tool-emoji">' + t.emoji + '</div><div class="tool-name">' + t.name + '</div><div class="tool-desc">' + t.desc + '</div><div class="tool-status live">Working</div></div>';
    });
    h += '</div>';

    h += '<div class="em-card"><h3>The Difference</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">Phase 1 produced 60 documents nobody read. Phase 3 produced 8 working tools that are being used every day. Same AI. Same person. Different <strong>direction</strong>.</p>';
    h += '</div>';

    return { html: h };
  }

  function renderProofPhase4() {
    var h = '';
    h += '<div class="em-section-header">Phase 4: The Roadmap</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Now I want to help others skip Phase 1 and go straight to Phase 3."</div></div>';

    h += '<div class="em-card"><h3>🗺️ The Realisation</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">The journey from Phase 1 (the trap) to Phase 3 (the breakthrough) was the hardest part. It required:</p>';
    h += '<ul style="margin-top:10px; padding-left:20px; line-height:2.2;">';
    h += '<li>Honest feedback at exactly the right moment</li>';
    h += '<li>Understanding the difference between output and outcome</li>';
    h += '<li>Knowing how to direct AI to build, not just plan</li>';
    h += '<li>The courage to throw away polished plans and start making</li>';
    h += '</ul></div>';

    h += '<div class="em-card green-accent"><h3>The Shortcut</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">Most people will discover AI, enter Phase 1, and stay there. They\'ll feel productive. They\'ll generate beautiful documents. And they\'ll never build anything real.</p>';
    h += '<p style="margin-top:10px; font-size:14px; line-height:1.8;"><strong>This business exists to grab people at Phase 1 and catapult them to Phase 3.</strong> Skip the trap. Start building. See real results in days, not months.</p>';
    h += '</div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">1</div>';
    h += '<div class="em-guide-content"><h4>Show them Phase 1 is a trap</h4><p>Most people don\'t know they\'re in it. The polished output feels like progress. Show them the mirror.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">2</div>';
    h += '<div class="em-guide-content"><h4>Give them a real first win</h4><p>Build something functional in the first session. A dashboard. An automation. Something that works and creates value immediately.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">3</div>';
    h += '<div class="em-guide-content"><h4>Map their personal timeline</h4><p>What should THEY automate now? What should THEY keep human? Personalised, specific, actionable.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">4</div>';
    h += '<div class="em-guide-content"><h4>Walk beside them</h4><p>Ongoing guidance as the landscape shifts. Not a course you finish — a relationship that evolves.</p></div></div>';

    return { html: h };
  }


  // ═══════════════════════════════════════════════════════════
  //  SECTION 4 — WHAT WE BUILD
  // ═══════════════════════════════════════════════════════════

  function renderProductDashboards() {
    var h = '';
    h += '<div class="em-section-header">Business Dashboards</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Custom dashboards pulling from real data. Not templates. Not mockups. Your actual numbers, your actual fields, your actual business — visualised in one place."</div></div>';

    h += '<div class="em-card green-accent"><h3>Case Study: Whelpley Farm Dashboard</h3>';
    h += '<p><strong>Built in 1 day.</strong> A 500-acre mixed farm with three business segments — arable, holiday lets, livery — all visible in one interface.</p>';
    h += '<p style="margin-top:10px;">Features:</p>';
    h += '<ul style="margin-top:6px; padding-left:20px; line-height:2;">';
    h += '<li>Financial summaries by segment and year (from Xero exports)</li>';
    h += '<li>Interactive crop distribution charts</li>';
    h += '<li>Spray record filtering and search</li>';
    h += '<li>Field management with area calculations</li>';
    h += '<li>Calendar with farm events and deadlines</li>';
    h += '<li>Ideas system with localStorage persistence</li>';
    h += '</ul></div>';

    h += '<div class="em-card"><h3>What Makes These Different</h3>';
    h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:12px;">';
    h += '<div style="padding:14px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; font-size:13px; margin-bottom:4px;">📊 Real Data</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">Not demo data. Your actual business numbers, imported and structured.</p></div>';
    h += '<div style="padding:14px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; font-size:13px; margin-bottom:4px;">⚡ Built Fast</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">Days, not months. AI writes the code. You direct the content.</p></div>';
    h += '<div style="padding:14px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; font-size:13px; margin-bottom:4px;">🎨 Beautiful</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">Not a spreadsheet screenshot. Proper UI/UX that you\'d be proud to show.</p></div>';
    h += '<div style="padding:14px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; font-size:13px; margin-bottom:4px;">🔧 Yours</p>';
    h += '<p style="font-size:12px; color:var(--em-text-muted);">No subscription. No lock-in. Files on your machine. You own it.</p></div>';
    h += '</div></div>';

    return { html: h };
  }

  function renderProductConfigurators() {
    var h = '';
    h += '<div class="em-section-header">Product Configurators</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Your customers design their own product in 3D, get an instant quote, and share the configuration via a link. Built in two weeks. No developer hired."</div></div>';

    h += '<div class="em-card green-accent"><h3>Case Study: Parametric Shed Configurator</h3>';
    h += '<p>A fully interactive 3D product configurator for custom garden buildings.</p>';
    h += '<p style="margin-top:10px;">Customers can:</p>';
    h += '<ul style="margin-top:6px; padding-left:20px; line-height:2;">';
    h += '<li>Adjust width, depth, and height in real-time 3D</li>';
    h += '<li>Choose roof types (apex, pent, hip, barn)</li>';
    h += '<li>Place doors and windows wherever they want</li>';
    h += '<li>Select cladding materials and colours</li>';
    h += '<li>Share their exact configuration via a URL</li>';
    h += '<li>Get quote-ready specifications instantly</li>';
    h += '</ul></div>';

    h += '<div class="em-card"><h3>Multiple Building Types</h3>';
    h += '<p>Not just sheds. The parametric system supports:</p>';
    h += '<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-top:12px;">';
    var types = ['Garden Office', 'Workshop', 'Log Cabin', 'Summerhouse', 'Storage Shed', 'Garage'];
    types.forEach(function(t) {
      h += '<div style="padding:12px; text-align:center; background:var(--em-surface); border-radius:8px; font-size:13px; font-weight:600;">🏠 ' + t + '</div>';
    });
    h += '</div></div>';

    h += '<div class="em-card"><h3>Technical Stack</h3>';
    h += '<ul style="padding-left:20px; line-height:2; font-size:13px;">';
    h += '<li><strong>Babylon.js</strong> — Real-time 3D rendering in the browser</li>';
    h += '<li><strong>Parametric geometry</strong> — Every dimension is a variable</li>';
    h += '<li><strong>Base64 config URLs</strong> — Shareable configurations</li>';
    h += '<li><strong>Animation pipeline</strong> — Automated marketing video capture</li>';
    h += '</ul></div>';

    return { html: h };
  }

  function renderProductAIWorkflows() {
    var h = '';
    h += '<div class="em-section-header">AI Workflows</div>';

    h += '<div class="em-story"><div class="em-story-quote">"An AI assistant that knows your business. Reads your data, tracks your projects, and works while you sleep. Not science fiction — it\'s running right now."</div></div>';

    h += '<div class="em-card green-accent"><h3>Case Study: James</h3>';
    h += '<p>Andrew\'s AI assistant — named James — manages three businesses simultaneously:</p>';
    h += '<ul style="margin-top:10px; padding-left:20px; line-height:2;">';
    h += '<li>🌾 <strong>Whelpley Farm</strong> — Financial tracking, spray records, field management</li>';
    h += '<li>🏠 <strong>Garden Buildings</strong> — 3D configurator, customer quotes, project management</li>';
    h += '<li>☕ <strong>AI Coaching</strong> — This dashboard, content strategy, client pipeline</li>';
    h += '</ul></div>';

    h += '<div class="em-card"><h3>What James Does Daily</h3>';
    h += '<ul class="em-checklist">';
    h += '<li class="done"><span class="em-check">✓</span> Checks email and surfaces urgent items</li>';
    h += '<li class="done"><span class="em-check">✓</span> Reviews calendar and preps for meetings</li>';
    h += '<li class="done"><span class="em-check">✓</span> Updates project boards across all three businesses</li>';
    h += '<li class="done"><span class="em-check">✓</span> Monitors data pipelines for errors</li>';
    h += '<li class="done"><span class="em-check">✓</span> Captures memory and context across sessions</li>';
    h += '<li class="done"><span class="em-check">✓</span> Builds tools and dashboards on command</li>';
    h += '</ul></div>';

    h += '<div class="em-card"><h3>The Key Insight</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">James isn\'t a chatbot. He\'s not a search engine. He\'s an <strong>operating system for the business</strong>. He has persistent memory, access to files and data, and the ability to use tools — browser, email, calendar, terminal. The difference between a chatbot and an AI assistant is like the difference between a calculator and an employee.</p>';
    h += '</div>';

    return { html: h };
  }

  function renderProductAutomation() {
    var h = '';
    h += '<div class="em-section-header">Automation</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Data flows in. Insight comes out. From farm spray records to financial summaries — everything that used to take hours now takes seconds."</div></div>';

    h += '<div class="em-card"><h3>The Automation Stack</h3></div>';

    var automations = [
      { icon: '📄', name: 'PDF Ingestion', desc: 'Spray records arrive as PDFs from the agronomist. AI reads them, extracts field names, products, rates, and dates, structures everything into clean JSON.', status: 'Live' },
      { icon: '💷', name: 'Financial Processing', desc: 'Xero CSV exports are parsed, categorised by business segment, and fed into the dashboard. Year-on-year comparisons happen automatically.', status: 'Live' },
      { icon: '📧', name: 'Email Triage', desc: 'AI checks the inbox, summarises what\'s urgent, drafts replies for review. 30+ minutes saved daily.', status: 'Live' },
      { icon: '🎬', name: 'Marketing Video Pipeline', desc: 'Scripted camera sequences capture 3D configurator animations frame-by-frame. FFmpeg stitches them into polished marketing videos.', status: 'Live' },
      { icon: '📊', name: 'Automated Reporting', desc: 'Weekly business performance summaries compiled from all data sources and delivered via messaging.', status: 'Building' },
      { icon: '🔄', name: 'Data Sync', desc: 'Changes in source data automatically flow through to dashboards. No manual refresh. No copy-paste.', status: 'Live' }
    ];

    h += '<div class="em-workflow-grid">';
    automations.forEach(function(a) {
      var cls = a.status === 'Live' ? 'active' : 'planned';
      h += '<div class="em-workflow-card"><div class="wf-icon">' + a.icon + '</div><div class="wf-name">' + a.name + '</div><div class="wf-desc">' + a.desc + '</div><div class="wf-status ' + cls + '">' + a.status + '</div></div>';
    });
    h += '</div>';

    h += '<div class="em-card"><h3>The Pattern</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">Every automation follows the same recipe: <strong>messy input → AI processing → clean data → visual output</strong>. Once you understand this pattern, you can automate almost anything in your business.</p>';
    h += '</div>';

    return { html: h };
  }


  // ═══════════════════════════════════════════════════════════
  //  SECTION 5 — GO TO MARKET
  // ═══════════════════════════════════════════════════════════

  function renderGTMTarget() {
    var h = '';
    h += '<div class="em-section-header">Target Customer</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Small business owners and skilled professionals who feel threatened by AI but are secretly curious. People with real expertise who need a guide, not a lecture."</div></div>';

    h += '<div class="em-card"><h3>👤 The Ideal Client</h3>';
    h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:12px;">';

    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; font-size:13px; margin-bottom:8px;">They ARE:</p>';
    h += '<ul style="font-size:12px; line-height:2; padding-left:16px;">';
    h += '<li>Skilled at their craft</li>';
    h += '<li>Running or managing a small business</li>';
    h += '<li>Good with their hands or their field</li>';
    h += '<li>Feeling the pressure from AI headlines</li>';
    h += '<li>Secretly curious but don\'t know where to start</li>';
    h += '</ul></div>';

    h += '<div style="padding:16px; background:var(--em-surface); border-radius:8px;">';
    h += '<p style="font-weight:700; font-size:13px; margin-bottom:8px;">They\'re NOT:</p>';
    h += '<ul style="font-size:12px; line-height:2; padding-left:16px;">';
    h += '<li>Software developers</li>';
    h += '<li>Enterprise executives</li>';
    h += '<li>Already AI-fluent</li>';
    h += '<li>Looking for a tech course</li>';
    h += '<li>Interested in hype or jargon</li>';
    h += '</ul></div>';

    h += '</div></div>';

    h += '<div class="em-card"><h3>Industries That Fit</h3>';
    h += '<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:12px;">';
    var industries = [
      { emoji: '🌾', name: 'Agriculture' },
      { emoji: '🔨', name: 'Construction' },
      { emoji: '🏠', name: 'Property' },
      { emoji: '🎨', name: 'Creative Trades' },
      { emoji: '🏪', name: 'Retail / Hospitality' },
      { emoji: '⚕️', name: 'Health / Wellness' },
      { emoji: '📦', name: 'Logistics' },
      { emoji: '🔧', name: 'Skilled Trades' },
      { emoji: '📐', name: 'Architecture / Design' }
    ];
    industries.forEach(function(ind) {
      h += '<div style="padding:12px; text-align:center; background:var(--em-surface); border-radius:8px; font-size:12px; font-weight:600;">' + ind.emoji + ' ' + ind.name + '</div>';
    });
    h += '</div></div>';

    return { html: h };
  }

  function renderGTMModel() {
    var h = '';
    h += '<div class="em-section-header">Service Model</div>';

    h += '<div class="em-card"><h3>🏗️ The Growth Path</h3>';
    h += '<p>Start narrow, go deep, then scale. Document everything along the way.</p></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">1</div>';
    h += '<div class="em-guide-content"><h4>Start: 1-to-1 Consultancy</h4><p>Work directly with individual business owners. Learn their problems firsthand. Build real tools for real businesses. This creates the case studies and the content.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">2</div>';
    h += '<div class="em-guide-content"><h4>Document: Capture Everything</h4><p>Record sessions. Screenshot progress. Write up the journey. Every client engagement produces content that feeds the next stage.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">3</div>';
    h += '<div class="em-guide-content"><h4>Productise: Course + Community</h4><p>Turn the documented journeys into a structured course. Build a community of graduates who help each other. Recurring revenue.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num">4</div>';
    h += '<div class="em-guide-content"><h4>Scale: All Four Lanes</h4><p>Run all revenue streams simultaneously. Each feeds the others.</p></div></div>';

    h += '<div class="em-section-header">Four Revenue Lanes</div>';

    var lanes = [
      { letter: 'A', name: 'Consultancy & Coaching', desc: 'High-touch, 1-to-1 engagements. Premium pricing. The relationship-first lane.', color: '#B45309' },
      { letter: 'B', name: 'Course & Community', desc: 'Structured self-serve content plus a community. Lower price point, higher volume.', color: '#D97706' },
      { letter: 'C', name: 'Done-For-You Service', desc: 'We build your dashboard / configurator / automation for you. Premium pricing, defined scope.', color: '#3A7D1C' },
      { letter: 'D', name: 'All of the Above', desc: 'The full ecosystem. Consultancy feeds the course, the course feeds the community, the community generates done-for-you leads.', color: '#292524' },
      { letter: 'E', name: 'Starter Packs & Templates', desc: 'Pre-built operational scaffolds for specific business types. Clone a dashboard, project board, financial model, and go-to-market plan — then customise. Like Shopify themes but for entire businesses. Build once, sell infinitely. The most scalable lane.', color: '#B45309' }
    ];

    lanes.forEach(function(l) {
      h += '<div class="em-card" style="border-left:4px solid ' + l.color + ';">';
      h += '<h3 style="color:' + l.color + ';">Lane ' + l.letter + ': ' + l.name + '</h3>';
      h += '<p>' + l.desc + '</p></div>';
    });

    return { html: h };
  }

  function renderGTMVenue() {
    var h = '';
    h += '<div class="em-section-header">The Venue</div>';

    h += '<div class="em-story"><div class="em-story-quote">"Society of Builders workshops in a beautifully catered-for environment."</div></div>';

    h += '<div class="em-card"><h3>🏊 The Physical Home</h3>';
    h += '<p>Most AI coaching is screen-based. Ours has a swimming pool.</p>';
    h += '<p style="margin-top:12px;">We have access to a stunning property — sleeps 16–18, indoor swimming pool, beautiful grounds — that sits empty most weekdays. This becomes the physical home for Ember retreats and workshops.</p>';
    h += '</div>';

    h += '<div class="em-section-header">Retreat Format</div>';

    h += '<div class="em-guide-step"><div class="em-guide-num" style="background:var(--em-primary);">1</div>';
    h += '<div class="em-guide-content"><h4>Day 1: Foundation</h4><p>Set up your AI assistant. First conversation with AI about YOUR business. Identify quick wins. Evening: dinner + networking with other builders.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num" style="background:var(--em-primary);">2</div>';
    h += '<div class="em-guide-content"><h4>Day 2: Build</h4><p>Build your first dashboard with live data. Set up automation. Create your roadmap. By end of day: a working tool you can show your team.</p></div></div>';

    h += '<div class="em-guide-step"><div class="em-guide-num" style="background:var(--em-green);">3</div>';
    h += '<div class="em-guide-content"><h4>Day 3: Launch</h4><p>Polish and deploy. Plan your next 30 days. Join the alumni community. Leave with confidence, tools, and a network of fellow builders.</p></div></div>';

    h += '<div class="em-section-header">The Numbers</div>';
    h += '<div class="em-kpi-grid">';
    h += '<div class="em-kpi"><div class="em-kpi-icon">👥</div><div class="em-kpi-value">8–12</div><div class="em-kpi-label">per cohort</div></div>';
    h += '<div class="em-kpi"><div class="em-kpi-icon">🛏️</div><div class="em-kpi-value">16–18</div><div class="em-kpi-label">beds available</div></div>';
    h += '<div class="em-kpi"><div class="em-kpi-icon">💷</div><div class="em-kpi-value">£1.5–3k</div><div class="em-kpi-label">per person</div></div>';
    h += '<div class="em-kpi"><div class="em-kpi-icon">📅</div><div class="em-kpi-value">Weekdays</div><div class="em-kpi-label">zero opportunity cost</div></div>';
    h += '</div>';

    h += '<div class="em-card green-accent"><h3>Cross-Business Synergy</h3>';
    h += '<p>The venue is part of the holiday let business. Ember provides the content and facilitation. The holiday let provides accommodation and catering. Both businesses benefit:</p>';
    h += '<ul style="padding-left:20px; line-height:2; font-size:13px; margin-top:8px;">';
    h += '<li><strong>Holiday Let:</strong> fills weekday voids with premium guests</li>';
    h += '<li><strong>Ember:</strong> gets a stunning venue without owning property</li>';
    h += '<li><strong>Guests:</strong> get an immersive experience no online course can match</li>';
    h += '</ul></div>';

    return { html: h };
  }

  function renderGTMPitch() {
    var h = '';
    h += '<div class="em-section-header">The Pitch</div>';

    h += '<div class="em-story" style="padding:32px;"><div class="em-story-quote" style="font-size:20px; line-height:1.5;">"You\'re not being replaced. You\'re being upgraded. Here\'s the proof. Here\'s the path. Let\'s go."</div></div>';

    h += '<div class="em-card"><h3>What We\'re Really Selling</h3>';
    h += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:12px;">';

    h += '<div style="padding:20px; background:var(--em-primary-bg); border-radius:8px; text-align:center;">';
    h += '<p style="font-size:32px; margin-bottom:8px;">🛡️</p>';
    h += '<p style="font-size:16px; font-weight:700; color:var(--em-primary); margin-bottom:6px;">Confidence</p>';
    h += '<p style="font-size:12px; color:var(--em-text-secondary); line-height:1.6;">The belief that you can do this. That it\'s not too late. That your skills still matter — they just got an upgrade.</p>';
    h += '</div>';

    h += '<div style="padding:20px; background:var(--em-primary-bg); border-radius:8px; text-align:center;">';
    h += '<p style="font-size:32px; margin-bottom:8px;">🗺️</p>';
    h += '<p style="font-size:16px; font-weight:700; color:var(--em-primary); margin-bottom:6px;">The Map</p>';
    h += '<p style="font-size:12px; color:var(--em-text-secondary); line-height:1.6;">A clear, honest, personalised roadmap of what to automate, what to keep, and how the balance shifts over time.</p>';
    h += '</div>';

    h += '</div></div>';

    h += '<div class="em-card"><h3>Not Selling</h3>';
    h += '<ul style="padding-left:20px; line-height:2.2; font-size:13px;">';
    h += '<li>❌ Technology — we don\'t sell AI tools or subscriptions</li>';
    h += '<li>❌ Fear — we don\'t scare people into buying</li>';
    h += '<li>❌ Hype — we don\'t promise AI will solve everything</li>';
    h += '<li>❌ Complexity — we don\'t use jargon or assume technical knowledge</li>';
    h += '</ul></div>';

    h += '<div class="em-card green-accent"><h3>The Elevator Pitch</h3>';
    h += '<p style="font-size:14px; line-height:1.8;">"I was a one-man shed builder using spreadsheets. In two weeks, with AI as my co-pilot, I built three businesses, a 3D product configurator, live dashboards, and automated half my admin. No developer. No massive investment. Now I help other business owners do the same — skip the fear, skip the hype, and go straight to results."</p>';
    h += '</div>';

    return { html: h };
  }

  function renderGTMFirstSteps() {
    var h = '';
    h += '<div class="em-section-header">First Steps</div>';

    h += '<div class="em-card"><h3>👣 Immediate Actions</h3></div>';

    var steps = [
      {
        title: 'Sunday Demo',
        desc: 'First presentation to a potential collaborator — a senior marketeer with Lego and Olympics credentials. This is the proof-of-concept pitch.',
        status: 'THIS WEEK',
        statusColor: '#3A7D1C'
      },
      {
        title: 'GrowCabin Revamp',
        desc: 'Take the original AI-planned business (the Phase 1 example) and rebuild it properly using Phase 3 methodology. Living case study.',
        status: 'NEXT',
        statusColor: '#B45309'
      },
      {
        title: 'Showcase Presentation',
        desc: 'Build a killer presentation using this dashboard + live demos of the configurator and farm dashboard. Show, don\'t tell.',
        status: 'NEXT',
        statusColor: '#B45309'
      },
      {
        title: 'First Paid Client',
        desc: 'Find one small business owner willing to be a case study. Build their dashboard/tool at a reduced rate. Document everything.',
        status: 'MONTH 1',
        statusColor: '#D97706'
      },
      {
        title: 'Content Pipeline',
        desc: 'Start publishing: the Phase 1-4 story, the Human Edge roadmap, client case studies. LinkedIn, newsletter, maybe video.',
        status: 'MONTH 1-2',
        statusColor: '#D97706'
      },
      {
        title: 'Course Outline',
        desc: 'Structure the repeatable version. What do clients always need first? Build that as a self-serve module.',
        status: 'MONTH 2-3',
        statusColor: '#292524'
      }
    ];

    steps.forEach(function(s) {
      h += '<div class="em-guide-step"><div class="em-guide-num" style="background:' + s.statusColor + '; font-size:8px; width:48px; min-width:48px; border-radius:6px;">' + s.status + '</div>';
      h += '<div class="em-guide-content"><h4>' + s.title + '</h4><p>' + s.desc + '</p></div></div>';
    });

    h += '<div class="em-card" style="background:var(--em-primary-bg); border:2px solid var(--em-primary);">';
    h += '<h3 style="text-align:center;">☕ The Sunday Demo</h3>';
    h += '<p style="text-align:center; font-size:14px; line-height:1.8; margin-top:8px;">The first external test of this entire vision. One senior marketeer. One Sunday afternoon. Walk through this dashboard, demo the configurator live, tell the Phase 1-4 story, and ask: <strong>"Would you partner on this?"</strong></p>';
    h += '</div>';

    return { html: h };
  }


  // ═══════════════════════════════════════════════════════════
  //  SECTION 6 — IDEAS (localStorage CRUD)
  // ═══════════════════════════════════════════════════════════

  var IDEAS_KEY = 'em_coaching_ideas';
  function loadIdeas() { try { return JSON.parse(localStorage.getItem(IDEAS_KEY)) || []; } catch(e) { return []; } }
  function saveIdeas(ideas) { localStorage.setItem(IDEAS_KEY, JSON.stringify(ideas)); }

  function updateIdeasDashboard() {
    var ideas = loadIdeas();
    var counts = { total: ideas.length, 'new': 0, active: 0, done: 0 };
    ideas.forEach(function(i) {
      if (i.status === 'new') counts['new']++;
      else if (i.status === 'active') counts.active++;
      else if (i.status === 'done') counts.done++;
    });
    var sec = sections.ideas;
    sec.dashboard[0].value = counts.total.toString();
    sec.dashboard[1].value = counts['new'].toString();
    sec.dashboard[2].value = counts.active.toString();
    sec.dashboard[3].value = counts.done.toString();
    if (currentSection === 'ideas') renderDashboard(sec);
  }

  function renderIdeasList() {
    var ideas = loadIdeas();
    var statusLabels = { 'new': '🆕 New', 'active': '🔧 Active', 'parked': '⏸️ Parked', 'done': '✅ Done' };
    var statusColors = { 'new': '#D97706', 'active': '#B45309', 'parked': '#A8A29E', 'done': '#3A7D1C' };
    var h = '<div class="ideas-page">';
    h += '<div class="em-section-header">All Ideas (' + ideas.length + ')</div>';
    if (ideas.length === 0) {
      h += '<div class="em-empty-state"><div class="empty-icon">💡</div><h4>No ideas yet</h4><p>Use "Add New Idea" to capture your first idea!</p></div>';
    } else {
      var groups = { 'active': [], 'new': [], 'parked': [], 'done': [] };
      ideas.forEach(function(idea) {
        var st = idea.status || 'new';
        if (!groups[st]) groups[st] = [];
        groups[st].push(idea);
      });
      ['active', 'new', 'parked', 'done'].forEach(function(status) {
        var group = groups[status];
        if (!group || !group.length) return;
        h += '<div class="ideas-status-group">';
        h += '<div class="ideas-status-label" style="color:' + statusColors[status] + '">' + statusLabels[status] + ' (' + group.length + ')</div>';
        group.forEach(function(idea) {
          h += '<details class="idea-card" data-id="' + idea.id + '">';
          h += '<summary class="idea-summary"><span class="idea-title">' + idea.title + '</span>';
          h += '<span class="idea-date">' + (idea.created ? new Date(idea.created).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '') + '</span></summary>';
          h += '<div class="idea-body">';
          var content = (idea.content || '').replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          h += '<div class="idea-content">' + content + '</div>';
          h += '<div class="idea-actions"><select class="idea-status-change" data-id="' + idea.id + '">';
          Object.keys(statusLabels).forEach(function(s) {
            h += '<option value="' + s + '"' + (s === idea.status ? ' selected' : '') + '>' + statusLabels[s] + '</option>';
          });
          h += '</select><button class="idea-delete" data-id="' + idea.id + '">🗑️ Delete</button>';
          h += '</div></div></details>';
        });
        h += '</div>';
      });
    }
    h += '</div>';
    return { html: h, afterRender: function() {
      document.querySelectorAll('.idea-status-change').forEach(function(sel) {
        sel.addEventListener('change', function() {
          var id = sel.getAttribute('data-id');
          var ideas = loadIdeas();
          ideas.forEach(function(i) { if (i.id === id) i.status = sel.value; });
          saveIdeas(ideas);
          updateIdeasDashboard();
          openFlyoutContent('All Ideas');
        });
      });
      document.querySelectorAll('.idea-delete').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var id = btn.getAttribute('data-id');
          var ideas = loadIdeas().filter(function(i) { return i.id !== id; });
          saveIdeas(ideas);
          updateIdeasDashboard();
          openFlyoutContent('All Ideas');
        });
      });
    }};
  }

  function renderIdeasAdd() {
    var h = '<div class="em-section-header">Add New Idea</div>';
    h += '<div class="ideas-add">';
    h += '<input type="text" id="ideaTitle" class="em-input" placeholder="Idea title...">';
    h += '<textarea id="ideaContent" class="em-input em-textarea" placeholder="Describe the idea, context, pros/cons..."></textarea>';
    h += '<div class="em-btn-row"><div class="em-btn-half"><select id="ideaStatus" class="em-input"><option value="new">🆕 New</option><option value="active">🔧 Active</option><option value="parked">⏸️ Parked</option></select></div></div>';
    h += '<button id="ideaSaveBtn" class="em-btn" style="width:100%; margin-top:8px;">💡 Save Idea</button>';
    h += '</div>';
    return { html: h, afterRender: function() {
      document.getElementById('ideaSaveBtn').addEventListener('click', function() {
        var title = document.getElementById('ideaTitle').value.trim();
        if (!title) return;
        var ideas = loadIdeas();
        ideas.push({ id: Date.now().toString(36), title: title, status: document.getElementById('ideaStatus').value, content: document.getElementById('ideaContent').value.trim(), created: new Date().toISOString() });
        saveIdeas(ideas);
        updateIdeasDashboard();
        openFlyoutContent('All Ideas');
        navSteps.querySelectorAll('.em-step').forEach(function(s) {
          if (s.getAttribute('data-step') === 'All Ideas') setActiveStep(s);
        });
      });
    }};
  }


  // ═══════════════════════════════════════════════════════════
  //  FLYOUT ROUTING
  // ═══════════════════════════════════════════════════════════

  function openFlyoutContent(stepName) {
    var result;

    if (currentSection === "vision") {
      switch (stepName) {
        case "The Problem":       result = renderVisionProblem(); break;
        case "The Opportunity":   result = renderVisionOpportunity(); break;
        case "The Mission":       result = renderVisionMission(); break;
        case "Brand Positioning": result = renderVisionBrand(); break;
        default: result = { html: '<p>Coming soon.</p>' };
      }
    } else if (currentSection === "human-edge") {
      switch (stepName) {
        case "What Humans Still Own":   result = renderHumanOwn(); break;
        case "The Convergence Roadmap": result = renderConvergenceRoadmap(); break;
        case "The Insight":             result = renderHumanInsight(); break;
        default: result = { html: '<p>Coming soon.</p>' };
      }
    } else if (currentSection === "proof") {
      switch (stepName) {
        case "The Journey":               result = renderProofJourney(); break;
        case "Phase 1: The Experiment":   result = renderProofPhase1(); break;
        case "Phase 2: The Mirror":       result = renderProofPhase2(); break;
        case "Phase 3: The Breakthrough": result = renderProofPhase3(); break;
        case "Phase 4: The Roadmap":      result = renderProofPhase4(); break;
        default: result = { html: '<p>Coming soon.</p>' };
      }
    } else if (currentSection === "products") {
      switch (stepName) {
        case "Business Dashboards":   result = renderProductDashboards(); break;
        case "Product Configurators": result = renderProductConfigurators(); break;
        case "AI Workflows":          result = renderProductAIWorkflows(); break;
        case "Automation":            result = renderProductAutomation(); break;
        default: result = { html: '<p>Coming soon.</p>' };
      }
    } else if (currentSection === "go-to-market") {
      switch (stepName) {
        case "Target Customer": result = renderGTMTarget(); break;
        case "Service Model":   result = renderGTMModel(); break;
        case "The Venue":       result = renderGTMVenue(); break;
        case "The Pitch":       result = renderGTMPitch(); break;
        case "First Steps":     result = renderGTMFirstSteps(); break;
        default: result = { html: '<p>Coming soon.</p>' };
      }
    } else if (currentSection === "ideas") {
      if (stepName === "All Ideas") result = renderIdeasList();
      else if (stepName === "Add New Idea") result = renderIdeasAdd();
      else result = { html: '<p>Coming soon.</p>' };
    } else {
      result = { html: '<div class="em-empty-state"><div class="empty-icon">☕</div><h4>' + stepName + '</h4><p>Content coming soon.</p></div>' };
    }

    flyoutTitle.textContent = stepName;
    flyoutBody.innerHTML = result.html;
    flyout.classList.add("open");
    if (result.afterRender) setTimeout(result.afterRender, 50);
  }

  function openFlyout(stepName) { openFlyoutContent(stepName); }

  function closeFlyout() {
    flyout.classList.remove("open");
    setActiveStep(null);
    Object.keys(activeCharts).forEach(function(k) { activeCharts[k].destroy(); delete activeCharts[k]; });
  }

  flyoutClose.addEventListener("click", closeFlyout);

  // ── Section switcher ──
  function switchSection(key) {
    currentSection = key;
    var sec = sections[key];
    if (!sec) return;
    closeFlyout();
    if (key === 'ideas') updateIdeasDashboard();
    renderDashboard(sec);
    renderSteps(sec);
  }

  bizSelect.addEventListener("change", function () { switchSection(bizSelect.value); });

  // ── Init ──
  updateIdeasDashboard();
  switchSection("vision");

})();
