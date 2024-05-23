
import { useState } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(a + 1);  // обновление состояния на основе предыдущего состояния
    console.log(a + 1);  
  }

  return (
    <div className="App">
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
    </div>
  );
}

export default App;




//button.tsx
//type ButtonType={
// name: string
//callBack:()=>void
//}


// export const Button = (props:ButtonType)=>{
//   props.callBack()
// }

// return (
//   <button onClick={onClickHandler}>{props.name}</button>
// )
//}


//app.tsx
// function App(){
//   const Button1 = (subscriber:string,age:NamedTupleMember,adress:string)=>{
//console.log(subscriber,age,address)
//   }
//const Button2 = (subscriber:string)=>{
//console.log(subscriber)
// }

// return(
//   <div className={'App'}>

//     <Button name ={'Mybutton1'}callBack={()=>Button1(subscriber'jane',age:21.adres:fit)}
//<Button name ={'Mybutton12}callBack={()=>Button2(subscriber'jane')}/>
//   </div>
// )




// //map
// import React from 'react';

// //  тип для объекта автомобиля
// type Car = {
//   manufacturer: string;
//   model: string;
// }

// //  тип для свойств компонента TopCars
// type TopCarsProps = {
//   cars: Car[];
// }

// // Компонент React для отображения лучших автомобилей
// const TopCars: React.FC<TopCarsProps> = ({ cars }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Производитель</th>
//           <th>Модель</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cars.map((car, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{car.manufacturer}</td>
//             <td>{car.model}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// // Пример использования компонента TopCars
// // function App() {
// //   const topCars = [
// //     { manufacturer: 'BMW', model: 'm5cs' },
// //     { manufacturer: 'Mercedes', model: 'e63s' },
// //     { manufacturer: 'Audi', model: 'rs6' }
// //   ];

// //   return (
// //     <div>
// //       <h1>Лучшие автомобили</h1>
// //       <TopCars cars={topCars} />
// //     </div>
// //   );
// // }

// // export default App;
