var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshGreeting() {
  console.log("refreshGreeting:+");
  var greeter;
  try {
    greeter = Greeter.deployed();
  } catch (err) {
    setStatus("refreshGreeting: err=" + err);
    return;
  }

  console.log("refreshGreeting: call greeter.getGreeting");
  greeter.getGreeting.call(account, {from: account}).then(function(value) {
    var greeting_element = document.getElementById("greeting");
    greeting_element.innerHTML = value.valueOf();
    console.log("refreshGreeting: getGreetting cb value=" + value);
  }).catch(function(e) {
    console.log(e);
    setStatus("refreshGreeting: error getting greeting, err=" + err);
  });

  console.log("refreshGreeting:-");
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    account = accs[0];

    refreshGreeting();
  });
}
