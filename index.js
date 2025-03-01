// Returns the given string in all uppercase
function shout(string) {
    return string.toUpperCase();
  }
  
  // Returns the given string in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Logs the given string in all uppercase (using console.log)
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Logs the given string in all lowercase (using console.log)
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Returns a specific response based on the case of the input string:
  // - If the string is exactly "Let's have dinner together!", return "I would love to!"
  // - If the string is all lowercase, return "I can't hear you!"
  // - If the string is all uppercase, return "YES INDEED!"
  function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
  }
  
  // Export the functions so they are available to the test files
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate
  };
  