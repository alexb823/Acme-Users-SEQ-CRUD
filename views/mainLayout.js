const html = require('html-template-tag');

module.exports = (content1, content2) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="/css/bootstrap.min.css">
      <title>Acme Users SEQ CRUD</title>
    </head>
    <body>
      <div class="container">
        <h1 class="my-4">Acme Users SEQ CRUD</h1>
        $${content1}
        $${content2}
      </div>
    </body>
  </html>
`;
