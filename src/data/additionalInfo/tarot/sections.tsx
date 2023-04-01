import { SectionType } from "@/data/projectAdditionalInfo";

const sections: Array<SectionType> = [
  {
    sectionId: 0,
    img: null,
    video: "tarot-s1.mp4",
    content: `<section>
        <p>This is a demo video showing the sign up process of the Tarot Journal Application.<br><br>
        When user is trying to create a account, server will send a verification code to user's email.<br><br>
        User needs that code to complete the sign up process.
        Since the app is not yet finsihed, the styling of the app is not so good. </p>
        </section><br>`,
  },
  {
    sectionId: 1,
    img: null,
    video: null,
    content: `
    <section>
    <style>
        .tarot-iframe {
            width:100%;
            border:none;
        }
    </style>
    <p> The API Documents is attached   <u><a href="https://tarot-api-k1ed.onrender.com">here</a></u></p><br>
  
    <iframe 
        class="tarot-iframe"
        src="https://tarot-api-k1ed.onrender.com/" 
        title="Tarot App v1.0.0 Documentation">
    </iframe>

    </section>`,
  },
];

export default sections;