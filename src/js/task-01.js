const numberOfCategory = document.querySelectorAll('.item');
console.log("Number of categories:", numberOfCategory.length);

const categoryItem = numberOfCategory.forEach(item => {
    const category = item.querySelector('h2').textContent;
    console.log("Category:", category);
    const counter = item.querySelectorAll('li').length;
    console.log("Elements:", counter);
});


