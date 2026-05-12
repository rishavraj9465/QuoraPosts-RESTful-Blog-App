📝 QuoraPosts — RESTful Blog App
A fully functional CRUD web application inspired by Quora, built with Node.js + Express.js. This project demonstrates core backend development concepts including RESTful routing, EJS templating, and HTTP method overriding — all with an in-memory data store.

✨ Features

📋 View all posts — Index page listing every post
➕ Create a post — Form to add a new post with username & content
👁️ View single post — Dedicated show page per post
✏️ Edit a post — Update post content via a pre-filled form
🗑️ Delete a post — Remove a post permanently
🔑 Unique IDs — Every post gets a UUID on creation
🔄 Method Override — Enables PATCH & DELETE from HTML forms


🛣️ REST API Routes
MethodRouteDescriptionGET/postsList all posts (Index)GET/posts/newShow create post formPOST/postsCreate a new postGET/posts/:idShow a single postGET/posts/:id/editShow edit formPATCH/posts/:idUpdate post contentDELETE/posts/:idDelete a post

🛠️ Built With
TechnologyUsageNode.jsRuntime environmentExpress.jsWeb framework & routingEJSServer-side HTML templatingUUID (uuid)Unique ID generation per postmethod-overridePATCH & DELETE via HTML formspathCross-platform file path resolution

🧠 Concepts Covered

RESTful routing conventions (Index, Show, New, Create, Edit, Update, Destroy)
Express middleware (urlencoded, static, methodOverride)
req.params, req.body, req.query usage
res.render() vs res.redirect()
EJS templating with dynamic data passing
UUID for unique resource identification
In-memory array as a mock database


📁 Project Structure
quora-posts/
│
├── views/
│   ├── index.ejs       # All posts listing
│   ├── new.ejs         # Create post form
│   ├── show.ejs        # Single post view
│   └── edit.ejs        # Edit post form
│
├── public/             # Static assets (CSS, JS)
├── index.js            # Main Express app
└── package.json


⚠️ Important Notes

Data is stored in-memory (the posts array) — all posts reset when the server restarts. Integrate MongoDB/Mongoose for persistent storage.
method-override is required because HTML forms natively only support GET and POST — it intercepts ?_method=PATCH and ?_method=DELETE from form actions.


🔮 Future Improvements

 Connect MongoDB for persistent data
 Add user authentication
 Add likes / upvotes per post
 Add comments section
 Deploy to Render / Railway

Made with ❤️ by Rishav Raj
