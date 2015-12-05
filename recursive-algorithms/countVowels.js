// var countVowels = function(str) {

//     var vowels = ["a", "e", "i", "o", "u"];
//     var count = 0;
    
//     if (str.length === 0) {
//         return 0;
//     }

//     str = str.toLowerCase();

//     if (vowels.indexOf(str.charAt(0)) !== -1) {
//         count++;
//     }

//     return count + countVowels(str.substr(1));
// };

var countVowels = function(str){
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;

    str = str.toLowerCase();

    if(str.length > 1){
        count += countVowels(str.substr(1));
    }

    if(vowels.indexOf(str.charAt(0)) !== -1){
        count++;
    }

    return count;
};

console.log(countVowels("aeiouuuukkkqwrtpaaa"));
