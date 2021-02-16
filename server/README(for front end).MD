### List of Socket IO custom methods to use in frontend
 - "connection"  -establishes connection between server and client
 - "message" - sends message data from input + broadcasts to all users
 - "joinChat" - adds a user to the chat + broadcast to all chat users that this user joined 
 - "typing" - on a typing event will send you a name of a user which is typing and the amount of typers  , if typers is more than one change emit to several people are typing .
 - "stopTyping" - removes the typing user from the obj , you will receive the number of people left typing