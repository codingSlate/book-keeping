// let records = [
//     {
//       id:1,
//       bookName: 'Math Book',
//       authorName: 'Rohin',
//       description: 'Best Math books for kids',
//     },
//     {
//       id:2,
//       bookName: 'Biology Book',
//       authorName: 'Moria',
//       description: 'Introductory to Biology',
//     },
//     {
//       id:3,
//       bookName: 'Yoga',
//       authorName: 'Kalyan Mojie',
//       description: 'The healing of Body',
//     },
//     {
//       id:4,
//       bookName: 'C++',
//       authorName: 'Crafton Ford',
//       description: 'Best programming practice',
//     },
//   ];

const BookList = ({records}) =>{

    return(
    <ul>
        {records.map(({id, bookName, authorName, description})=>(<li key={id}>
            <span>{id}</span>
            <h3>{bookName}</h3>
            <h4>{authorName}</h4>
            <p>{description}</p>
        </li>))}
    </ul>
    )
}
export default BookList