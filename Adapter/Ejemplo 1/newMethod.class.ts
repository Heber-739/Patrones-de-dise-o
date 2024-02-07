import { Data, DataProvider } from "./dataProvider.class";

interface NewData extends Data {
    [key: string]: any;
}

export class GetNewMethodData extends DataProvider {
 
    getData():Data{
        let oldData = super.getData();
        return this.flatObject(oldData);
    }

    private flatObject(obj: Data): NewData {
        let flatObject:Partial<NewData> = {};

        for (const [key,value] of Object.entries(obj)) {
            if (value && typeof value === 'object') {
                Object.assign(flatObject, this.flatObject(value))
            } else {
                flatObject[key] = value;
            }
        }
        return flatObject as NewData;
    }

}

