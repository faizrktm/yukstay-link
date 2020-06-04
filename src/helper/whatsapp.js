const createWhatsappLink = (phoneNumber, message) => {
  let number = phoneNumber;
  let msg = '';

  if (phoneNumber.charAt(0) === '+') {
    number = phoneNumber.substring(1);
  }

  if(message){
    msg = encodeURIComponent(message);
  }

  return `https://wa.me/${number}?text=${msg}`;
};

export default createWhatsappLink;
