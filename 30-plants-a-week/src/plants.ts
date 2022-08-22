export { Plant, plants7Days, plantsAllTime }

class Plant {
    name: string = "";
    dateAdded: string = "";

    constructor(name: string, dateAdded: string) {
        this.name = name;
        this.dateAdded = dateAdded;
    }

}

let plants7Days: object[] = [];

let plantsAllTime: string[] = [];




// plants added in last 7 days
// all plants ever added (string name only?)
