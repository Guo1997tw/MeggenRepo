for(var i = 1; i <= 9; i++)
{
    var line = "";

    for(var j = 1; j <= i; j++)
    {
        line = line + "* "
    }

    console.log(line.trim());
}