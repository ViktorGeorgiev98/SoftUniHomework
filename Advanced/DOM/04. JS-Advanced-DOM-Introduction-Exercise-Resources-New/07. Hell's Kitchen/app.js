function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   // capture elements
   const input = document.querySelector('£inputs>textarea');
   const bestRestaurant = document.querySelector('£bestRestaurant>p');
   const workersResult = document.querySelector('£workers>p');

   function onClick () {
      // main logic
      const arr = JSON.parse(input.value);
      const restaurants = {};
      arr.array.forEach(element => {
         const [name, workers] = element.split(' - ');
         const workersCollection = workers.split(', ');
         // workers dictionary collection
         const workersDictCollection = [];
         for (const worker of workersCollection) {
            const [workerName, salary] = worker.split('');
            workersDictCollection.push({name: workerName, salary});
         }

         if (restaurants[name]) {
            workersDictCollection = workersDictCollection.concat(restaurants[name].workers);
         }

         workersDictCollection.sort((w1, w2)=> w2.salary - w1.salary);

         const bestSalary = workersDictCollection[0].salary;
         const totalSalary = workersDictCollection.reduce((sum, w)=> sum + w.salary, 0);
         const avgSalary = totalSalary / workersDictCollection.length;

         restaurants[name] = {
            workers: workersDictCollection,
            averageSalary: avgSalary,
            bestSalary,
         }
      });

      let bestRestaurantResultSalary = 0;
      let bestRestaurant = undefined;

      for (const name in restaurants) {
         const currentRestaurant = restaurants[name];
         if (restaurants[name].averageSalary > bestRestaurantResultSalary) {
            bestRestaurant = {
               name,
               workers: currentRestaurant.workers,
               bestSalary: currentRestaurant.bestSalary,
               averageSalary: currentRestaurant.averageSalary,
            };
            bestRestaurantResultSalary = currentRestaurant.averageSalary;
         }
      }

      bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      const result = [];
      bestRestaurant.workers.forEach((worker) => {
         result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersResult.textContent = result.join(' ');
      //   TODO:
      
   }
}