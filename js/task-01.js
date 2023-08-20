const listOfItems = document.querySelectorAll("li.item");
console.log(listOfItems);
console.log(`Number of categories: ${listOfItems.length}`);

listOfItems.forEach(items => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements:${item.firstElementChild.children.length}`);
    console.log(`CAtegory: ${item.lastElementChild.textContent}`);
    console.log(`Elements:${item.lastElementChild.children.length}`);
}
)

