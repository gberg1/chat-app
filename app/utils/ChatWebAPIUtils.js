var ChatServerActionCreators = require('../actions/ChatServerActionCreators');

// TODO replace localStorage with client-server protocol

module.exports = {

  getAllMessages: function() {
    // Simulate retrieving data from a database
    var rawMessages = JSON.parse(localStorage.getItem('messages'));

    // Simulate success callback
    ChatServerActionCreators.receiveAll(rawMessages);
  },

  createMessage: function(message, threadName) {
    // Simulate writing to a database
    var rawMessages = JSON.parse(localStorage.getItem('messages'));
    var timestamp = Date.now();
    var id = 'm_' + timestamp;
    var threadID = message.threadID || ('t_' + Date.now());
    var createdMessage = {
      id: id,
      threadID: threadID,
      threadName: threadName,
      authorName: message.authorName,
      text: message.text,
      timestamp: timestamp
    };
    rawMessages.push(createdMessage);
    localStorage.setItem('messages', JSON.stringify(rawMessages));

    // Simulate success callback
    setTimeout(function() {
      ChatServerActionCreators.receiveCreatedMessage(createdMessage);
    }, 0);
  }

}; 

