/* Tyler Walsh
walsh_ao3b.js
19WI_INFO_2124_WW
Thoendel
12/20/2019 */

const firstName = "Tyler"; //A constant with a value equal to my first name
const lastName = "Walsh"; //A constant with a value equal to my last name

const villainFirstName = "Darth"; //A constant with a value equal to a villain's first name.
const villainLastName = "Vader"; //A constant with a value equal to a villain's last name.

const companyName = "Google"; //A constant with a value equal to a company's name
let annualSalary = 250000; //A variable integer for the annual salary, supports block scoping.

let laughString = "Ahhahahaha! "; //A variable for the sound of a laugh, supports block scoping.
let age = 20; //A variable integer for my age. Supports block scoping.

let weight = 160; //A variable integer for my weight. Supports block scoping.
let counterStartValue = 8; //A variable for a timer's countdown before an explosion. Supports block scoping


console.log(`Good evening, ${firstName}. I'm glad to see you could join us.
According to your files, you're ${age} years old. Hehe, that means next
year you'll be ${age +1} years old and if I doubled your age, you'd be
 ${age + age} years old! 

I found your file because your last name, '${lastName.toUpperCase()}' was all
capitalized on your folder. This is unusual because our files usually have
last names all lowercase. So I expected to see '${lastName.toLowerCase()}', which 
I did not see.

Allow me to introduce myself. My name is ${villainFirstName + ' ' + villainLastName}.

I'm the chief investigator at ${companyName}. I've been tasked with investigating you 
due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you
know, your annual salary is $${annualSalary} and 10% of your annual salary is $${annualSalary * 0.1},
which is a sizeable amount for our company.

I know your password. It was simple, it's just the first, third, and fourth letters of your first name: 
${firstName.charAt(0)} ${firstName.charAt(2)} ${firstName.charAt(3)}

And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name:
${lastName.indexOf('W')} ${lastName.indexOf('l')} ${lastName.indexOf('s')}

Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds "${villainLastName.startsWith('V')}"
...and then I ask Google home, "Does my last name end with 'n'", and Google responds "${villainLastName.endsWith('n')}"

And sometimes, I ask Google home if my weight is finite, and Google home responds "${Number.isFinite(weight)}", which makes me happy.
...but when I ask if my first name is finite, Google home responds, "${isFinite(villainFirstName)}", and this makes me sad.

Anyway, I've talked to much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us.

Allow me to laugh five times: ${laughString.repeat(5)}

**Background voice**
Now counting down: ${counterStartValue}
${counterStartValue -1}
${counterStartValue -2}
${counterStartValue -3}
${counterStartValue -4}
${counterStartValue -5}
${counterStartValue -6}
${counterStartValue -7}

Boom!`); // A template literal that outputs a paragraph. The paragraph uses various functions and methods for easier adjustment.