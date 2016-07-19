function decode(str){
     var str = str.toLowerCase().split('')
     var tech = ['angular2', 'backbone', 'cappuccino', 'chaplin', 'echo', 'ember', 'jquery', 'node', 'socket', 'meteor', 'react', 'handlebars', 'typescript', 'redux', 'foundation', 'three', 'underscore', 'express', 'mongo', 'mongodb'];
     var techList = [];
     for (var i = 0; i < tech.length; i++) {
       var temp = '';
       var letters = [];
       for (var x = 0; x < tech[i].length; x++) {
         if (str.indexOf(tech[i][x]) >= 0) {
           letters.push(str[str.indexOf(tech[i][x])]);
           temp += tech[i][x];
         }

         if (temp == tech[i]) {
           debug("this is temp ", temp, "and", letters );
           techList.push(temp);
           for (var j = 0; j < letters.length; j++) {
             // debug("Before: ", letters, str);
             var letterIndex = str.indexOf(letters[j])
             str.splice(letterIndex, 1);
             // debug("after: ", str);
           }
           debug(str);
         }

         if (str.indexOf(tech[i][x]) == -1) {
           // debug("breaking");
           break;
         }
       }
     }
     debug(techList, str);
   }
   decode('NTYOPENDSGLCERAUJIR2PTSA');