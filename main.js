const columns = 30;
const lines = 14;

function makeLine(sideChar, middleChar, lenght) {
  var line = sideChar;
  for (var i = 0; i < lenght - 2; i++) {
    line += middleChar;
  }
  line += sideChar;
  return line
}

function makeMapText(width, lenght) {
  const edgeLine = makeLine('+', '-', columns)
  const middleLine = makeLine('|', '.', columns)

  var mapText = '';
  mapText += edgeLine + '\n'
  for (var i = 0; i < lines -2; i++) {
    mapText += middleLine + '\n'
  }
  mapText += edgeLine + '\n'
  return mapText
}

document.getElementById('map').innerHTML = makeMapText(columns, lines);
