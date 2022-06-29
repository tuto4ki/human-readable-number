module.exports = function toReadable (number) {
  let map = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety']
  ]);
  let str = '';
  let dec =  (number % 100);
  let unit = Number( dec % 10);
  let hungr = number - dec;
  str = hungr > 0 ? map.get(hungr / 100) + ' hundred ' : '';
  if(dec == 0 && number != 0)
  {
    return str.trim();
  }
  if(dec < 20 && dec != 0) {
    str += map.get(dec);
  }
  else {
    str += map.get(dec - unit) + ' ';
    if(unit != 0)
      str += map.get(unit);
  }
  return str.trim();
}