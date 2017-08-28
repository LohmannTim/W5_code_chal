myApp.service('MessagingService', ['$http', function ($http) { 
    console.log('Messaging service loaded');
   
    var self = this;
    self.messages = {
        list: [] 
    }; 
    self.getMessage = function () {
        $http.get('/messages').then(function (response) { 
            console.log('get response:', self.messages);
        });
    };
    self.addMessage = function (newMessage) {
        console.log('sending this object to server', newMessage);
        $http.post('/listings', newMessage).then(function (response) {
            console.log('service post response: ', response);
            self.getMessage();
        });
    };

    self.getMessage();
}]);