// 1. Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data


const biodata = {
    name: "Basri Ibrahim",
    age: 23,
    hobbies: ["Gaming", "Hiking", "Build Computer", "Playing Guitar"],
    isMarried: false,
    schoolList : [
        {
            schoolName : 'SD.Purnama',
            yearIn : 2006,
            yearOut : 2012,
            Majority : null ,
        } ,
        {
            schoolName : 'SMP Negeri 2 Cimahi',
            yearIn : 2012,
            yearOut : 2015,
            Majority : null ,
        },
        {
            schoolName : 'SMA Pasundan 3 Cimahi',
            yearIn : 2015,
            yearOut : 2018,
            Majority : 'IPS' ,
        },
    ],
    skills:[
        {
            skillName : 'English Language',
            level : 'Advanced'
        },
        {
            skillName : 'Japanese Language',
            level : 'Advanced'
        },
        {
            skillName : 'Programming Language',
            level : 'Beginner'
        },

    ],
    interestInCoding  : true
}

// console.log(biodata)


/* 2. Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4
nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam
program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga
untuk grade memiliki kondisi dengan ketentuan sebagai berikut: */


function calculateAverage(indonesian, english, math, science) {
    return (indonesian + english + math + science) / 4;
  }
  
  function getGrade(average) {
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "E";
    }
  }
  
  function getValue(indonesian, english, math, science) {
    if (indonesian === undefined || english === undefined || math === undefined || science === undefined){
      console.log("nilai harus diisi.")
    } else {
      let average = calculateAverage(indonesian, english, math, science);
      let grade = getGrade(average);


    if(isNaN(indonesian) || isNaN(english) || isNaN(math) || isNaN(science)){
      // console.log(`value yang kamu masukan bukan angka. silakan coba lagi`)
    } else {
      // console.log("Rata-rata: " + average);
      // console.log("Grade: " + grade);
    }
  }
  }
  
  getValue(50,60,70,60);
  

// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

function printSegitiga(value) {
    
    for(let i = value; i > 0; i--){
        let string = ''
        for(let j = 1; j <= i; j++) {
            string += j + ' '
        }
        console.log(string)
    }
}

// printSegitiga(5)


      


/*
a. Ubahlah data tersebut menggunakan spread operator menjadi:
name: nama anda
email: email anda
hobby: hobi anda
b. Ambilah data “street dan city” tersebut menggunakan destructuring

*/

let data = {
    id: 1,
    name:"Leanne Graham",
    username:"Bret",
    email:"Sincere@april.biz",
    address:
    {
    street:"Kulas Light",
    suite:"Apt. 556",
    city:"Gwenborough",
    zipcode:"92998-3874",
    },
    phone:"1-770-736-8031 x56442",
    website:"hildegard.org",
}


const newData = { 
    ...data, 
    name: "Basri Ibrahim", 
    email: "basriibrahim67067@gmail.com", 
    hobby: "Gaming, Hiking, Build Computer, Playing Guitar" 
  };


  // console.log(newData)
const { street, city } = data.address;
