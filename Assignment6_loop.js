<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        alert('hi how are you')

        // how loop work 
        // loop (var name = value ; var <= any number; varIncrement(++) )
        // for (var i = 0; i <= 10 ; i++) i is standard name
        // pehle var name or index diya phr semi colon phr var kha tk chalana loop ko (e.g: i <= 10) ; phr increment krwana i++

        // 1. Write a program to display the message “Hello World” 5 times
        // in your browser using for loop.

        var initial = 'Hello World'
        for (var i = 0; i < 5; i++) { console.log(initial) }

        //2. Write a program to print numeric counting from 1 to 10.

        // var numeric = 1
        for (var i = 0; i <= 10; i++) {
            console.log(i)
        }
        // 3. Write a program to print multiplication table of any number
        // using for loop. Table number & length should be taken as an
        // input from user.

        var num = prompt('Enter a number')
        var numlength = prompt('Enter length number')
        for (var i = 0; i <= numlength; i++) {

            console.log(num + 'x ' + i + 'is' + num * i)

        }

        // 4. You have an array
        // A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
        // Write each element on new line with the help of for loop.

        var arr = ['Nokia', 'Huawei', 'Apple', 'Samsung']
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }

        // 5. Write a program to print items of the following array using for
        // loop:
        // fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


        var fruits = ['apple', 'banana ', 'mango', 'grape']
        for (var i = 0; i < fruits.length; i++) {
            console.log(fruits[i])
            console.log('Element  of ' + i + 'index : ' + fruits[i])

        }

        // 6. Write a program to initialize an array of N items by using
        // prompt. Where N is number of items as entered by the user.

        var numberOfItems = prompt('Enter number of index')
        var item1 = prompt('Enter Value for 0 index')
        var item2 = prompt('Enter Value for 1 index')
        var item3 = prompt('Enter Value for 2 index')
        var item4 = prompt('Enter Value for 3 index')
        var convertArr = [item1, item2, item3, item4]
        console.log('Number of items: ' + numberOfItems + '\n Items :')
        for (var i = 0; i <= numberOfItems; i++) {
            console.log(convertArr[i])
        }
        // 7. Generate the following series in your browser. See example
        // output.
        // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
        // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
        // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

        var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        counting.reverse()
        console.log('Reverse ' + counting)
            
        


        // 8. You have an array
        // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
        // Write a program to enable “search by user input” in an array.
        // After searching, prompt the user whether the given item is
        // found in the list or not. Example:


        var cakes = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
        var userInput = prompt('Kia khana hai?')
        var cakeFound = false

        for (var i = 0; i < cakes.length; i++) {
            debugger
            if (cakes[i] === userInput) {
                alert('Yes your cake is found!')
                cakeFound = true

                break
            }
        }

        if (cakeFound === false) {
            alert('Sorry! Kisi aur bakery se ja ker lelo!')
        }

        var numArr = [21, 30, 40, 20, 70, 50, 60]
        var largenum = 0
        for (var i = 0; i < numArr.length; i++) {
            if (numArr[i] > largenum) {
                console.log(numArr[i])
            }
        }
        //      9.   Write a program to identify the largest number in the given
        //      array.
        // A = [24, 53, 78, 91, 12]
        var numArr = [21, 30, 40, 20, 70, 50, 60]
        var largenum = 0
        for (var i = 0; i < numArr.length; i++) {
            debugger
            if (numArr[i] > largenum) {
                largenum = numArr[i]

            }
        }
        console.log(largenum)

        // for Smallest number

        var numArr = [21, 30, 40, 20, 70, 50, 60]
        var SmallNumber = numArr[0]
        for (var i = 0; i < numArr.length; i++) {
            debugger
            if (numArr[i] < SmallNumber) {
                SmallNumber = numArr[i]

            }

        }
        console.log(SmallNumber)


        // 11. Write a program to identify the largest & the smallest
        // number in the given array.
        // A = [24, 53, 78, 91, 12]
        var numArr = [21, 30, 40, 20, 70, 50, 60]
        var SmallNumber = numArr[0]
        var largenum = 0

        for (var i = 0; i < numArr.length; i++) {
            //debugger is use for check how conditon can work
            if (numArr[i] < SmallNumber) {
                SmallNumber = numArr[i]

            }
            if (numArr[i] > largenum) {
                largenum = numArr[i]

            }
        }
        console.log(largenum)
        console.log(SmallNumber)

        //12. Write a program to print multiples of 5 ranging 1 to 100

        for (var x = 1; x <= 100; x++) {
            if (x % 3 && x % 5) {
                console.log(x);
            } else {
                if (x % 3 == 0) {
                    console.log("ping");
                }
                if (x % 5 == 0) {
                    console.log("pong");
                }
            }
        }

// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

var studentNAmes = ["Ali", "Sami", "Taha", "Inam"];
var studentScores = [58, 73, 89, 90];
for  (i = 0 ; i < studentNAmes.length ; i++) {
    debugger
    if (studentNAmes[i] == studentScores[i]) {
        
        
    }
    console.log(studentNAmes[i] + ' ' + studentScores[i])
    
}


// 14. Write a program that prints number from start of the array
// to desired stop value. Given array:

var studentScores = [58, 73, 89, 90];
var userInput = prompt(studentScores , 'Enter number of this number')

for (i =0 ; i < studentScores.length ; i++) {
    if(userInput === studentScores[i]){
        console.log(studentScores)
    }
}

// 15. You have an array
//     A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
//     Write each element on new line with the help of nested for
//     loops.

var arr = [ [1,2,3] , [4,5,6] , [7,8,9] ]
for (var i = 0 ; i < arr.length; i++) {
    var nestedArray = arr[i]

    for (var j = 0; j < nestedArray.length; j++) {
        console.log(nestedArray[j])
    }

    console.log('-----')
}

// 16.

var input = prompt('Enter number')

for (i=input ; i >= 0 ;i -= 0.5 )
{
    debugger
        console.log(i)
    
}

// Q 17.

for (i = 0; i <= 20 ; i++) {
    debugger
    if (i % 2 == 0 ) {
        console.log(i + ' is Even' )
    }

    else {
        console.log(i + ' Is odd')
    }
}

//  Q 18 for odd

var product = 1;

for (var i = 1; i <= 7; i += 2) {
  product *= i;
}

console.log("Product of odd integers from 1 to 7:", product);

//  for Even
var product = 1;

for (var i = 2; i <= 10; i += 2) {
  product *= i;
}

console.log("Product of Even integers from 1 to 10:", product);

// Q 19 

var initialStars = prompt("Enter the initial number of stars:")

for (var i = initialStars; i >= 1; i--) {
    debugger
    var starLine = "";
    for (var j = 1; j <= i; j++) {
        debugger
      starLine += "*";
    }
    console.log(starLine);
  }

    </script>
</head>

<body>

</body>

</html>