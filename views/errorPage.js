const html = require('html-template-tag');
const mainLayout = require('./mainLayout');

module.exports = validationError =>
  mainLayout(
    // list all the validation errors
    html`
      <ul>
        ${validationError.errors.map(
          error =>
            html`
              <li>${error.message}</li>
            `
        )}
      </ul>
    `,
    // link back to the users page
    html`
      <a href="/users">Try Again</a>
    `
  );
