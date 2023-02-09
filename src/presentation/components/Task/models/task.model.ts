// export interface iTask {
//     id: string;
//     title: string,
//     description: string,
//     completed: boolean,
// }

export class iTask {
    id: string;
    title: string;
    description: string;
    completed: boolean;

    constructor(id: string, title: string, description: string, completed = false){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    static empty(){
        return new iTask('', '', '');
    }


    static isEmpty(object: iTask):boolean{
        return (object.id != '') && (object.title != '') && (object.description != '');
    }
}