app
  .service('data', ['$q', '$http', function($q, $http){
    this.get = function(model){
      //return {"name": "AgentMulder","avatar_small": "agent_icon_new.png","notifications":3,"ticket_summary":{"open": "6","unresolved": "3","waiting": "3","solved": "2"}}
      return $http.get('data/'+model+'.json')
        //.then(function(response){
        //  var data = response.data;
        //  console.log(data);
        //  return data;
        //})
    }
    //return this;
  }])
