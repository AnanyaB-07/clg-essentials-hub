/* =========================================
   App logic for Marketplace and Peer Connect
   - Renders cards based on static data
   - Handles filters and search (client-side)
   ========================================= */

const App = (() => {
  /* ---------- Helpers ---------- */

  // Create element with classes and optional innerHTML
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html) node.innerHTML = html;
    return node;
  }

  // Unique departments from MARKETPLACE_ITEMS
  function getDepartments() {
    const set = new Set(MARKETPLACE_ITEMS.map(i => i.department));
    return Array.from(set);
  }

  // Case-insensitive includes check
  function includesCI(str, q) {
    return str.toLowerCase().includes(q.toLowerCase());
  }

  /* ---------- Marketplace ---------- */

  function renderItems(items) {
    const grid = document.getElementById("itemsGrid");
    grid.innerHTML = ""; // clear existing

    if (!items.length) {
      grid.appendChild(el("div", "card", "<p>No items found for selected filter.</p>"));
      return;
    }

    items.forEach(item => {
      const card = el("article", "item-card");
      // Title and price
      const title = el("h3", null, item.title);
      const meta = el("div", "item-meta", `${item.price} • <span class="badge">${item.department}</span>`);
      const desc = el("p", null, item.description);
      const btn = el("button", "btn primary", "Contact Seller");

      // Placeholder action for contact
      btn.addEventListener("click", () => {
        alert(`Contact request submitted for: ${item.title}\n(This is a placeholder)`);
      });

      card.append(title, meta, desc, btn);
      grid.appendChild(card);
    });
  }

  function initDepartmentFilter() {
    const select = document.getElementById("deptFilter");
    const clearBtn = document.getElementById("clearFiltersBtn");

    // Populate department options
    getDepartments().forEach(dept => {
      const opt = el("option");
      opt.value = dept;
      opt.textContent = dept;
      select.appendChild(opt);
    });

    // Render all items initially
    renderItems(MARKETPLACE_ITEMS);

    // Filter by department on change
    select.addEventListener("change", () => {
      const val = select.value;
      const filtered = val === "all"
        ? MARKETPLACE_ITEMS
        : MARKETPLACE_ITEMS.filter(i => i.department === val);
      renderItems(filtered);
    });

    // Clear filters
    clearBtn.addEventListener("click", () => {
      select.value = "all";
      renderItems(MARKETPLACE_ITEMS);
    });
  }

  /* ---------- Peer Connect ---------- */

  function renderProfiles(profiles) {
    const grid = document.getElementById("profilesGrid");
    grid.innerHTML = "";

    if (!profiles.length) {
      grid.appendChild(el("div", "card", "<p>No profiles match your search.</p>"));
      return;
    }

    profiles.forEach(s => {
      const card = el("article", "profile-card");
      const title = el("h3", null, s.name);
      const meta = el("div", "profile-meta", `${s.branch} • ${s.year}`);

      const skillsWrap = el("div");
      s.skills.forEach(sk => {
        skillsWrap.appendChild(el("span", "badge", sk));
      });

      const btn = el("button", "btn primary", "Connect");
      btn.addEventListener("click", () => {
        alert(`Connection request sent to ${s.name}.\n(This is a placeholder)`);
      });

      card.append(title, meta, skillsWrap, btn);
      grid.appendChild(card);
    });
  }

  function renderHelpPosts(posts) {
    const list = document.getElementById("helpPostsList");
    list.innerHTML = "";

    posts.forEach(p => {
      const li = el("li");
      li.innerHTML = `<strong>${p.title}</strong> — ${p.author}<br/><span class="profile-meta">${p.details}</span>`;
      list.appendChild(li);
    });
  }

  function initSearch() {
    const input = document.getElementById("skillSearch");
    const clearBtn = document.getElementById("clearSearchBtn");

    // Initial render
    renderProfiles(STUDENT_PROFILES);

    // Search by skill (simple includes over any skill)
    input.addEventListener("input", () => {
      const query = input.value.trim();
      if (!query) {
        renderProfiles(STUDENT_PROFILES);
        return;
      }

      const filtered = STUDENT_PROFILES.filter(s =>
        s.skills.some(sk => includesCI(sk, query))
        || includesCI(s.branch, query)
        || includesCI(s.name, query)
      );

      renderProfiles(filtered);
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      renderProfiles(STUDENT_PROFILES);
    });

    // Help posts are static
    renderHelpPosts(HELP_POSTS);
  }

  /* ---------- Public init methods ---------- */

  function initMarketplace() {
    initDepartmentFilter();
  }

  function initPeerConnect() {
    initSearch();
  }

  return {
    initMarketplace,
    initPeerConnect
  };
})();
