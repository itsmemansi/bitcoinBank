let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney()
{
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   // var finalAmount = null;
   if (enterAmount > 500000)
   {
      alert("Insufficient Balance.");
   } 
   else 
   {
      var findUserBankAccount = enterName + "BitcoinBalance";
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      var finalAmount = parseInt(document.getElementById(enterName+"BitcoinBalance").innerHTML) + enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      if(finalAmount != null)
      {
          document.getElementById(enterName+"BitcoinBalance").innerText = finalAmount;
      }
     
      alert(`Transaction Successful !!  
      ${enterAmount} ₿ sent to ${enterName}`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${enterAmount} ₿ Transferred Successfully to ${enterName} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

function donate(){
   var person = alert("Thank you for your kind gesture. You are a true treasure to me :))");
}