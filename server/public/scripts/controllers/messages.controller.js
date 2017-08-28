myApp.controller('MessageController', //give myApp.controller the name of 'ListingController'
['MessageService', //array listing dependencies and the last item of the array calls it all up
    function (MessageService) {
        console.log('Message Controller loaded');

        var self = this; //building an object to be displayed on the DOM 
        self.newListing = {};
        messageService.getMessage();
        self.listings = MessageService.messages;

        self.addMessage= function () {
        MessageService.addMessage(self.newMessage)
        }


    }
]);