'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var array=new Array();

   var result={};
   for(var i=0,v,l=collectionA.length; i<l,v=collectionA[i];i++)
   {
       if(v["key"] in objectB["value"])
       {
        if(v["count"]>=3)
        {
             v["count"]--;
        }
       }    
   }
 
  
   for( var key1 in result){
    var dict_form1 = {
      key : key1,
      count : result[key1]       
    };
    array.push(dict_form1);
  }
    console.log(array);
  }

