function buildSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = "";

    for (const section in topics) {

        const heading = document.createElement("h3");
        heading.textContent = section;
        sidebar.appendChild(heading);

        topics[section].forEach(topic => {

            const item = document.createElement("div");

            item.className = "sidebar-item";

            item.textContent = topic.title;

            item.onclick = () => {

                localStorage.setItem("section",
                    section.toLowerCase().replace(/\s+/g, "-"));

                localStorage.setItem("topic", topic.file);

                loadTopic();

            };

            sidebar.appendChild(item);

        });

    }

}

buildSidebar();