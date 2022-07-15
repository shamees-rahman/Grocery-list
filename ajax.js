function ajax(){
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    
    xhttp.onreadystatechange = function()
    {
        // condition
        if(this.readyState==4&&this.status==200)
        {
            var deptarr = [];
            var responses = JSON.parse(this.responseText);
            var Jgrocery = responses.grocery;
            var header= "<table><tr><th>No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
            var body="";
            var dropdown="<select id='framework'><option value='1'>All</option>";
            for(var i = 0; i<Jgrocery.length; i++)
            {
                deptarr.push(`${Jgrocery[i].Department}`);
                body += `<tr>
                <td>${Jgrocery[i].Slno}</td>
                <td>${Jgrocery[i].Name}</td>
                <td>${Jgrocery[i].Ouantity}</td>
                <td>${Jgrocery[i].Unit}</td>
                <td>${Jgrocery[i].Department}</td>
                <td>${Jgrocery[i].Notes}</td>
                </tr>`;
            }
            var deptset = new Set(deptarr);
            for (let setting of deptset) 
            {
            dropdown+=`<option value="${setting}">${setting}</option>`;}
            dropdown+="</select><button id='btn'>Get the Selected Department</button>";
            var output = dropdown + header + body;
            document.getElementById("table_body").innerHTML = output;
            var counting = 0;
            var btn = document.getElementById('btn');
            var dept = document.getElementById('framework');
            
            
            btn.onclick = (event) => {
                // event.preventDefault();
                counting++;
                console.log(dept.value);
                // document.getElementById("table_body").innerHTML = slice;
                
                if (dept.value!=1){
                    var slice = "<select id='framework'><option value='1'>All</option><option value='Dairy'>Dairy</option><option value='Grains'>Grains</option><option value='Poultry'>Poultry</option><option value='Snacks'>Snacks</option><option value='Fruits & Vegetables'>Fruits & Vegetables</option></select><button id='btn'>Get the Selected Department</button><table> <tr><th>No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
                    var select = Jgrocery.filter(element => element.Department == dept.value);
            
            var promise = new Promise(function(resolve){
                for(var i = 0; i<select.length; i++)
            {
                slice += `<tr>
                <td>${select[i].Slno}</td>
                <td>${select[i].Name}</td>
                <td>${select[i].Ouantity}</td>
                <td>${select[i].Unit}</td>
                <td>${select[i].Department}</td>
                <td>${select[i].Notes}</td>
                </tr>`;
            }
            document.getElementById("table_body").innerHTML = slice;

            resolve ();
          })
          promise.then(function (){
            var btn = document.getElementById('btn');
            var dept = document.getElementById('framework');})
            }}
            
        }
        
    
    }
    xhttp.open("GET", "grocery.json", true);
        xhttp.send();
        document.getElementById("table_body").style.display="";

    }