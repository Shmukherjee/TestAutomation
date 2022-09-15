
let arr = [1,11,111,222,555]
let x,sum=0,avrg
for(x of arr)
{
    sum = sum+x
}
avrg = sum/arr.length
console.log("average is: ",avrg);