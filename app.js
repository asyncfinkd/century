let number = "2021";

let lastCharacters =
    number.charAt(number.length - 2) + number.charAt(number.length - 1);

if (lastCharacters) {
  if (+number != 0) {
    if (!number.match("-")) {
      if (+lastCharacters === 0) {
        let centuredNumber = +number.slice(0, number.length - 2)
                                  console.log("century: " + centuredNumber);
      } else {
        if (+lastCharacters > 0 && +number > 0) {
          let century = 0;
          if (+number <= 100) {
            century++;
            console.log("century: " + century);
          } else {
            if (+lastCharacters > 0) {
              century++;
              let centuredNumber =
                  +number.slice(0, number.length - 2) + century;
              console.log("century: " + centuredNumber);
            }
          }
        }
      }
    } else {
      console.log("not minus");
    }
  } else {
    console.log("please enter year");
  }
}
