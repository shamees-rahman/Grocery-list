// Creating an object
function ajax(){
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    
    xhttp.onreadystatechange = function()
    {
        // condition
        if(this.readyState==4&&this.status==200)
        {
            var responses = JSON.parse(this.responseText);
            var Jgrocery = responses.grocery;
            var output = "<table> <tr><th>No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
            for(var i = 0; i<Jgrocery.length; i++)
            {
                output += `<tr>
                <td>${Jgrocery[i].Slno}</td>
                <td>${Jgrocery[i].Name}</td>
                <td>${Jgrocery[i].Ouantity}</td>
                <td>${Jgrocery[i].Unit}</td>
                <td>${Jgrocery[i].Department}</td>
                <td>${Jgrocery[i].Notes}</td>
                </tr>`;
            }
            
            document.getElementById("table_body").innerHTML = output;
            
        }
        
    
    }
    xhttp.open("GET", "grocery.json", true);
        xhttp.send();
        document.getElementById("table_body").style.display="";

    }