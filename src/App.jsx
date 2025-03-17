import React, {useState} from 'react';
import Greetings from './greetings';
import Border from './Border';
import Welcome from './Welcome';
// // const Extra=()=>
// // {v>
//       <h2>Hello, {name}!</h2>const [count, setCount] = useState(0);
//     </div>
//   );   <div>
// };             <h1>Practice</h1>
// / //             <p>Count: {count}</p>
// export default Greetings;ns count={count} setCount={setCount}></Buttons>
// //         </div>
// //     )
// // }

// // // const Buttons=(props)=>{// here using props using as an object , we can destructure the props 
// // const Buttons=({count,setCount})=>{ // we destructure the props
// //   function increment(){
// //     setCount((c)=>c+1);
// //   }
// //   function decrement(){
// //     setCount((c)=>c-1);
// //   }
// //   return(
// //     <>
// //     <button onClick={count>-10&&decrement}>-</button>
// //     <button onClick={count<10&&increment}>+</button>
// //     </>
// //   )
// // }

// function App() {
//   // const arr=["Aryan","kumar","mury"]
//   return (
//     <>

//     <Greetings fn={maps}></Greetings>
//     {/* <Extra></Extra> */}

//     {/* {arr.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))} */}

//       {/* <Greetings name="Aryan"/>
//       <Greetings name="Nitish" age={18}/>
//       <Greetings name="Arpit"/>
//       <Greetings name="Simon"/> */}
//     </>
//   )
// }



// const App=()=>{
//   return(
//     <div>
//     <Greetings fn={maps}></Greetings>
//     </div>
//   )
// }
// function maps(arr){
//   return arr.map((item,index)=>(
//     <Border>

//     <div key={index}>Hi there {item}</div>
//     </Border>
//   ))  
// }

// const arr=["Aryan","Simon","Adi"];
const App = () => {
  return (
    // <div>
    //   {arr.map((item, index) => (
    //     <Border key={index}>
    //       <Greetings name={item} />
    //     </Border>
    //   ))}
    // </div>
    <Welcome/>
  )
}


export default App;