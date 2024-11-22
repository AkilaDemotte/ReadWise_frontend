// import React from "react";

// const Home = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear token
//     window.location.href = "/login"; // Redirect to login
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           <h1 className="text-2xl font-bold">RecruitEase</h1>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto mt-10 px-4 flex-grow">
//         {/* Welcome Section */}
//         <div className="bg-white p-6 rounded shadow-md text-center mb-10">
//           <h1 className="text-3xl font-bold mb-4">Welcome to the Home</h1>
//           <p className="text-gray-700">You are now logged in. Enjoy your stay!</p>
//         </div>

//         {/* User Management Section */}
//         <div className="bg-white p-6 rounded shadow-md mb-10">
//           <h2 className="text-2xl font-bold mb-4 text-blue-600">User Management</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
//               Add User
//             </button>
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
//               Update User
//             </button>
//             <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
//               Delete User
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
//               View Users
//             </button>
//           </div>
//         </div>

//         {/* Resource Management Section */}
//         <div className="bg-white p-6 rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-4 text-blue-600">Resource Management</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
//               Add Resource
//             </button>
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
//               Update Resource
//             </button>
//             <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
//               Delete Resource
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
//               View Resources
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white py-4 mt-10">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} RecruitEase. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import Book from '../components/Book';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const books =[ {
    author : 'by Rebecca Yarros',
    title : 'Onyx Storm',
    img : 'images/book-1.jpg',
    id : 1
},
{
    img : 'images/book-2.jpg',
    title : "The Housemaid's Wedding",
    author : 'by Freida McFadden',
    id : 2
},
{
    img : 'images/book-3.jpg',
    title : 'Real Anthony Fauci',
    author : 'by Robert F. Kennedy Jr.',
    id : 3
},
{
    img : 'images/book-4.jpg',
    title : 'We Who Wrestle with God',
    author : 'by Jordan B. Peterson',
    id : 4
},
{
    img : 'images/book-5.jpg',
    title : 'Cher: The Memoir',
    author : 'by Cher',
    id : 5
},
{
    img : 'images/book-6.jpg',
    title : 'Dog Man',
    author : 'by Dav Pilkey',
    id : 6
},
{
    img : 'images/book-7.jpg',
    title : 'Good Energy',
    author : 'by  Casey Means MD',
    id : 7
},
{
    img : 'images/book-8.jpg',
    title : 'Melania',
    author : 'by Nikole Hannah-Jones',


}
]

const Home = () => {
    const getBook = (id) => {
        const book = books.find((book) => id == book.id);
        console.log(book);
    };

    return (
        <>
        <Header/>
            {/* <h1 className="text-4xl font-semibold text-center mt-16 mb-8 text-gray-800">Amazon Best Sellers</h1> */}

            <div className = " mt-4 mb-4">
            <section className=" grid grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto">
                {books.map((book) => (
                    <Book key={book.id} {...book} getBook={getBook} />
                ))}
            </section>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
