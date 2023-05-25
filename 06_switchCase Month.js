
function monthYear(monthNum) {
    switch (monthNum) {
      case 1:
        console.log(`Month is: January as month number is ${monthNum}`);
        break;
      case 2:
        console.log(`Month is: February as month number is ${monthNum}`);
        break;
      case 3:
        console.log(`Month is: March as month number is ${monthNum}`);
        break;
      case 4:
        console.log(`Month is: April as month number is ${monthNum}`);
        break;
      case 5:
        console.log(`Month is: May as month number is ${monthNum}`);
        break;
      case 6:
        console.log(`Month is: June as month number is ${monthNum}`);
        break;
      case 7:
        console.log(`Month is: July as month number is ${monthNum}`);
        break;
      case 8:
        console.log(`Month is: Augest as month number is ${monthNum}`);
        break;
      case 9:
        console.log(`Month is: September as month number is ${monthNum}`);
        break;
      case 10:
        console.log(`Month is: October as month number is ${monthNum}`);
        break;
      case 11:
        console.log(`Month is: November as month number is ${monthNum}`);
        break;
      case 12:
        console.log(`Month is: December as month number is ${monthNum}`);
        break;
      default:
        console.log(`Invalid input: ${monthNum}`);
        break;
    }
  }
  console.log(`*****************Switch Case***************`);
  console.log(' ');

  monthYear(1);
  monthYear(2);
  monthYear(7);
  monthYear(8);
  monthYear(null);
  monthYear(undefined);
  monthYear(NaN)
  console.log('_________________________________________________');