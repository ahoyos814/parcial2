export class Pinguino {
    name: string;
    scientific_name: string;
    feeding: string;
    global_distribution: string;
    description: string;
    image: string

    constructor(
        name: string,
        scientific_name: string,
        feeding: string,
        global_distribution: string,
        description: string,
        image: string
    ){
        this.name = name;
        this.scientific_name = scientific_name;
        this.feeding = feeding;
        this.global_distribution = global_distribution;
        this.description = description;
        this.image = image;
    }
}
