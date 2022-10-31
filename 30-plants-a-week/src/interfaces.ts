
// Plan for interfaces that I will need...

interface IPlant {
    name: string;
    lastDateLogged: Date;
    numberOfTimesLogged: number;

    new(name: string): IPlant;
}

interface IDay {
    date: Date;
    plants: IPlant[];

    addPlant(plant: IPlant): void;
}

interface IPlants {
    plants: IPlant[];

    addPlant(plant: IPlant): void;
}

interface IDays {
    days: IDay[];

    addDay(day: IDay): void;
}

// Write pseudo-code to test all this to make sure it makes sense! 