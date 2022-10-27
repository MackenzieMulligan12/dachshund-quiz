//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="You know what you're doing!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="You really know a lot about dachshunds!"
compliments[4]="Way to go!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What were dachshunds bred to do?"
choice1[1]="Burrow into beds."
choice1[2]="Hunt Badgers."
choice1[3]="Hunt Deer."
choice1[4]="Sleep all day."

question[2]="What are things dachshunds are known for doing?"
choice2[1]="Burrowing"
choice2[2]="Barking"
choice2[3]="Digging"
choice2[4]="All of the above."

question[3]="What sizes do dachshunds come in?"
choice3[1]="Standard and Large"
choice3[2]="Standard and Tiny"
choice3[3]="Standard and Minature"
choice3[4]="Minature and Large"

question[4]="What type of coats do they have?"
choice4[1]="Smooth"
choice4[2]="Longhaired"
choice4[3]="Wirehaired"
choice4[4]="All of the Above"

question[5]="What were their names after World War 1?"
choice5[1]="Badger Dogs"
choice5[2]="Hot Dogs"
choice5[3]="Weiner Dogs"
choice5[4]="Doxies"

question[6]="What is a health issue dachshunds are most known for?"
choice6[1]="Chronic Stomachaches"
choice6[2]="Ear Infections"
choice6[3]="Leg Issues"
choice6[4]="Back Issues"

question[7]="What character trait would you use to describe dachshunds?"
choice7[1]="Mean"
choice7[2]="Unloving"
choice7[3]="Stubborn"
choice7[4]="Quiet"

question[8]="If you own a dachshund, What should you own?"
choice8[1]="Steps/Ramp"
choice8[2]="Blankets"
choice8[3]="Sweaters"
choice8[4]="All of the above"

question[9]="How many different tyoes of markings do they have?"
choice9[1]="Fifteen"
choice9[2]="Five"
choice9[3]="Twelve"
choice9[4]="Ten"

question[10]="How long do they live for on average?"
choice10[1]="12 years"
choice10[2]="6 years"
choice10[3]="10 years"
choice10[4]="14 years"

solution[1]="b"
solution[2]="d"
solution[3]="c"
solution[4]="d"
solution[5]="a"
solution[6]="d"
solution[7]="c"
solution[8]="d"
solution[9]="a"
solution[10]="a"

