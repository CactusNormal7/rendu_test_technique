"use strict";

/**
 * ===================================== Exercise 1 (35mn) =====================================
 * For this exercise you have an array of bikes. Help us by sorting them, filtering them and inserting a missing one
 * Also retrieve a list of manufacturers.
 *
 * Keep all the code in this file.
 *
 * TO DO :
 * - log into the console an array containing the bikes with a speed above or equal to 30
 * - log into the console an array with *all the bikes*, order by brand name and by ref
 * - log into the console an array with *all the bikes*, where you inserted the following bike between the "717BK9" and the "BP4+":
 *      { brand: "zeBike", ref: "ZB70", maximumSpeed: 50 }
 */

console.log("Javascript exercise start");

var bikes = [
  {
    brand: {
      name: "eBike",
    },
    ref: "EB1",
    maximumSpeed: 30,
    type: "rent",
  },
  {
    brand: {
      name: "Bike+",
    },
    ref: "BP4",
    maximumSpeed: 25,
    type: "rent",
  },
  {
    brand: {
      name: "717Bike",
    },
    ref: "717BK32",
    maximumSpeed: 40,
    type: "rent",
  },
  {
    brand: {
      name: "717Bike",
    },
    ref: "717BK9",
    maximumSpeed: 45,
    type: "rent",
  },
  {
    brand: {
      name: "Bike+",
    },
    ref: "BP4+",
    maximumSpeed: 29,
    type: "rent",
  },
  {
    brand: {
      name: "zeBike",
    },
    ref: "ZB78",
    maximumSpeed: 57,
    type: "rent",
  },
  {
    brand: {
      name: "eBike",
    },
    ref: "EB2",
    maximumSpeed: 32,
    type: "rent",
  },
  {
    brand: {
      name: "Angelo",
    },
    ref: "Angel99",
    maximumSpeed: 75,
    type: "rent",
  },
  {
    brand: {
      name: "Angelo",
    },
    ref: "Angel88",
    maximumSpeed: 69,
    type: "rent",
  },
  {
    brand: {
      name: "FiveBike",
    },
    ref: "FB Mac +",
    maximumSpeed: 49,
    type: "rent",
  },
];

let exersice11 = () => {
  console.log("exersice 1.1");
  let result = [];
  bikes.forEach((bike) => {
    if (bike.maximumSpeed >= 30) {
      result.push(bike);
    }
  });
  console.log(result);
};

//trie dans un premier temps par brand.name et si même valeur trie pas ref
let exersice12 = () => {
  console.log("exersice 1.2");
  let result = [...bikes];
  result = result.sort((a, b) => {
    if (a.brand.name < b.brand.name) {
      return -1;
    } else if (a.brand.name > b.brand.name) {
      return 1;
    } else {
      if (a.ref < b.ref) {
        return -1;
      } else if (a.ref > b.ref) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  console.log(result);
};

let exersice13 = () => {
  console.log("exersice 1.3");
  let result = [...bikes];
  let a = { brand: { name: "zeBike" }, ref: "ZB70", maximumSpeed: 50 };
  result.splice(4, 0, a);
  console.log(result);
};

exersice11();
exersice12();
exersice13();

/**
 * ===================================== Exercise 2 (15mn) =====================================
 * Keep all the code in this file. Just below.
 *
 * TO DO :
 * - Given the API documentation at this URL : https://bikeindex.org/documentation/api_v3 - retrieve the list of the manufacturers. Only those on page 2, with 5 results per page.
 * - log only their short names in an array, into your console when clicking on the #todo button in the HTML.
 * - Log an error if the request to the above API fails.
 */

const manufacturers = fetch(
  "https://bikeindex.org:443/api/v3/manufacturers?page=2&per_page=5"
)
  .then((res) => {
    return res.json();
  })
  .catch((error) => {
    console.error(error);
  });

let exersice21 = async () => {
  manufacturers.then((data) => {
    console.log(data);
  });
};

let exercise22 = () => {
  let button = document.getElementById("todo");
  button.addEventListener("click", () => {
    manufacturers
      .then((data) => {
        let result = [];
        data.manufacturers.forEach((element) => {
          result.push(element.short_name);
        });
        return result;
      })
      .then((array) => {
        console.log(array);
      });
  });
};

exersice21();
exercise22();

/**
 * ===================================== Exercise 3 (10mn) =====================================
 * Keep all the code in this file. Just below.
 *
 * TO DO :
 * - Take the actual bikes array change the display : display brands with the bikes they sold inside a collection. No duplicate brand allowed for this list
 */

let exersice3 = () => {
  console.log("exersice 3");
  let result = {};
  let tamp = [];
  bikes.forEach((bike) => {
    if (!tamp.includes(bike.brand.name)) {
      result[bike.brand.name] = [];
      tamp.push(bike.brand.name);
    }
  });
  bikes.forEach((bike) => {
    result[bike.brand.name].push(
        bike
    );
  });
  console.log(result);
};

exersice3();
