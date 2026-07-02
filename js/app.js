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