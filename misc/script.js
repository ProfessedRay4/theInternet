var page = 0;

function nextPage() {
    if ( page == 0 ) {
        document.getElementById("Titlee").innerHTML = "AI Manipulation";
        // change the text
        document.getElementById("sub-title").innerHTML = "Intro:";

        document.getElementById("body").innerHTML = "&emsp;Currently, there are many issues with the internet, especially with the rise of AI. Although AI is very useful, it is also very powerful. For example, AI is widely used for cheating in school and can also be used to edit and generate images. Additionally, AI can be used to impersonate someone and clone their voice. While AI is very helpful, it can also be very dangerous.";
        document.getElementById("next").innerHTML = "Next";
        page += 1;
    } else if (page == 1) {
        document.getElementById("sub-title").innerHTML = "Problems:";

        document.getElementById("body").innerHTML = "&emsp;The rise of AI has had a major impact on the internet. Before AI, people had to manually photoshop images, and it was almost impossible to clone someone's voice. However, with the rise of AI, it has become easier than ever to fake images and replicate people's voices. Additionally, cheating in school has become easier with portable AI models like ChatGPT and Gemini.";
        page += 1;
    } else if (page == 2) {
        document.getElementById("sub-title").innerHTML = "Positives:";

        document.getElementById("body").innerHTML = "&emsp;While some people misuse AI, many use it for good. For example, it can reduce human error to nearly 0%, which is especially beneficial in the medical field and in industries like construction. Additionally, AI is highly effective at making and solving decisions quickly. Compared to a human’s response time, AI almost immediately processes information and begins formulating a response.";
        page += 1;
    } else if (page == 3) {
        document.getElementById("sub-title").innerHTML = "How does it relate?";

        document.getElementById("body").innerHTML = '&emsp;The Internet and AI have many shared attributes. One example is how they both began. The internet was initially created for scientists to share their discoveries with other scientists. However, it quickly gained popularity and eventually evolved into what we know today. Similarly, AI started as a tool to "perfect" human tasks, but it is now widely used for its accessibility and reliability.';
        page += 1;
    } else if (page == 4) {
        document.getElementById("Titlee").innerHTML = "The End";

        document.getElementById("sub-title").innerHTML = "";

        document.getElementById("body").innerHTML = "";

        document.getElementById("next").innerHTML = "Finish";
        page = 0;

        var audio = new Audio('misc/yay.mp3');
        audio.play();
    }
}
