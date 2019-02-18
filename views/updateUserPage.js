const html = require('html-template-tag');
const mainLayout = require('./mainLayout');
const usersList = require('./usersList');

module.exports = (user, users) =>
  mainLayout(
    // form for updating user
    html`
      <div class="mb-5">
        <form
          class="form-inline"
          method="POST"
          action="/users/${user.id}?_method=PUT"
        >
          <div class="form-group mr-3 mb-3">
            <label for="inputFirstName" class="sr-only">First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputFirstName"
              name="firstName"
              value="${user.firstName}"
            />
          </div>
          <div class="form-group mr-3 mb-3">
            <label for="inputLastName" class="sr-only">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              name="lastName"
              value="${user.lastName}"
            />
          </div>
          <div class="form-group mb-3">
            <button type="submit" class="btn btn-primary mr-2">Update</button>
            <a href="/users" class="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    `,
    usersList(users)
  );
