/* Ascending Together · page engine. Builds every section from content.js.
   You normally never need to edit this file. */
(function () {
  const C = window.CONTENT;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fill = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const cta = (label, cls = "btn") => `<a class="${cls}" href="#plan" data-cta>${esc(label)} <span class="arr" aria-hidden="true">→</span></a>`;
  const initials = n => n.split(/\s+/).filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join("") || "★";

  /* ---------- HERO ---------- */
  const H = C.hero;
  fill("hero", `
    <div class="hero-copy">
      <p class="eyebrow">${esc(H.eyebrow)}</p>
      <h1><span class="h1a">${esc(H.titleA)}</span> <span class="h1b">${esc(H.titleB)}</span></h1>
      <p class="sub">${esc(H.subtitle)}</p>
      <div class="ctas">${cta(H.button)}<a class="btn ghost" href="#day">${esc(H.button2)}</a></div>
    </div>
    <div class="hero-media">
      <img class="hero-photo" src="${esc(H.photo)}" alt="Team retreat group photo" fetchpriority="high">
      <div class="hero-collage">${H.photos.map((p, i) => `<figure class="pol p${i + 1}"><img src="${esc(p)}" alt="" loading="${i ? "lazy" : "eager"}"></figure>`).join("")}</div>
    </div>`);

  fill("proof", C.proof.map(p => `<div class="stat"><strong>${esc(p.number)}</strong><span>${esc(p.label)}</span></div>`).join(""));

  const logoRow = C.logos.map(l => `<img${l.tall ? ' class="tall"' : ""} src="${esc(l.file)}" alt="${esc(l.name)}" title="${esc(l.name)}" loading="lazy">`).join("");
  fill("logos", `<p class="label">Retreats run for</p>
    <div class="marquee"><div class="track">${logoRow}<span aria-hidden="true" class="dup">${logoRow}</span></div></div>
    ${(C.moreLogos || []).length ? (() => { const r = C.moreLogos.map((l, i) => l.file ? `<img src="${esc(l.file)}" alt="${esc(l.name)}" loading="lazy">` : `<span class="wm w${i % 3}">${esc(l.name)}</span>`).join("");
      return `<div class="marquee m2"><div class="track rev">${r}<span aria-hidden="true" class="dup">${r}</span></div></div>`; })() : ""}
    ${C.moreClients ? `<p class="more">${esc(C.moreClients)}</p>` : ""}`);

  /* ---------- VIDEOS ---------- */
  const V = C.videos;
  fill("videos", `
    <div class="v-copy">
      <p class="eyebrow">${esc(V.eyebrow)}</p>
      <h2>${esc(V.title)}</h2>
      <p class="lede">${esc(V.text)}</p>
      <ol class="loop">${V.steps.map(s => `<li><b>${esc(s.word)}</b><span>${esc(s.text)}</span></li>`).join("")}</ol>
      <div class="cta-row">${cta("Get a retreat plan for my team")}</div>
    </div>
    <div class="v-media">${V.items.map(v => `
      <figure class="vid ${esc(v.shape)}">
        <video src="${esc(v.file)}" poster="${esc(v.poster)}" controls playsinline preload="none"></video>
        <figcaption>${esc(v.label)}</figcaption>
      </figure>`).join("")}</div>`);

  /* ---------- WHY ---------- */
  fill("why", `
    <div class="head"><p class="eyebrow">Why teams pick us</p><h2>${esc(C.why.title)}</h2><p class="lede">${esc(C.why.text)}</p></div>
    <div class="why-grid">${C.why.points.map((p, i) => `
      <div class="why-item c${i % 3}"><span class="mk">${i + 1}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></div>`).join("")}</div>`);

  /* ---------- PORTFOLIO ---------- */
  fill("portfolio", `
    <div class="head"><p class="eyebrow">Past retreats</p><h2>Teams who've climbed with us</h2></div>
    <div class="port">${C.portfolio.map((p, i) => `
      <article class="card c${i % 3}">
        <div class="shots-strip n${Math.min(p.photos.length, 4)}">${p.photos.slice(0, 4).map((ph, j) => `<img src="${esc(ph)}" alt="${j ? "" : esc(p.name) + " retreat"}" loading="lazy">`).join("")}
          ${p.big ? `<span class="badge">${esc(p.big)}<small>${esc(p.unit)}</small></span>` : ""}</div>
        <div class="body"><h3>${esc(p.name)}</h3><div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div><p>${esc(p.text)}</p></div>
      </article>`).join("")}</div>
    <div class="more-port">${C.morePortfolio.map((m, i) => `<div class="mini c${i % 3}"><strong>${esc(m.big)}</strong><div><b>${esc(m.name)}</b><span>${esc(m.note)}</span></div></div>`).join("")}</div>
    ${(C.films || []).length ? `<div class="films"><div class="films-head"><p class="rv-title">${esc(C.filmsTitle || "Retreat films")}</p>${C.filmsText ? `<p class="films-text">${esc(C.filmsText)}</p>` : ""}</div><div class="films-grid">${C.films.map(f => `
      <figure class="film ${esc(f.shape || "wide")}"><video src="${esc(f.file)}" poster="${esc(f.poster)}" controls playsinline preload="none"></video><figcaption>${esc(f.label)}</figcaption></figure>`).join("")}</div></div>` : ""}
    ${(C.retreatVideos || []).length ? `<div class="rv"><p class="rv-title">Watch more retreats</p><div class="rv-list">${C.retreatVideos.map((v, i) => `
      <a class="rv-chip c${i % 3}" href="${esc(v.link)}" target="_blank" rel="noopener"><span class="rv-play" aria-hidden="true"></span><span><b>${esc(v.name)}</b><small>${esc(v.note)}</small></span></a>`).join("")}</div></div>` : ""}`);

  /* ---------- RESULTS ---------- */
  const VTS = C.videoTestimonials || (C.videoTestimonial ? [C.videoTestimonial] : []);
  fill("results", `
    <div class="head"><p class="eyebrow">What clients said after</p><h2>In their own words</h2></div>
    <div class="quotes">${C.testimonials.map((t, i) => `
      <figure class="q c${i % 3}${i === 0 ? " feature" : ""}"><blockquote>${esc(t.quote)}</blockquote>
        <figcaption class="who"><span class="av">${esc(initials(t.name))}</span><span><b>${esc(t.name)}</b><small>${esc(t.org)}</small></span></figcaption></figure>`).join("")}</div>
    ${VTS.length ? `<div class="vtwall">${VTS.map(v => `<figure class="vt ${esc(v.shape || "wide")}"><video src="${esc(v.file)}" poster="${esc(v.poster)}" controls playsinline preload="none"></video><figcaption>${esc(v.caption)}</figcaption></figure>`).join("")}</div>` : ""}
    <div class="proofwall">
      ${C.screenshots.map(s => `<figure class="ss"><button type="button" class="zoom" data-src="${esc(s.file)}" aria-label="Enlarge: ${esc(s.caption)}"><img src="${esc(s.file)}" alt="${esc(s.caption)}" loading="lazy"></button><figcaption>${esc(s.caption)}</figcaption></figure>`).join("")}
    </div>`);

  /* ---------- THE DAY ---------- */
  const A = C.agenda;
  fill("day", `
    <div class="head"><p class="eyebrow">The challenges</p><h2>Games that teach. Debriefs that stick.</h2><p class="lede">Tap any challenge to see how it runs. Every one ends with a debrief that links it back to work.</p></div>
    ${C.behaviours ? `<div class="beh"><p class="beh-intro">${esc(C.behaviours.intro)}</p><div class="beh-row">${C.behaviours.items.map((b, i) => `<div class="beh-item c${i % 3}"><b>${esc(b.word)}</b><span>${esc(b.text)}</span></div>`).join("")}</div><p class="beh-anchor">${esc(C.behaviours.anchor)}</p></div>` : ""}
    <div class="route" role="tablist" aria-label="Retreat challenges">${A.map((s, i) => `
      <button type="button" class="stop c${i % 3}" role="tab" id="stop-${i}" aria-controls="stop-panel" data-i="${i}"><span class="t">${esc(s.time)}</span><span class="n">${esc(s.name)}</span></button>`).join("")}</div>
    <div class="panel" id="stop-panel" role="tabpanel" aria-live="polite"></div>
    <p class="note">${esc(C.agendaNote)}</p>`);
  const panel = $("#stop-panel");
  function pick(i) {
    const s = A[i];
    document.querySelectorAll(".stop").forEach((b, j) => b.setAttribute("aria-selected", j === i));
    panel.className = "panel c" + (i % 3);
    panel.innerHTML = `
      <div class="p-photo"><img src="${esc(s.photo)}" alt="${esc(s.name)}"></div>
      <div class="p-copy anim">
        <p class="p-stage">${esc(s.stage)}</p>
        <p class="p-meta">${esc(s.time)} · Challenge ${i + 1} of ${A.length}</p>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.text)}</p>
        ${s.name === "Scavenger Hunt" ? `<div class="teams"><span class="tm0">Toofan</span><span class="tm1">Bijli</span><span class="tm2">Aag</span></div>` : ""}
        <div class="debrief"><b>Debrief question</b><p>${esc(s.debrief)}</p></div>
        <div class="p-nav">
          <button type="button" class="pn" data-go="${i - 1}" ${i === 0 ? "disabled" : ""}>← Previous</button>
          <button type="button" class="pn" data-go="${i + 1}" ${i === A.length - 1 ? "disabled" : ""}>Next challenge →</button>
        </div>
      </div>`;
  }
  document.addEventListener("click", e => {
    const st = e.target.closest(".stop"); if (st) pick(+st.dataset.i);
    const go = e.target.closest("[data-go]"); if (go && !go.disabled) pick(+go.dataset.go);
  });
  pick(0);

  /* ---------- TRAINER ---------- */
  const T = C.trainer;
  fill("trainer", `
    <div class="t-photo"><img src="${esc(T.photo)}" alt="${esc(T.name)} facilitating a session" loading="lazy"></div>
    <div><p class="eyebrow">Your lead facilitator</p><h2>${esc(T.name)}</h2><p class="t-role">${esc(T.role)}</p><p class="lede">${esc(T.bio)}</p>
      <div class="tstats">${T.stats.map(s => `<div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join("")}</div></div>`);

  /* ---------- FORM ---------- */
  const F = C.form;
  const pills = (name, opts, type = "radio") => `<div class="pills">${opts.map((o, i) =>
    `<label><input type="${type}" name="${name}" id="${name}-${i}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("")}</div>`;
  fill("plan-copy", `<p class="eyebrow">Start here</p><h2>${esc(F.title)}</h2><p class="lede">${esc(F.text)}</p>
    <ul class="promises">${F.promises.map(p => `<li>${esc(p)}</li>`).join("")}</ul><p class="contact">${esc(C.settings.contactLine)}</p>`);
  fill("leadbox", `
    <form id="leadform" novalidate>
      <div class="progress" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
      <div class="step" data-step="1"><p class="steplabel">Step 1 of 3 · Your team</p>
        <fieldset><legend>How many people will join?</legend>${pills("team_size", F.teamSize)}</fieldset>
        <fieldset><legend>What should the retreat achieve? <small>Pick all that apply</small></legend>${pills("need", F.needs, "checkbox")}</fieldset>
      </div>
      <div class="step" data-step="2" hidden><p class="steplabel">Step 2 of 3 · Your plan</p>
        <fieldset><legend>When are you planning it?</legend>${pills("timeline", F.timeline)}</fieldset>
        <fieldset><legend>Preferred length</legend>${pills("duration", F.duration)}</fieldset>
        <fieldset><legend>Where would you like it?</legend>${pills("location", F.location)}</fieldset>
        <fieldset><legend>Is there a budget range in mind? <small>Helps us suggest the right format</small></legend>${pills("budget", F.budget)}</fieldset>
        <fieldset><legend>Your role in this decision</legend>${pills("authority", F.authority)}</fieldset>
      </div>
      <div class="step" data-step="3" hidden><p class="steplabel">Step 3 of 3 · Where we send your plan</p>
        <div class="fields">
          <div class="field"><label for="f-name">Full name</label><input id="f-name" name="name" autocomplete="name"></div>
          <div class="field"><label for="f-desig">Designation</label><input id="f-desig" name="designation" autocomplete="organization-title" placeholder="e.g. HR Manager"></div>
          <div class="field"><label for="f-company">Organization</label><input id="f-company" name="company" autocomplete="organization"></div>
          <div class="field"><label for="f-email">Work email</label><input id="f-email" name="email" type="email" autocomplete="email"></div>
          <div class="field full"><label for="f-phone">Phone / WhatsApp</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="+92 3XX XXXXXXX"></div>
        </div>
      </div>
      <p class="err" id="err" role="alert"></p>
      <div class="navrow"><button type="button" class="back" id="backbtn" hidden>← Back</button><span></span>
        <button type="submit" class="btn" id="nextbtn">Next <span class="arr" aria-hidden="true">→</span></button></div>
      <p class="fine">${esc(F.privacy)}</p>
    </form>
    <div class="thanks" id="thanks" hidden>
      <p class="eyebrow">Received</p><h3>${esc(C.thanks.title)}, <span id="t-name">there</span>!</h3><p class="lede">${esc(C.thanks.text)}</p>
      <div class="cal" id="cal"><div><b>Your Calendly booking calendar appears here</b><br><small>Add the Calendly link in content.js → settings → calendlyUrl</small></div></div>
    </div>`);

  const S = C.settings;
  if (S.jotformId) {
    $("#leadform").outerHTML = `<div class="jot"><iframe title="Retreat planning form" src="https://form.jotform.com/${esc(S.jotformId)}" allow="fullscreen"></iframe></div>`;
  }
  const form = $("#leadform");
  if (form) {
    let step = 1;
    const err = $("#err"), next = $("#nextbtn"), back = $("#backbtn"), bars = form.querySelectorAll(".progress i");
    const show = n => {
      step = n; form.querySelectorAll(".step").forEach(s => s.hidden = +s.dataset.step !== n);
      bars.forEach((b, i) => b.classList.toggle("on", i < n));
      back.hidden = n === 1;
      next.innerHTML = (n === 3 ? "See available times" : "Next") + ' <span class="arr" aria-hidden="true">→</span>';
      err.textContent = "";
    };
    const has = n => form.querySelector(`[name="${n}"]:checked`);
    const check = () => {
      if (step === 1) { if (!has("team_size")) return "Please choose your team size."; if (!has("need")) return "Please pick at least one goal."; }
      if (step === 2) for (const [k, m] of [["timeline", "when you're planning it"], ["duration", "a length"], ["location", "a location"], ["budget", "a budget option"], ["authority", "your role"]]) if (!has(k)) return `Please choose ${m}.`;
      if (step === 3) {
        for (const id of ["f-name", "f-desig", "f-company", "f-email", "f-phone"]) { const el = document.getElementById(id); if (!el.value.trim()) { el.focus(); return "Please add your " + el.labels[0].textContent.toLowerCase() + "."; } }
        if (!/^\S+@\S+\.\S+$/.test($("#f-email").value)) return "Please check your work email. It should look like name@company.com.";
      }
      return "";
    };
    back.onclick = () => show(step - 1);
    form.addEventListener("submit", e => {
      e.preventDefault();
      const m = check(); if (m) { err.textContent = m; return; }
      if (step < 3) { show(step + 1); $("#plan").scrollIntoView({ behavior: "smooth" }); return; }
      thanks($("#f-name").value);
    });
  }
  function thanks(name) {
    const f = $("#leadform"); if (f) f.hidden = true;
    $("#t-name").textContent = (name || "there").trim().split(" ")[0];
    $("#thanks").hidden = false;
    if (S.calendlyUrl) {
      $("#cal").innerHTML = `<div id="cal-widget" style="min-width:280px;height:700px"></div><p class="cal-alt">Calendar not showing? <a href="${esc(S.calendlyUrl)}" target="_blank" rel="noopener">Open it in a new tab →</a></p>`;
      const prefill = { name: ($("#f-name") || {}).value || "", email: ($("#f-email") || {}).value || "" };
      const start = () => window.Calendly && window.Calendly.initInlineWidget({ url: S.calendlyUrl + "?hide_gdpr_banner=1&primary_color=1f80e6", parentElement: document.getElementById("cal-widget"), prefill });
      if (window.Calendly) start();
      else { const sc = document.createElement("script"); sc.src = "https://assets.calendly.com/assets/external/widget.js"; sc.async = true; sc.onload = start; document.head.appendChild(sc); }
    }
    $("#plan").scrollIntoView({ behavior: "smooth" });
  }
  if (/[?&]thanks/.test(location.search)) thanks("");

  /* ---------- SCREENSHOT LIGHTBOX ---------- */
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.hidden = true;
  lb.innerHTML = `<button type="button" class="lb-close" aria-label="Close">×</button><img alt="">`;
  document.body.appendChild(lb);
  document.addEventListener("click", e => {
    const z = e.target.closest(".zoom"); if (z) { lb.querySelector("img").src = z.dataset.src; lb.hidden = false; return; }
    if (!lb.hidden && (e.target === lb || e.target.closest(".lb-close"))) lb.hidden = true;
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- STICKY MOBILE BUTTON ---------- */
  const sticky = $("#sticky");
  if (sticky && "IntersectionObserver" in window) {
    let past = false, atForm = false;
    const upd = () => sticky.classList.toggle("show", past && !atForm);
    new IntersectionObserver(([e]) => { past = !e.isIntersecting; upd(); }).observe($("#hero"));
    new IntersectionObserver(([e]) => { atForm = e.isIntersecting; upd(); }).observe($("#plan"));
  }
})();
