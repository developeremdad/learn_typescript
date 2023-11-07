{
  // Generic with interface
  //   create developer interface
  interface Developer<T, X = boolean> {
    name: string;
    computer: {
      brand: string;
      processor: string;
      price: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type Watch = {
    model: string;
    price: number;
  };

  const juniorDeveloper: Developer<Watch> = {
    name: "emdadullah",
    computer: {
      brand: "hp",
      processor: "intel core i7",
      price: 84000,
    },
    smartWatch: {
      model: "mi",
      price: 2200,
    },
  };
  console.log(juniorDeveloper);

  interface SeniorWatch {
    model: string;
    price: number;
    feature: string;
  }

  const seniorDeveloper: Developer<SeniorWatch> = {
    name: "emdad",
    computer: {
      brand: "acer",
      price: 950000,
      processor: "intel core i7",
    },
    smartWatch: {
      model: "apple",
      price: 15000,
      feature: "multi functional",
    },
    bike: true,
  };
  console.log(seniorDeveloper);
}
