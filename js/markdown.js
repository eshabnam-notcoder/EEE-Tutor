async function loadTopic() {

    const topic = localStorage.getItem("topic");

    if (!topic) {
        document.getElementById("content").innerHTML =
            "<h2>No topic selected.</h2>";
        return;
    }

    try {

        const section = localStorage.getItem("section");

        const response = await fetch(
            `content/${section}/${topic}.md`
        );

        if (!response.ok)
            throw new Error("Markdown file not found.");

        const markdown = await response.text();

        document.getElementById("content").innerHTML =
            marked.parse(markdown);

    } catch (error) {

        document.getElementById("content").innerHTML =
            `<h2>Error</h2><p>${error.message}</p>`;

        console.error(error);

    }

}

loadTopic();