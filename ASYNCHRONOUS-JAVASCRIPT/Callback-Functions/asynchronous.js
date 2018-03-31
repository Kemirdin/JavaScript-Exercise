window.onload = function () {
  function handleError (jqXHR, textStatus, error) {
    console.log (error);
  }
  $.ajax ({
    type: 'GET',
    url: 'data/tweets.json',
    success: cbTweets,
    error: handleError,
  });
  function cbTweets (data) {
    cbTweets.log (data);

    $.ajax ({
      type: 'GET',
      url: 'data/friends.json',
      success: cbFriends,
      error: handleError,
    });
  }
  function cbFriends (data) {
    cbFriends.log (data);
    $.ajax ({
      type: 'GET',
      url: 'data/tweets.json',
      success: function (data) {
        console.log (data);
      },
    });
  }
};
