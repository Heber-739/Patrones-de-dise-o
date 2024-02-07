import { DataProvider } from "./dataProvider.class"
import { GetNewMethodData } from "./newMethod.class";

(()=>{


    const getDataToShow = (data:DataProvider)=>{
        console.log(data.getData())
    }


    let getData = new DataProvider();
    getDataToShow(getData);


    let newData = new GetNewMethodData();
    getDataToShow(newData);
})()