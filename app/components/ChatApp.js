var MessageSection = require('./MessageSection');
var React = require('react');
var ThreadSection = require('./ThreadSection');

var ChatApp = React.createClass({

  render: function() {
    return (
      <div className="chatapp">
        <ThreadSection />
        <MessageSection />
      </div>
    );
  }

});

module.exports = ChatApp;

