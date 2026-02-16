console.log(document);

console.log(document.title);

console.info(document.head);

console.warn("This is warning");

console.error("This is error");

console.log(dom);

console.group("App initialization!!");
  console.group("Loading Issues");
  console.log("Image : Ok");
  console.log("Fronts : Ok");
  console.groupEnd();

  console.group("Connecting to API");
  console.warn("First Attempt has been Failed");
  console.log("After 2 its successfully connected");
  console.groupEnd();

console.groupEnd();