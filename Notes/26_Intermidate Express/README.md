# Intermediate Express Notes

- Got fluent in initializing the node modules.
- Installed EJS - node package to use ejs file.
- Wrote a dynamic html getting the input from the request and use it in the html file using ejs file.
- Learned the difference between `<%=  %>` - To embed the result in html and `<%   %>` - to hide the javascript result form the html.
- Learned two new express objects apart from `get()` and `listen()` - `use()` and `set()`
- `get()` - To get the get request from the client end
- `listen()` - To set a port and ip to listen to the traffic
- `use()` - To use custom html,css and js files
- `set()` - To use ejs files without their extension name within app.js
- Learned to use partials for header and footer html template.
- Learned about the post requests by adding data to html using the form that is sent via post request.
- New module installed `body-parser`.
- `app.use(bodyParser.urlencoded({extended: "true"}));` - To convert the urlencoded body received from the post request to convert it to nested objects JSON like structure.
- New express object `redirect()` to redirect the post connection back to the get url.