var ChatApp = require('./components/ChatApp');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./utils/ChatWebAPIUtils');
var React = require('react');

// Export for http://fb.me/react-devtools
window.React = React;

// Load example data into localStorage
ChatExampleData.init();

ChatWebAPIUtils.getAllMessages();

React.render(
  <ChatApp />,
  document.getElementById('react')
);

