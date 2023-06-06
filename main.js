app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:
    ${app.get("port")}`);
});
