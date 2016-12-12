var table = document.getElementById('employ');
var dateNow = new Date();
var Birthday = function(now, bith){
  var timeDiff = Math.abs(now.getTime() - bith.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 * 360)); 
  return diffDays;
}
employees.forEach(function(item, i, arr){
  var intern = item.isIntern ? 'Стажер' : 'В штате';
    table.innerHTML += "<tr>" + "<td>" + i + "</td>" + 
    "<td>" + item.lastName + ' ' + item.firstName + "</td>" + 
    "<td>" + Birthday(dateNow, item.birthDate) + "</td>" +
    "<td>" + item.position + "</td>" +
    "<td>" + intern + "</td>" + "</tr>";
});

