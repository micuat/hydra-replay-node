// import choo
const choo = require("choo");
const html = require("choo/html");

// initialize choo
const app = choo({ hash: true });

app.route("/*", notFound);

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// import a template
const views = {
  welcome: require("./views/welcome.js"),
  editor: require("./views/editor.js"),
}

app.route("/", views.welcome);
app.route("#:mode", views.editor);
app.route("#:mode/:page", views.editor);

app.use(require("./engine.js"));
app.use(require("./menu.js"));

// start app
app.mount("#choomount");
