
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>");
});

app.get("/login", (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="Enter name" />
            <br/><br/>
            <input type="password" name="password" placeholder="Enter password" />
            <br/><br/>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/submit", (req, resp) => {
    resp.send("<h1>Data Submitted</h1>");
});

app.listen(3600, () => {
    console.log("Server running at http://localhost:3600");
});
