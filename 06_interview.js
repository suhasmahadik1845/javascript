
function checkEligibility(gradScore, hscScore, sscScore, candidateName) {
    if (
      typeof gradScore !== 'number' ||
      typeof hscScore !== 'number' ||
      typeof sscScore !== 'number' ||
      isNaN(gradScore) ||
      isNaN(hscScore) ||
      isNaN(sscScore)
    ) {
      console.log('Please provide valid scores for graduation, HSC, and SSC.');
    } else if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
      console.log(`Congrats ${candidateName}, you are eligible for the TCS interview.`);
    } else {
      console.log(`Unfortunately ${candidateName}, you are not eligible for the TCS interview.`);
    }
  }
  
  // Example invocations
  console.log(`******************* TCS Interview eligibilty **********************`);
  console.log(' ');
  checkEligibility(80, 86, 90, "Sushant");
  console.log('-------------------------------------------------------------------');
  checkEligibility(70, 65, 55, "Aniket");
  console.log('-------------------------------------------------------------------');
  checkEligibility(60, 79, 88, "Sudhir");
  console.log('-------------------------------------------------------------------');
  checkEligibility("invalid", 80, 90, "invalid scores");
  console.log('_____________________________________________________________________');
  