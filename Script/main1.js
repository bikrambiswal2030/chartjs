function palindrome(){
revString= "";
inpString= document.getElementById("text").value;
i=inpString.length;
for(var j=i; j>=0; j--){
    revString = revString+inpString.charAt(j);
}
if(revString == inpString)
        document.getElementById("result").innerHTML = "String is a pallindrome";
    else
        document.getElementById("result").innerHTML = "String is not a pallindrome";
}