var result = "\n"
var myHeader = document.getElementById("theHeader")

function init()
{
    for(var i = 1; i < 11; i++)
{
    for(var j = 1; j < 11; j++)
    {
        result += i * j + "\n" 
    }

    result += "<br>" + "<br>"
}

myHeader.innerHTML += result 

}