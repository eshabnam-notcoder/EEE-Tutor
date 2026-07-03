function openSection(name) {
    localStorage.setItem("section", name);
    window.location.href = "section.html";
}

function openTopic(section, topic){

    localStorage.setItem("section", section);

    localStorage.setItem("topic", topic);

    window.location.href = "topic.html";

}
function goHome() {
    window.location.href = "index.html";
}

function goBack() {
    window.history.back();
}

function loadSection() {

    const section = localStorage.getItem("section");

    const container = document.getElementById("topic-container");

    container.innerHTML = "";

    if (!section || !topics) return;

    const sectionName = Object.keys(topics).find(
        s => s.toLowerCase().replace(/\s+/g, "-") === section
    );

    if (!sectionName) {
        container.innerHTML = "<p>No section found</p>";
        return;
    }

    topics[sectionName].forEach(topic => {

        const div = document.createElement("div");
        div.className = "card";

        div.textContent = topic.title;

        div.onclick = () => {
            openTopic(section, topic.file);
        };

        container.appendChild(div);
    });
}

function getCurrentTopicList() {

    const sectionKey = localStorage.getItem("section");

    const sectionName = Object.keys(topics).find(
        s => s.toLowerCase().replace(/\s+/g, "-") === sectionKey
    );

    return topics[sectionName] || [];
}

function prevTopic() {

    const list = getCurrentTopicList();
    const current = localStorage.getItem("topic");

    const index = list.findIndex(t => t.file === current);

    if (index > 0) {
        openTopic(localStorage.getItem("section"), list[index - 1].file);
    }
}

function nextTopic() {

    const list = getCurrentTopicList();
    const current = localStorage.getItem("topic");

    const index = list.findIndex(t => t.file === current);

    if (index < list.length - 1) {
        openTopic(localStorage.getItem("section"), list[index + 1].file);
    }
}

function getTopicTitle(sectionName, file) {

    const section = topics[sectionName];

    if (!section) return file;

    const topic = section.find(t => t.file === file);

    return topic ? topic.title : file;
}

function getSectionDisplayName(sectionSlug) {

    return Object.keys(topics).find(section =>
        section.toLowerCase().replace(/\s+/g, "-") === sectionSlug
    );
}