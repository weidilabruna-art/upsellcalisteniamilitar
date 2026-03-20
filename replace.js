const fs = require('fs');
let content = fs.readFileSync('assets/index-BqfKpPIn.js', 'utf8');

// Replace Button
const buttonSearch = `                  C.jsx("a", {
                    href: "https://pay.cakto.com.br/ybzcq7b_791416",
                    className:
                      "block w-full bg-cta text-cta-foreground text-xl md:text-2xl font-bold py-3 px-5 rounded-lg no-underline hover:brightness-110 transition-all",
                    style: {
                      animation: e
                        ? "pulse-cta 2s ease-in-out infinite"
                        : "none",
                    },
                    children: "Quero comprar agora!",
                  }),
                  C.jsx("button", {
                    onClick: () => i(!0),
                    className:
                      "inline-block mt-4 bg-destructive text-destructive-foreground text-sm font-medium py-2 px-6 rounded-lg hover:bg-destructive/90 transition-colors",
                    children: "Não quero, Obrigado!",
                  }),`;

const buttonReplace = `                  C.jsx("div", {
                    dangerouslySetInnerHTML: {
                      __html: '<div style="text-align:center" id="kiwify-upsell-qqNUieQ" data-upsell-url="" data-downsell-url="https://upsellcalisteniamilitar.vercel.app/back%20(4)"><button id="kiwify-upsell-trigger-qqNUieQ" style="background-color:#27AF60;padding:12px 16px;cursor:pointer;color:#FFFFFF;font-weight:600;border-radius:4px;border:1px solid #27AF60;font-size:20px;">Sim, eu aceito essa oferta especial!</button><div id="kiwify-upsell-cancel-trigger-qqNUieQ" style="margin-top:1rem;cursor:pointer;font-size:16px;text-decoration:underline;font-family:sans-serif;">Não, eu gostaria de recusar essa oferta</div></div>'
                    }
                  }),`;

// Replace Video
const videoSearch = `              C.jsx("div", {
                className:
                  "w-full max-w-[360px] mx-auto mb-6 rounded-xl overflow-hidden shadow-lg",
                children: C.jsx("div", {
                  style: {
                    position: "relative",
                    width: "100%",
                    paddingTop: "177.78%",
                  },
                  children: C.jsx("iframe", {
                    src: "https://player-vz-de976c3f-628.tv.pandavideo.com.br/embed/?v=34c13b34-e6db-4ea8-a0d9-2fd18db0cb2b",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    },
                    allow:
                      "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture",
                    allowFullScreen: !0,
                  }),
                }),
              }),`;

const videoReplace = `              C.jsx("vturb-smartplayer", {
                id: "vid-69bcc366ab9c7e1e9b75f3f1",
                style: {
                  display: "block",
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "400px",
                  marginBottom: "1.5rem"
                }
              }),`;

if (content.includes(buttonSearch)) {
  content = content.replace(buttonSearch, buttonReplace);
  console.log("Button replaced successfully.");
} else {
  console.log("Button Search string not found in file!");
}

if (content.includes(videoSearch)) {
  content = content.replace(videoSearch, videoReplace);
  console.log("Video replaced successfully.");
} else {
  console.log("Video Search string not found in file!");
}

fs.writeFileSync('assets/index-BqfKpPIn.js', content, 'utf8');
console.log("File saved.");
