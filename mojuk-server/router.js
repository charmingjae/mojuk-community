function route(handle, pathname, res) {
  console.log("request for in router : " + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](res);
  } else {
    console.log("no handler with " + pathname);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 not found");
    res.end();
  }
}

exports.route = route;
