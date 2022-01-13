class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage,
   ...rest
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

 handleHello() {
  const message = this.createChatBotMessage('Hello. Nice to meet you. How can I help you?');

  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
}

export default ActionProvider;