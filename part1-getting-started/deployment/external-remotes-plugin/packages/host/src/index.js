fetch("/public/config.json")
  .then((res) => res.json())
  .then((config) => {
    window.mfeUrl1 = config.mfeUrl1;
    window.mfeUrl2 = config.mfeUrl2;
    import("./App");
  });
