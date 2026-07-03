function buildSidebar() {

    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";

    // ---------- SEARCH BAR ----------
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "search";
    searchInput.placeholder = "Search topics...";
    searchInput.className = "sidebar-search";

    sidebar.appendChild(searchInput);

    // ---------- BUILD SIDEBAR ----------
    for (const section in topics) {

        // Section heading
        const heading = document.createElement("h3");
        heading.textContent = section;
        heading.className = "sidebar-section";

        // Topics container
        const group = document.createElement("div");
        group.className = "sidebar-group";
        group.dataset.section = section;

        // Expand / Collapse
        heading.onclick = () => {
            toggleSection(section);
        };

        topics[section].forEach(topic => {

            const item = document.createElement("div");

            item.className = "sidebar-item";
            item.textContent = topic.title;
            item.dataset.file = topic.file;

            item.onclick = () => {

                localStorage.setItem(
                    "section",
                    section.toLowerCase().replace(/\s+/g, "-")
                );

                localStorage.setItem("sectionName", section);

                localStorage.setItem("topic", topic.file);

                loadTopic();

                highlightActiveTopic(topic.file);

                // Keep current section open
                group.classList.add("open");
            };

            group.appendChild(item);

        });

        sidebar.appendChild(heading);
        sidebar.appendChild(group);
    }

    // ---------- SEARCH ----------
    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".sidebar-group").forEach(group => {

            let hasMatch = false;

            group.querySelectorAll(".sidebar-item").forEach(item => {

                const match =
                    item.textContent.toLowerCase().includes(value);

                item.style.display = match ? "block" : "none";

                if (match) hasMatch = true;

            });

            // Automatically open matching sections
            if (value === "") {
                group.classList.remove("open");
            } else {
                group.classList.toggle("open", hasMatch);
            }

        });

    });

    // ---------- Restore active topic ----------
    const currentTopic = localStorage.getItem("topic");

    if (currentTopic) {

        highlightActiveTopic(currentTopic);

        // Open current section automatically
        const currentSection =
            localStorage.getItem("sectionName");

        document.querySelectorAll(".sidebar-group").forEach(group => {

            if (group.dataset.section === currentSection) {
                group.classList.add("open");
            }

        });

    }

}

// -------------------------------

function highlightActiveTopic(activeTopic) {

    document.querySelectorAll(".sidebar-item").forEach(item => {

        item.classList.remove("active");

        if (item.dataset.file === activeTopic) {
            item.classList.add("active");
        }

    });

}

// -------------------------------

function toggleSection(sectionName) {

    document.querySelectorAll(".sidebar-group").forEach(group => {

        if (group.dataset.section === sectionName) {
            group.classList.toggle("open");
        } else {
            group.classList.remove("open");
        }

    });

}

// -------------------------------

buildSidebar();