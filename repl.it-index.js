var url = "https://api.thingspeak.com/channels
/707793/fields/1.json?api_key=
P77FXQZCWBSIMT20&results=5"
var url2 = "https://api.thingspeak.com/channels/
707793/fields/2.json?api_key=
P77FXQZCWBSIMT20&results=5"

function celebrate(data)
{
var myX = [];

var myY = [];

var myJ = [];

var myK = [];
for(var i = 0 ; i < data.feeds.length ; i++){

$("#count1").append("<tr><td>"
+data.feeds[i].created_at+"</td><td>"
+(data.feeds[i].field1)+"</td></tr>");
myX.push(data.feeds[i].created_at);
myY.push(data.feeds[i].field1);
}

for(var j = 0 ; j < data.feeds.length ; j++){
$("#count2").append("<tr><td>"
+data.feeds[j].created_at+"</td><td>"
+(data.feeds[j].field2)+"</td></tr>");
myJ.push(data.feeds[j].created_at);
myK.push(data.feeds[j].field2);
}

$("#myValue").html(myY[myY.length-1]);
} 
function celebrate2(data){
var myJ = [];
var myK = [];
for(var j = 0 ; j < data.feeds.length ; j++){
$("#count2").append("<tr><td>"
+data.feeds[j].created_at+"</td><td>"
+(data.feeds[j].field2)+"</td></tr>");

myJ.push(data.feeds[j].created_at);

myK.push(data.feeds[j].field2);

}

$("#mysecondValue").html(myK[myK.length-1]);

} 

$.get(url,celebrate);

$.get(url2,celebrate2);
