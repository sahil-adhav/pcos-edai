class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    
    message = message.toLowerCase();
    if(message.includes('hello')){
      this.actionProvider.handleHello();
    }
    else if(message.includes('hey')){
      this.actionProvider.handleHello();
    }
    else if(message.includes('hi')){
      this.actionProvider.handleHello();
    }
    
  }
}

export default MessageParser;