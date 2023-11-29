

function Book(title,author, birthYear, nationality,genre,price){

    this.title = title;
    this.author = author;
    this.birthYear = birthYear;
    this.nationality = nationality;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function (){
    console.log(`Book Title : ${this.title}`)
    console.log(`Author's name : ${this.author}`)
    console.log(`Birth Year : ${this.birthYear }`)
    console.log(`Nationality : ${this.nationality }`)
    console.log(`Genre : ${this.genre}`)
    console.log(`Book Price : ${this.price}`)
}


const Book_data_1 = new Book("The God of Small Things","Arundhati Roy",1961,"Indian","Fiction","$10")

const Book_data_2 = new Book("The Blue Umbrella","Ruskin Bond",1934,"Indian","Fiction/Children's Literature","₹ 83")
Book_data_1.getBookInfo()
console.log("----------------------------------------------------")
Book_data_2.getBookInfo()
