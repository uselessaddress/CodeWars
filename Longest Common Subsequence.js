// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence

// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc"

// LCS examples

// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// Notes

// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters (in JavaScript)
// All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
// Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

// Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).


function LCS(x, y) {
	var ans = [];
    var str1 = x.split("");
  	var str2 = y.split("");
  	var l1 = str1.length;
  	var l2 = str2.length;
  	var table = new Array();       
  	for(let i=0;i<l1;i++){         
    	table[i]=new Array();    
        	for(let j=0;j<l2;j++){      
        		table[i][j]=0;
    		}
  	}

  	for(let i=0;i<l1;i++){
  		for(let j=0;j<l2;j++){
  			if(i==0||j==0){
  				table[i][j]=0;
  			}else if(str1[i]==str2[j]){
  				table[i][j]=table[i-1][j-1]+1;
  			}else{
  				table[i][j]=Math.max(table[i-1][j],table[i][j-1]);
  			}
  		}
  	}
 	for(let i=l1-1,j=l2-1;i>=0&&j>=0;){
  			if(str1[i]==str2[j]){
  				ans.unshift(str1[i]);
  				i--;
  				j--;
  			}
  			else{
  				if(i==0||j==0){
  					if(i==0&&j==0){
  						i--;j--;
  					}
  					else if(i==0){
  						j--;
  					}
  					else{
  						i--;
  					}
  				}else if(table[i][j-1] > table[i-1][j]){
  					j--;
  				}
  				else{
  					i--;
  				}
  			}
  	}
  	if(ans.length==0){
  		ans = "";
  	}else{
  		ans = ans.join("")
  	}
  	return ans;
}

console.log(LCS("s","da"))

// function LCS( xstr, ystr ) {
//   if( xstr == '' || ystr == '' ) return '';
    
//   var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
//       yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );
      
//   if( xp == yp )
//     return xp + LCS( xrest, yrest );
  
//   var lcs1 = LCS( xstr, yrest ),
//       lcs2 = LCS( xrest, ystr );
      
//   return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
// }