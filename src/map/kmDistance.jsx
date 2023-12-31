function kmDistance(lon1, lat1, lon2, lat2) {
  if (lon2 === 0 && lat2 == 0) return 0;
  var R = 6371;
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad();
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

if (typeof Number.prototype.toRad === "undefined") {
  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180;
  };
}

export default kmDistance;
