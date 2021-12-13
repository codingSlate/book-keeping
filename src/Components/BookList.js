// let records = [
//     {
//       id:1,
//       recordName: 'Math Book',
//       writerName: 'Rohin',
//       description: 'Best Math books for kids',
//     },
//     {
//       id:2,
//       recordName: 'Biology Book',
//       writerName: 'Moria',
//       description: 'Introductory to Biology',
//     },
//     {
//       id:3,
//       recordName: 'Yoga',
//       writerName: 'Kalyan Mojie',
//       description: 'The healing of Body',
//     },
//     {
//       id:4,
//       recordName: 'C++',
//       writerName: 'Crafton Ford',
//       description: 'Best programming practice',
//     },
//   ];

const BookList = ({records}) =>{

    return(
    <ul>
        {records.map(({id, recordName, writerName, description})=>(<li key={id}>
            <span>{id}</span>
            <h3>{recordName}</h3>
            <h4>{writerName}</h4>
            <p>{description}</p>
        </li>))}
    </ul>
    )
}
export default BookList