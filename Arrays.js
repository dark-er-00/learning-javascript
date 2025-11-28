let books = [{
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pageNum: 352
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pageNum: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pageNum: 352
    }
];

books.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pageNum: 254
});

console.log(`Length of the array is ${books.length}`);
for(let i = 0; i < books.length; i++){
    console.log(books[i].title);
}

let lastTwoBooks = books.slice(-2);

books.shift();

console.log(`Length of the array is ${books.length}`);
for(let i = 0; i < books.length; i++){
    console.log(books[i].title);
}

let sum = 0;

for(let i = 0; i < books.length; i++){
    sum += books[i].pageNum;
}

console.log(`Sum of all the page numbers: ${sum}`);