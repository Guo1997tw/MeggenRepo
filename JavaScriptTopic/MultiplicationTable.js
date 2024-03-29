for(var i = 1; i <= 9; i++)
{
    for(var j = 1; j <= 9; j++)
    {
        console.log(`${i} * ${j} = ${i * j}`);

        if(j === 9)
        {
            console.log("\n");
        }
    }
}