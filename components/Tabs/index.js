// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const axiosPromise =  axios.get('https://lambda-times-backend.herokuapp.com/topics');
const entryHTML = document.querySelector('.topics');

console.log(axiosPromise);
console.log(entryHTML);

axiosPromise.then(response => {
    console.log('res', response);
    console.log('res.data.topics', response.data.topics);

    let tabInfo = createTab(response.data);

    entryHTML.appendChild(tabInfo);
})

axiosPromise.catch(error => {
    console.log('error is occurring', error);
})

function createTab(data) {

    const tab = document.createElement('div');

    tab.textContent = `${data.topics}`;

    tab.classList.add('tab');

    return tab;
}