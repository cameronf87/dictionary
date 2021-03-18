Production	
JavaScript	
Try
var request = new XMLHttpRequest();

request.open('GET', 'https://dictionary.iachieved.it/dictionary/id/keys');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
