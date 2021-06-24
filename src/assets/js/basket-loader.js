(function () {
  function requireScripts () {
    return basket.require(

    );
  }

  basket.require(
    { url: 'js/loader.js', key: 'google-charts', unique: 0.1 },
    { url: 'js/app.js', key: 'app', unique: 0.1 }
  ).then(requireScripts)
  .then(function () {
  	basket.require({ url: 'js/app.js', unique: 1 });  //unique is to make sure we can force a reload, in case of bugs
  })
  ;
}());