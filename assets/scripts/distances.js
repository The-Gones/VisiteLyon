const myPosition = [45.74636657848492, 4.8271802891410704];
const latLgnArray = [
  ["Rue de Saint Jean", 45.76284862751659, 4.82712289542231],
  ["Bellecour", 45.75784511732561, 4.8318345861873855],
  ["Paul Bocuse", 45.815623046911064, 4.848125827332044],
  ["Parc de la tête d'or", 45.77724496109871, 4.854030158042909],
  ["Hôtel de Ville", 45.767720762954404, 4.835725478180787],
  ["Institut lumière", 45.74490954213577, 4.870858098379423],
  ["Bouchon Lyonnais", 45.76187314114473, 4.82623209282098],
  ["Tetedoie", 45.75894375572862, 4.823471376799861],
  ["La table de Max", 45.7504299522329, 4.844660414172378],
  ["Musée Des Confluences", 45.73315440812064, 4.8181694445917245],
  ["Halle Tony Garnier", 45.730841613025476, 4.824883982891172],
  ["Fourvière", 45.76201107234311, 4.822013365999859],
];

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::                                                                         :::
// :::  This routine calculates the distance between two points (given the     :::
// :::  latitude/longitude of those points). It is being used to calculate     :::
// :::  the distance between two locations using GeoDataSource (TM) prodducts  :::
// :::                                                                         :::
// :::  Definitions:                                                           :::
// :::    South latitudes are negative, east longitudes are positive           :::
// :::                                                                         :::
// :::  Passed to function:                                                    :::
// :::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
// :::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
// :::    unit = the unit you desire for results                               :::
// :::           where: 'M' is statute miles (default)                         :::
// :::                  'K' is kilometers                                      :::
// :::                  'N' is nautical miles                                  :::
// :::                                                                         :::
// :::  Worldwide cities and other features databases with latitude longitude  :::
// :::  are available at https://www.geodatasource.com                         :::
// :::                                                                         :::
// :::  For enquiries, please contact sales@geodatasource.com                  :::
// :::                                                                         :::
// :::  Official Web site: https://www.geodatasource.com                       :::
// :::                                                                         :::
// :::               GeoDataSource.com (C) All Rights Reserved 2018            :::
// :::                                                                         :::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  }
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === "K") {
    dist *= 1.609344;
  }
  if (unit === "N") {
    dist *= 0.8684;
  }
  return dist;
}

latLgnArray.forEach((point) => {
  console.log(
    `Le site ${point[0]} est à ${distance(
      point[1],
      point[2],
      myPosition[0],
      myPosition[1],
      "K"
    ).toFixed(3)} km de la Wild`
  );
});
