import {Colors} from '../theme/colors';

// her not eklendiginde notun arka fonu farkli renk otomatik olarak belirlenecek:
const setColors = index => {
  switch (index % 10) {
    case 0:
      return Colors.COLOR1;
      case 1:
      return Colors.COLOR2;
      case 2:
      return Colors.ORANGE;
      case 3:
      return Colors.COLOR3;
      case 4:
      return Colors.GREEN;
      case 5:
      return Colors.COLOR4;
      case 6:
      return Colors.GREEN;
      case 7:
      return Colors.BLACK;
      case 8:
      return Colors.COLOR5;
      case 9:
        return Colors.RED;
    default:
      return Colors.ORANGE;
  }
};

export {setColors};
