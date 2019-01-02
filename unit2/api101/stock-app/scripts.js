// console.log("sanity");

$(document).ready(()=>{
    //this will halt js until DOM has loaded
    const stockForm = document.querySelector('.stock-form');
    // console.log(stockForm)

    $(".stock-form").submit(()=>{
        //stop browser from sending the form to another page
        event.preventDefault();
        // console.log(event);
        const symbol = $('#symbol').val();
        $('#symbol').val('');
        // console.log(symbol);

        //allow for multiple search entries:

        const symbols = symbol.split(',');
        symbols.forEach((s)=>{
            
            // console.log(symbols);
            s = s.trim();
            //our endpoint
            //an endpoint is a web accessible URL that responds with data
            const url = `https://api.iextrading.com/1.0/stock/${s}/quote`
            //getJSON method takes 2 args:
            //1. where to get JSON
            //2. function to run
            $.getJSON(url, (theDataJSFound)=>{
                let changeClass = "";
                if(theDataJSFound.change > 0){
                    changeClass = "bg-success";
                }else{
                    changeClass = "bg-danger";
                }
                // console.log(theDataJSFound);
                $("#stock-body").append(`
                <tr>
                    <td>${theDataJSFound.symbol}</td>
                    <td>${theDataJSFound.companyName}</td>
                    <td>${theDataJSFound.high}</td>
                    <td>${theDataJSFound.low}</td>
                    <td class=${changeClass}>${theDataJSFound.change}</td>
                </tr>`)
            });
        });
        $('#stock-table').DataTable();
    });
});