var salePhone = true;
var saleHeadset = true;
var kasse = 0;
var phone = 300;
var headset = 50;
var cover = 20;
var buyCover = `green`;


if (salePhone && saleHeadset && buyCover) {
  kasse = (phone + headset + cover)*0.85;
}
  else if  (salePhone && saleHeadset) {
    kasse = (phone + headset)*0.9;
  }
  else if (salePhone && buyCover) {
    switch (buyCover) {
      case `orange`: kasse = (phone+cover)*0.85;
      break;
      case `pink`: kasse = (phone+cover)*0.88;
      break;
      case `green`: kasse = (phone+cover)*0.93;
      default:
      kasse = cover*0.95;
    }

  }
  else if (salePhone) {
    kasse = phone;
  }


  console.log(`Zahlen Sie ${kasse} €. Vielen Dank für Ihren Einkauf!`);
