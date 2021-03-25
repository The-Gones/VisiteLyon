const cards = document.querySelector(".cards");
const sitesList = [
  {
    id: 1,
    name: "Restaurant Gastronomique Christian Tetedoie",
    district: "Lyon 5ème // Lyon 5th",
    picture: "./assets/images/restaurants/restaurant_tetedoie.jpg",
    description: "<span>Assurément une des plus belles tables de Lyon. Le restaurant de Christian Christian Têtedoie nous propose une cuisine gastronomique prestigieuse. A deux pas de la basilique de Fourvière, le chef nous propose un voyage gustatif et spirituel qui ravira les papilles les plus averties. C’est un établissement à tester seul, en famille, en couple il y a toujours une bonne occasion pour venir rendre une petite visite, que dis-je un hommage a la fabuleuse cuisine  du chef, préparez vous pour se grand voyage et soyez certain de ne jamais être déçu. Je peux vous demander un conseil : laissez vous emporter par le menu découverte : 5 plats extraordinaires et toujours renouvelés…a coup sur cela ne vous laissera pas de marbre…je vous garanti que vous ne partirez pas en faisait une tête...de canard.<br><br>Il ouvre son premier restaurant en 1987 sur le quai Jean Moulin à Lyon. Le public ne s’y trompe pas et le succès est là; la maison devient rapidement trop petite et le restaurant déménage et s’installe sur les quais de Saône, quai Pierre Scize.<br><br>L’adresse devient incontournable à Lyon et dans sa région, et les efforts du chef sont récompensés par l’obtention du titre de Meilleur Ouvrier de France en 1996, puis par l’attribution d’un macaron par le Guide Rouge en 2000.<br><br>Après de nombreuses années passées sur les bords de Saône, Christian Têtedoie a le souhait de donner un nouvel écrin à sa cuisine, à la mesure de la façon dont elle a évolué. C’est ainsi qu’il s’intéresse au site de l’ancien hôpital de l’Antiquaille où se trouve un potentiel encore vierge et inexploité ; une vue exceptionnelle sur Lyon au cœur du quartier de Saint Just. Les travaux sont pharaoniques, le projet dure 7 ans, mais le 26 mars 2010, les premiers clients dinent à l’Antiquaille.</span><span>For sure one of the most beautiful restaurants in Lyon. Christian Christian Têtedoie's restaurant offers prestigious gourmet cuisine. A stone's throw from the Fourvière basilica, the chef offers us a taste and spiritual journey that will delight the most discerning taste buds. It is an establishment to be tested alone, with family, as a couple there is always a good opportunity to come and give back a little jacket, what am I saying a tribute to the fabulous cuisine of the chef, get ready for this great trip and be sure never to be disappointed. I can ask you for some advice: let yourself be carried away by the discovery menu: 5 extraordinary and always renewed dishes ... suddenly this will not leave you indifferent ... I guarantee you that you will not leave with goose head.<br><br>The chef is not just anyone, here is what his wikipedia page tells us: Christian Têtedoie joined in 1975 the brigade of the restaurant Joseph Delphin, 2 stars in the Michelin Guide. It is an apprenticeship that gives him a taste for work, perseverance and attention to detail. At 16, he obtained his CAP, and won the competition for Best Apprentice Cook of France at 17, in 1979. This title opened the doors to the restaurant Paul Bocuse, in Collonges, where he joined as a clerk, then moved on. until taking a post of Chef de Partie. Persistent, Christian Têtedoie continued his career in the kitchens of the Élysée, paying particular attention to the President's meals.</span>",
  },
  {
    id: 2,
    name: "Restaurant Paul Bocuse. L'Auberge du pount de Collonges",
    district: "Collonges au Mont d'Or // Collonges Collonges au Mont d'Or ",
    picture: "./assets/images/restaurants/restaurant_paul_bocuse.png",
    description:"<span>Comment décrire un monument tel que Monsieur Paul ? Sa disparition il y a 2 ans a laissé un grand vide a Collonges et au-delà mais le flambeau a vite été repris et la famille reste aux commandes. Les grands plats signatures sont toujours au programme et nul doute que le nouveau chef sera le gardien exemplaire de cette tradition tout en apportant une touche de modernité.<br><br> Je vous conseille particulièrement de gouter à la soupe aux truffes noires VGE. Cette soupe fut créée le 25 février 1975 par le chef Paul Bocuse, pour un banquet organisé par le président Valéry Giscard d'Estaing et son épouse Anne-Aymone au palais de l'Élysée, en l'honneur de son admission au grade de chevalier de la Légion d'honneur.Petite anecdote au moment de servir la soupe recouverte de son feuilletage, Paul Bocuse dit à son hôte : « Monsieur le président, on va casser la croûte ». Tout était parti d'un canular : en 1975, Bocuse reçut un courrier farceur à l'en-tête de l'Élysée, lui annonçant que le président allait lui remettre la Légion d'honneur. Valéry Giscard d'Estaing, informé, lui remit la même année la décoration. C'est pour la réception au palais présidentiel que Paul Bocuse prépara cette soupe devenue célèbre.<br><br>Une portion de soupe VGE est composée de 20 grammes de truffes noires fraîches, crues et râpées, de 20 grammes de foie gras, de 20 grammes de paleron ou de blanc de poulet pochés, d'une cuillerée à potage de Noilly Prat, d'une louche de consommé double, de bœuf ou de volaille, et de 2 cuillerées à potage d'un matignon composé à parts égales de carottes, d'oignons, de céleri et de champignons étuvés au beurre</span><span>How to describe a monument such as Monsieur Paul? His disappearance 2 years ago left a great void in Collonges and beyond, but the torch was quickly picked up and the family remains in charge. The great signature dishes are always on the program and there is no doubt that the new chef will be the exemplary guardian of this tradition while bringing a touch of modernity. <br> <br> I particularly advise you to taste the VGE black truffle soup. This soup was created on February 25, 1975 by chef Paul Bocuse, for a banquet organized by President Valéry Giscard d'Estaing and his wife Anne-Aymone at the Élysée Palace, in honor of his admission to the rank of knight of the Legion of Honor. A little anecdote when serving the soup covered with its puff pastry, Paul Bocuse said to his host: “Mr. President, let's have a bite to eat”. It all started with a hoax: in 1975, Bocuse received a joke letter on the Elysee's letterhead, announcing that the president was going to award him the Legion of Honor. Valéry Giscard d'Estaing, informed, presented him with the decoration the same year. Paul Bocuse prepared this famous soup for the reception at the presidential palace. <br> <br> A portion of VGE soup is made up of 20 grams of fresh, raw and grated black truffles, 20 grams of foie gras, 20 grams of poached chicken breast or chicken breast, a tablespoon of Noilly Prat soup, a ladle of double consomme, beef or poultry, and 2 tablespoons of a soup of a matignon made in equal parts of carrots, onions, celery and mushrooms steamed in butter. Yum !</span>",
  },
  {
    id: 3,
    name: "Restaurant La Table de Max",
    district: "Lyon 7ème // Lyon 7th",
    picture: "./assets/images/restaurants/restaurant_la_table_de_max.jpg",
    description:"<span>Le quotidien Le Progrès de Lyon titrait il y a quelques mois : \"Voilà un tout nouveau concept de restaurant spécialisé dans les plats de viande et de homard, signé Maxime Stafrach, un ancien de chez Thomas passé à Koh-Lanta. Un mariage dans le vent à tester dans le 7e  arrondissement, à la place du Café Sillon\".<br><br>Un restaurant de copain pour une cuisine simple mais réconfortante. Ce nouveau lieu iconique de la cuisine moderne  Lyonnaise est basé dans le cosmopolite 7eme arrondissement de Lyon. Le chef ne se laisse pas faire et il compose ses plats comme des partitions musicales maniant avec brio le feu et la glace.<br><br>Mais c'est encore Alain Barrière qui en parle le mieux :<br><br>\" Il met de la magie, mine de rien, dans tout ce qu'il fait<br>Il a le sourire facile, même pour les imbéciles<br>Il s'amuse bien, il n'tombe jamais dans les pièges<br>Il s'laisse pas étourdir par les néons des manèges<br>Il vit sa vie sans s'occuper des grimaces<br>Que font autour de lui les poissons dans la nasse<br>Il est libre Max, il est libre Max<br>Y'en a même qui disent qu'ils l'ont vu voler\"<br></span><span>The daily \"Le Progrès de Lyon\" headlined a few months ago: \"Here is a brand new concept of restaurant specializing in meat and lobster dishes, signed Maxime Stafrach, a former Thomas who spent in Koh-Lanta . A trendy wedding to try in the 7th arrondissement, instead of the Café Sillon \".<br> <br> A restaurant for friends for simple but comforting cuisine. This new iconic place of modern Lyonnaise cuisine is based in the cosmopolitan 7th arrondissement of Lyon. The chef does not give way and he composes his dishes like musical scores brilliantly handling fire and ice.<br><br>English spoken here</span>",
  },
  {
    id: 4,
    name: "Bouchon Les Lyonnais",
    district: "Lyon 5er // Lyon 5st",
    picture: "./assets/images/restaurants/restaurant_bouchon_les_lyonnais.JPG",
    description:"<span>Ahhhh les célèbres bouchons lyonnais, si tu as 50 ans et que tu n'as pas mis les pieds dans un bouchon c'est que t'as raté ta vie !<br> Mais tous les bouchons Lyonnais ne se valent pas et assurément celui là tiens la dragée haute aux autres institutions de la célèbre citée des Gaulles. Tout y est quenelles et tartes pralines et même la cervelle de canuts. Mais au fait c'est quoi un Bouchon ?<br><br>Le bouchon est un restaurant typique où l'on mange des spécialités, dont le tablier de sapeur, les quenelles, la salade lyonnaise et la cervelle de canut. Le tout est généralement servi très copieusement et arrosé d’un verre de beaujolais ou de côtes-du-rhône. Cité par de nombreux auteurs, ce lieu traditionnel se doit d'être simple et convivial. Mentionnons Félix Benoit :<br> <br>\« Dans ces bouchons s'épanouit une ambiance qui ne souffre pas l'exportation, et dont la fortune fugace procède de critères impondérables qui tiennent à la fois de la qualité du vin servi au comptoir, de la tête du patron, et des pieds de cochon présentés sur la table!»<br><br>Alors tenté ?</span><span>Ahhhh the famous \"Bouchon Lyonnais\", if you are 50 years old and you have not set foot in this place then you have missed part of your life! <br><br> But all \"Bouchon Lyonnais\" are not the same and certainly this one hold the high for the other institutions of the famous city of Gauls. Everything ist here dumplings and praline tarts and even the famous \"Cervelle des Canuts\"  the famous brains of canuts !!!. But you you really know what is a \"Bouchon Lyonnais\"? <br> <br>The \"Bouchon Lyonnais\" is a typical restaurant where one eats specialties, including crazy and indescriptible delicatessen, the \"quenelles\", the Lyonnaise salad pfff in fact nothing can be translated it an experience you need to do once. Everything is generally served very copiously and washed down with a glass of Beaujolais or Côtes-du-Rhône. Cited by many authors, this traditional place must be simple and friendly. Let us mention Félix Benoit: <br> <br>\"In those places an atmosphere flourishes which does not suffer export, and whose fleeting fortune stems from imponderable criteria which depend both on the quality of the wine served at the counter, on the head of the boss, and on the feet of pigs presented on the table!\” »<br> <br>So tempted?</span>",
  },
];

function createCard(title, imageUrl, district, description, id) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  card.appendChild(cardImg);

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.dataset.translatable = "";
  cardTitle.innerHTML = title;
  card.appendChild(cardTitle);

  const cardDistrict = document.createElement("div");
  cardDistrict.classList.add("card-district");
  cardDistrict.dataset.translatable = "";
  cardDistrict.innerHTML = district;
  card.appendChild(cardDistrict);

  const overlay = document.createElement("div");
  overlay.id = id;
  overlay.classList.add("overlay");
  cards.appendChild(overlay);
  overlay.style.display = "none";
  document.getElementById(id).addEventListener("click", () => {
    document.getElementById(id).style.display = "none";
  });

  const overlayScrolling = document.createElement("div");
  overlayScrolling.classList.add("scrolling");
  overlayScrolling.dataset.translatable = "";
  overlayScrolling.innerHTML = description;
  overlay.appendChild(overlayScrolling);

  card.addEventListener("click", () => {
    document.getElementById(id).style.display = "block";
  });
}

for (let site of sitesList) {
  createCard(site.name, site.picture, site.district, site.description, site.id);
}
