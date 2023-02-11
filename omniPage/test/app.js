myArray = [
    {
        name: "Tao",
        price: 10,
        color:null,
    },

    {
        name: "Cam",
        price: 15,
        color:null,
    },

    {
        name: "Chuoi",
        price: 5,
        color:null,
    },
];

Dong_lanh = localStorage.getItem("value")
Ra_Dong = JSON.parse(Dong_lanh)
total = Ra_Dong;

function additem(name_item){
    myArray.forEach((item) => {
        if (item.name == name_item){
            total = total + item.price;
        }
    });

    console.log(total);
    Dong_lanh = JSON.stringify(total)
    localStorage.setItem("value",Dong_lanh)
}




