const html = require('html-template-tag');
const mainLayout = require('./mainLayout');
const usersList = require('./usersList');

module.exports = users =>
  mainLayout(
    // form for adding new user
    html`
      <div class="mb-5">
        <form class="form-inline" method="POST" action="/users">
          <div class="form-group mr-3 mb-3">
            <label for="inputFirstName" class="sr-only">First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputFirstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div class="form-group mr-3 mb-3">
            <label for="inputLastName" class="sr-only">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group mb-3">
            <button type="submit" class="btn btn-primary mr-2">Create</button>
            <a href="/users" class="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    `,
    usersList(users)
  );
