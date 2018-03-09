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
// call our promise
let askMom = (() => {
  var _ref2 = _asyncToGenerator (function* () {
    try {
      console.log ('before asking Mom');

      let phone = yield willIGetNewPhone;
      let message = yield showOff (phone);

      console.log (message);
      console.log ('after asking mom');
    } catch (error) {
      console.log (error.message);
    }
  });

  return function askMom () {
    return _ref2.apply (this, arguments);
  };
}) ();
