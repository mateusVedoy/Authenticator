import express from "express";

export class App {

    public server;

    public constructor(){
        this.server = express();
        this.server.use(express.json());
    }

    public route(route){
        this.server.use(route);
    }

}