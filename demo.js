/*

writing one callback in another callback called as callback hell
callback is the big issue in development
never use callback hell while developing the application
debugging of  callback application are difficult 
*/

//example1


function addition(val,callback)
{
    return callback((val+5),false);
}
function substration(val,callback)
{
    return callback((val-3),false);
}
function multiplication(val,callback)
{
    return callback((val*2),false);
}
function division(val,callback)
{
    return callback((val/2),false);
}

addition(5,function(addres,err)
{

    if(!err)
    {     substration(addres,function(sres,err)
        {
            if(!err)
            {
                multiplication(sres,function(mres,err){
                    if(!err)
                    {
                        division(mres,function(dres,err)
                        {
                            if(!err)
                            {
                                console.log(dres);
                            }
                        })
                    }

                })
            }
        })
    }
});

///to overcome callback hell  we  have async and await and promise