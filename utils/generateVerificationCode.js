const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
  };
  
  module.exports = generateVerificationCode;
  