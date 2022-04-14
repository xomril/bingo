var events=[];
events.push("אליהו דופק בדלת");
events.push("נשפכת כוס יין ראשונה");
events.push("נשפכת כוס מיץ ראשונה");
events.push("נשברת כוס");
events.push("עשר המכות");
events.push("הלחמניה");
events.push("אוכלים חרוסת");
events.push("כוס ראשונה");
events.push("כוס שניה");
events.push("כוס שלישית");
events.push("כוס רביעית");
events.push("אחד מי יודע");
events.push("חד גדיא");
events.push("קדש");
events.push("רחץ");
events.push("כרפס");
events.push("יחץ");
events.push("מגיד");
events.push("רחצה");
events.push("מוציא מצה");
events.push("מרור");
events.push("כורך");
events.push("שולחן עורך");
events.push("צפון");
events.push("ברך");
events.push("הלל");
events.push("נרצה");
events.push("ויכוח על סלט מיונז או תפוח אדמה");

function fillTable(arr){
  var ev=arr.slice();	
  for(i=1;i<27;i++){
  	if(i==13){i++};
	if(ev[ev.length-1]==null || ev[ev.length-1]=="" || ev[ev.length-1].length==0){ev.pop()};
  		$("#cell" + i).html("<p class='innerCell'>" + ev[ev.length-1] + "</p>");
     	ev.pop();       
  }
}
function addToList(){
	var item = window.prompt("בינגו פסח","");
	if(item!="" && item.length>0 && item.trim()!=""){
		events.push(item);
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
$(function(){
fillTable(shuffle(events));
})
