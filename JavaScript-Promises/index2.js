// 2nd promise
let showOff = (() => {
  var _ref = _asyncToGenerator (function* (phone) {
    return new Promise (function (resolve, reject) {
      var message =
        'Hey friend, I have a new ' +
        phone.color +
        ' ' +
        phone.brand +
        ' phone';

      resolve (message);
    });
  });

  return function showOff (_x) {
    return _ref.apply (this, arguments);
  };
}) ();
