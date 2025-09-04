  // forEach(function defination or name) to run a function for every element of array/Objects
  let arr =[10 , 20 ,30 , 80 ,60];
  function print(el){
    console.log(el);
  }
  arr.forEach(print );

  //arr.map(some function defination or name)
  let num =[1,2,3,4,5,6];
  let double =num.map(el =>{
     return 2*el;
  });
  console.log(double);

  //arr.filter(some function defination or name) // filter element based on callback true or false
  let nums =[1,2 ,3,4,5,6,7,8,9,10];
  let ans = nums.filter(el => {
    return el%2==0;
  });
  console.log(ans)

  //arr.every(some function defination or name) check condition for all element , return true if all elements give true and false if any element gives false same as logical and 
  let any = nums.every(el =>{
    el%2==0;
  });
  console.log(any);

  //arr.some same as every but act as logical OR

  //arr.reduce(some function defination or name with two arg (result , element) )
  // reduce the array in a single value
  // let res =1;
  console.log(nums.reduce((res ,el)=> res*el));

  console.log(nums.reduce((res ,el)=> {
    if(el>res){
      return el;
    }
    else{
      return res;
    }
  }));
  console.log(arr.every((el) => el%10==0));
  console.log(nums.reduce((res ,el)=> {
    if(el<res){
      return el;
    }
    else{
      return res;
    }
  }));

  //Default parameter 
  function sum(a ,b=2){
    return a+b;
  }
  console.log(sum(10));

  //Spread using 3 dots ...
  console.log(Math.min(...arr)); // every element as a individual
  console.log(..."AmanSingh");
  let aman =[...arr];
  console.log(...aman);
  let singh =[...arr ,...nums];
  console.log(singh);

  //Spread with objects
  const data ={
    email: "amana",
    id : "12edb",
  };
  
  const dataCopy ={
    ...data ,
    idd : "784ehy"
  };
  console.log(dataCopy);

  // spreading a array in a object it will add index as key and value is element

  //# Rest syntax same as spread 3 dots we can use this to take a n no of argument

  //Destructuring
  let names =["Aman Singh","Singh zerodha" ,"satyam"];
   let [winner ,ruuner , ...other]= names;
   console.log(winner , ruuner,other);
  
  // let {email ,id} =data ;
  let {email: city ,id: iddd} = data;
  console.log(iddd ,city);