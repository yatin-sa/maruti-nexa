// export default loadScript(path, isAsync) {
//   const script = document.createElement("script");
//   script.src = path;
//   script.async = isAsync;

//   document.body.appendChild(script);
// }
export function loadScript(path, isAsync){
  console.log("medallia script", path);
  const script = document.createElement("script");
  script.src = path;
  script.async = isAsync;

  document.body.appendChild(script);
  //return (  );
};

export function getTime(d){
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
  return hDisplay + mDisplay + sDisplay;
};

;
