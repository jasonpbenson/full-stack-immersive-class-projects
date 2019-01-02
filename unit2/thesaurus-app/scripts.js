// console.log('sanity check');
// const apiKey = "e17247b9ef59f5c068e3b1c0d436eda8";
// const baseUrl = `http://words.bighugelabs.com/api/2/${apiKey}`;

// $("#word-form").submit((event)=>{
//     event.preventDefault();   
//     const wordSearch = $("#search-input").val();
//     const wordSearchUrl = `http://words.bighugelabs.com/api/2/e17247b9ef59f5c068e3b1c0d436eda8/${wordSearch}/json`;
//     $.getJSON(baseUrl, (wordSearch)=>{
//         console.log(wordSearch); 
//     })   
// })

$("#word-form").submit((event)=>{
    event.preventDefault();
    const apiKey = "e17247b9ef59f5c068e3b1c0d436eda8";
    const word = $('#search-input').val();
    const baseUrl = `http://words.bighugelabs.com/api/2/${apiKey}/${word}/json`;
    $.getJSON(baseUrl, (thesaurusData)=>{
        console.log(thesaurusData);
    });
});