
        function startloop()
        {
            var text = document.getElementById("text").value;
            var number = parseInt(document.getElementById("number").value);
            var output = document.getElementById("output");
                
           if(text && number!=='')
           {
             for(var i = 0 ; i<=number ; i++)
             {output.innerHTML+=i +" : "+text+'<br>';}
           }
           else{output.innerHTML="erorr"} 
        }

