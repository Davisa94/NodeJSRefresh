/**************************************************
 * A refresher on Node and Javascript
 * Author: Austin Benitez 
 * Date 2/8/2022
 * This is a JS implimentation of FizzBuzz via CLI
 * The Server Version is another project for the future
 **************************************************/



/**************************************************
 * A function which takes ana rray and prints each
 * index on its own line.
 **************************************************/
function arrayPrinter(array)
{
   for(var item in array)
   {
      console.log(array[item]);
   }
}


/**************************************************
 * The Main logic function for determining if the 
 * given number is fizz buzz or the number given
 * Takes: integer
 * Returns: String containing what it is designated
 *          i.e fizz/buzz/#
 *************************************************/
function fizzBuzzLogic(number)
{
   var determinedValue = "";
   if(number % 3 == 0)
   {
      determinedValue += "Fizz"
   }
   if(number % 5 == 0)
   {
      determinedValue += "Buzz"
   }
   if(determinedValue == "")
   {
      determinedValue = number;
   }
   return determinedValue;
}

/***************************************************
 * The function that generates the array of values 
 * either fizz, buzz or the given number.
 **************************************************/
function generateFizzBuzzArray(max)
{
   return Array.from({length:100}, function (_,i){
      return fizzBuzzLogic(i);
    });
}



function main()
{
   // print each item on a newline
   arrayPrinter(generateFizzBuzzArray());
   return 0;
}





main()