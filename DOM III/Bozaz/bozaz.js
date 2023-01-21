
    document.querySelector("form").addEventListener("submit",bozazList);

    function bozazList(){
                //console.log("here")
                event.preventDefault();
                var itemCategory = document.querySelector("#category").value;
                var itemName = document.querySelector("#name").value;
                var itemPrice = document.querySelector("#price").value;

                console.log(itemCategory,itemName,itemPrice);

                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.innerText = itemCategory;
                var td2 = document.createElement("td");
                td2.innerText = itemName;
                var td3 = document.createElement("td");
                td3.innerText = itemPrice;

                tr.append(td1,td2,td3);
                document.querySelector("tbody").append(tr);

    }
















