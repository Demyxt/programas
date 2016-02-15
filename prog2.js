function linea(n1)
{
    var guion = "";
    for (i=0;i<n1;i++)
    {
        guion = guion + "-";
    }
    return guion;
}

console.log(linea(5));