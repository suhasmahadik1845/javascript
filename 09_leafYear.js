
console.log(`*************Leap Year or Not***************`);
console.log(` `);

function checkLeapYear(leapYear) {
    if (typeof leapYear !== "number" || leapYear == null || leapYear == undefined || isNaN(leapYear)) {
        console.log(`   You entered invalid input: ${leapYear}`);
    } else {
        if ((leapYear%4 === 0 && leapYear%100 !==0) || (leapYear%400 ===0)) {
            console.log(`   ${leapYear}: is leap year`);
        } else {
            console.log(`   ${leapYear}: is not leap year`);
        }
    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear('Twenty Twenty');
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
console.log(`____________________________________________`);