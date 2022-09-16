function view(res) {
  console.log("called --> view");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("view!!!");
  res.end();
}

function create(res) {
  console.log("called --> create");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("create!!");
  res.end();
}

let handle = {};

handle["/"] = view;
handle["/view"] = view;
handle["/create"] = create;

exports.handle = handle;
