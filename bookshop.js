//Create the object bookshop with nested objects for each book

var bookshop = {
    book1: {
        name: 'Welcome Holy Spirit',

        describe: function () {
            return 'The title of the book is '+this.name;
        }
    },

    book2: {
        name: 'The Code of the Holy Spirit',

        describe: function () {
            return 'The title of the book is '+this.name;
        }
    },

    book3: {
        name: 'Daughter of Destiny',

        describe: function () {
            return 'The title of the book is '+this.name;
        }
    }
};

//Add a new book book4 to the bookshop inventory

bookshop.book4 = {
    name: 'In His Presence',

    describe: function () {
        return 'The title of the books is '+this.name;
    }
};

//Add multiple books to the bookshop

bookshop = {
    ...bookshop,
    book5: {
        name: 'Daily Empowerment',

        describe: function () {
            return 'The title of the book is '+this.name;
        }
    },

    book6: {
        name: 'Ministerial Manual',

        describe: function () {
            return 'The title of the book is '+this.name;
        }
    },

    book7: {
        name: 'Daily Devotion',

        describe: function () {
            return 'The title of the book is '+this.name;
        }
    }
};

//Delete book4

delete bookshop.book4;

//Add the property publisher to book1

bookshop.book1.publisher = 'Nelson';
