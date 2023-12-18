let rows = parseInt(prompt('Enter the number of rows you want in your table.'));
let column = parseInt(prompt('Enter the number of columns you want in your table'));

function dynamicTable(rows, column){
    let table =document.createElement("table");
    let thead = document.createElement("thead");
    let tableRow = document.createElement("tr");
    for(i=1; i <=column; i++){
        let th = document.createElement("th");
        th.textContent = 'Column  ' + i;
        
        tableRow.append(th)
        ;
    }
    thead.append(tableRow);
    table.append(thead);
    
    
    let tbody = document.createElement("tbody");
    for(l=1; l<=rows; l++){
        row=document.createElement("tr");
        for(i=1; i <= column; i++){
            td=document.createElement("td");
            row.append(td);
            
        }
        tbody.append(row);
        table.append(tbody);
    } 
    document.body.append(table);
    
    table.style.backgroundColor = "lightblue";
    table.style.width = "100%";
    table.style.border = "5px solid black";
    
    
    
    }

dynamicTable(rows ,column);



