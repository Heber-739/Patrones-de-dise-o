export interface Data {
    name:     string;
    username: string;
    age:      number;
    skills:   string;
    others?:   object;
}

export class DataProvider {
     getData():Data {
        return {
            name: "osbaldo",
            username: "osb123",
            age: 25,
            skills: "js, ts,java",
            others: {
                agile:"scrum",
                designPatterns: true
            }
        }
    }
}