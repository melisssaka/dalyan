const context = {
  title: "Welcome to Dalyan",
  body: "Dalyan is a family-run café and beach club in the small Black Sea town of Ordu.  Enjoy the summer in this unique place that combines the green of the rich forests of the Black Sea with the deep blue of the sea!",
  reservations: [
    {
      image:
        "https://luxlifelondon.com/wp-content/uploads/2019/06/hillside-beach-club-fethiye-turkey-17.jpg",
      name: "Sunbeds",
      description:
        "Soak up the sun! Relax and enjoy the most famous bay of the black sea from the closest side.",
      price: "10€",
      discount: "7€",
    },
    {
      image:
        "https://images.ctfassets.net/r7p9m4b1iqbp/apCAzUKPNq927CVSFCRO3/84713adc42532a79ab846dc3cd98fb0a/Snow-Peak-Beach-Shelter-2.jpg?w=600&q=85&fm=jpg&fl=progressive",
      name: "Tents",
      description:
        "Do you want to extend your stay? We recommend our tents, which can be rented on a weekly basis. We have a wide range from standard tents to family size tents. ",
      price: "Starting from 80€",
    },
    {
      image:
        "https://cdn0.hitched.co.uk/article/2484/original/1280/jpg/94842-mexico-beach-meal.jpeg",
      name: "Rent Dalyan as a venue",
      description:
        "How about celebrating your most special day in Dalyan? We also have a special design team for your special days such as engagements and weddings!",
      price: "Starting from 1500€",
    },
  ],
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;
