const html = require('html-template-tag');

module.exports = users => html`
  <div class="list-group mb-5 col-lg-8">
    ${users.map(
      user =>
        html`
          <a
            class="list-group-item list-group-item-action rounded"
            href="/users/${user.id}"
            >${user.firstName} ${user.lastName}
          </a>

          <form
            class="form-inline"
            method="POST"
            action="/users/${user.id}?_method=DELETE"
          >
            <button class="btn btn-danger mb-4 mt-2 col-md-2">Delete</button>
          </form>
        `
    )}
  </div>
`;
