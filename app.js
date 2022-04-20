// Connect to the backend
var socket = io('wss://backend.liveqr.cloud:443');


// Variable to store the campaigns once we fetch them
var campaigns; 


// Campaign fetcher, fetches when we click the red button
document.getElementById("button").onclick = () => {
    socket.emit('token', "BF2FAD14")
}


// Parse the campaigns
socket.on('notification', recievedPacket => {
    console.log(recievedPacket);

    var recievedData = JSON.parse(recievedPacket);
    var message = recievedData.message;

    campaigns = JSON.parse(message).Campaigns;
});


// Current campaign selection buttons
document.getElementById("monday").onclick = () => {
    console.log(campaigns[0]);
    document.getElementById("campaign").innerHTML = '';

    var h3= document.createElement('H3');
    h3.innerHTML = campaigns[0].CampaignName;
    document.getElementById("campaign").appendChild(h3)
    
    var B= document.createElement('B');
    B.innerHTML = campaigns[0].CampaignDescription;
    document.getElementById("campaign").appendChild(B)

    var p1= document.createElement('P');
    p1.innerHTML = "Name: " + campaigns[0].CampaignContents[0].ProductName;
    document.getElementById("campaign").appendChild(p1)

    var p2= document.createElement('P');
    p2.innerHTML = "Special: " + campaigns[0].CampaignContents[0].ProductSpecial;
    document.getElementById("campaign").appendChild(p2)
    
    var p3= document.createElement('P');
    p3.innerHTML = "Description: " + campaigns[0].CampaignContents[0].ProductSpecialDescription;
    document.getElementById("campaign").appendChild(p3)
}

document.getElementById("tuesday").onclick = () => {
    console.log(campaigns[1]);
    document.getElementById("campaign").innerHTML = '';

    var h3= document.createElement('H3');
    h3.innerHTML = campaigns[1].CampaignName;
    document.getElementById("campaign").appendChild(h3)
    
    var B= document.createElement('B');
    B.innerHTML = campaigns[1].CampaignDescription;
    document.getElementById("campaign").appendChild(B)

    var p1= document.createElement('P');
    p1.innerHTML = "Name: " + campaigns[1].CampaignContents[0].ProductName;
    document.getElementById("campaign").appendChild(p1)

    var p2= document.createElement('P');
    p2.innerHTML = "Special: " + campaigns[1].CampaignContents[0].ProductSpecial;
    document.getElementById("campaign").appendChild(p2)
    
    var p3= document.createElement('P');
    p3.innerHTML = "Description: " + campaigns[1].CampaignContents[0].ProductSpecialDescription;
    document.getElementById("campaign").appendChild(p3)
}


// Send an updated json block back to the server 
document.getElementById("apply").onclick = () => {

    // Send it back here, but at least were at a point where this reads and 
    // parses the campaigns

    const appliedtimer = setTimeout(clearapplied, 3000);

    var h3= document.createElement('H3');
    h3.innerHTML = "APPLIED";
    document.getElementById("applied").appendChild(h3)
}
function clearapplied() {
    document.getElementById("applied").innerHTML = '';
    clearTimeout(appliedtimer);
}