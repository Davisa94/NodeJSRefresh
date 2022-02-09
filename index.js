/**************************************************
 * A refresher on Node and Javascript
 * Author: Austin Benitez 
 * Date 2/8/2022
 * This is a JS implimentation of FizzBuzz via CLI
 * The Server Version is another project for the future
 **************************************************/

/**************************************************
 * The Main logic function for determining if the 
 * given number is fizz buzz or the number given
 * Takes: integer
 * Returns: String containing what it is designated
 *          i.e fizz/buzz/#
 *************************************************/
function fizzBuzzLogic(number)
{
   determinedValue = "";
   if(number % 3 == 0)
   {
      determinedValue = "Fizz"
   }
   if(number % 5 == 0)
   {
      determinedValue += "Buzz"
   }
   else
   {
      determinedValue = number;
   }
   return determinedValue;
}

/***************************************************
 * The function that generates the 
 */



function main()
{
   return 0;
}





main()