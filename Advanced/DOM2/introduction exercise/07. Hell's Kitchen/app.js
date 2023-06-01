function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      // create restaurant
      // function createWorker(name) {
      //    let worker = {
      //       name: name,
      //       workersAndSalary: {},

      //    }

      //    return worker;
      // }
      // get elements
      const input = document.getElementById('inputs').value;
      const inputArray = Array.from(input);
      const bestRestaurant = document.getElementById('bestRestaurant');
      const bestWorkers = document.getElementById('workers');
      // let restaurantsAndWorkersMap = new Map();
      let finalBestRestaurant = '';
      let finalBestSalary = 0;
      let finalAverageSalary = 0;
      
      

      // main logic
      for (let restaur of inputArray) {
         let [restaurantName, workers] = restaur.split(' - ');
         let workerNameAndsalary = workers.split(', ');
         let [workerName, salary] = workerNameAndsalary.split(' ');
         console.log(restaurantName);
         console.log(workers);
         console.log(workerNameAndsalary);
         console.log(workerName);
         console.log(salary);
         let currentBestRestaurant = '';
         let currentBestSalary = 0;
         let currentAverageSalary = 0;
      }

      //   TODO:
      
   }
}

// input ["PizzaHut - Peter
// 500, George 300, Mark
// 800",
// "TheLake - Bob 1300,
// Joe 780, Jane 660"]