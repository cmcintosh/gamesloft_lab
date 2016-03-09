app.factory('Filter', ['$q', '$http', filterFactory]);

function filterFactory($q, $http) {
  var resource = {
      get: getFilters,
  };

  function getFilters() {
    var defer = $q.defer();
    var dummyData = [
      {
        label: 'Site',
        options: [
          {
            value: 0,
            name: 'Gameloft USA'
          },
          {
            value: 1,
            name: 'Gameloft UK'
          }
        ]
      }
    ];



    return dummyData;
  }


  return resource;
}
