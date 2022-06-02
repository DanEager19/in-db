import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Apollo, gql, QueryRef } from 'apollo-angular';

interface Information {
  dev: string;
  pub: string;
  date: string;
  rating: string;
}

interface Requirements {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;

};

export interface GameType {
    _id?:string;
    title:string;
    summary?:string;
    information?:Information;
    requirements?:Requirements;
}

export interface GameInputType {
    title:string;
    summary:string;
    information:Information;
    requirements:Requirements;
}
export const GET_ALL_GAMES = gql`
    query {
        games {
            _id
            title
        }
    }
`;

export const GET_FULL_GAME = gql`
    query findGameByTitle($title: String!) {
        findGameByTitle(title: $title) {
            _id
            title
            summary
            information {
                dev
                pub
                date
                rating
            }
            requirements {
                os
                cpu
                ram
                gpu
                storage
            }
        }
    }
`;

export const CREATE_GAME = gql`
    mutation createGame($input: GameInputType!) {
        createGame(input: $input) {
            title,
            summary
            information {
                dev
                pub
                date
                rating
            }
            requirements {
                os
                cpu
                ram
                gpu
                storage
            }
        }
    }
`
export const UPDATE_GAME = gql`
    mutation updateGame($id: String!, $input: GameInputType!){
        updateGame(id: $id, input: $input) {
            title
            summary
            information {
                dev
                pub
                date
                rating
            }
            requirements {
                os
                cpu
                ram
                gpu
                storage
            }
        }
    }
`;
/*
const DELETE_GAME
*/

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private apollo: Apollo) { }
  createGame(f: any) {
    this.apollo.mutate({
      mutation: CREATE_GAME,
      variables: {
        input: {
          title: f.title,
          summary: f.summary,
          information: {
            dev: f.dev,
            pub: f.pub,
            date: f.date,
            rating: f.rating
          },
          requirements: {
            os: f.os,
            cpu: f.cpu,
            ram: f.ram,
            gpu: f.gpu,
            storage: f.storage
          }
        }
      },
    }).subscribe();
  }

  updateGame(id:string, f: any) {
    this.apollo.mutate({
      mutation: UPDATE_GAME,
      variables: {
        id: id,
        input: {
          title: f.title,
          summary: f.summary,
          information: {
            dev: f.dev,
            pub: f.pub,
            date: f.date,
            rating: f.rating
          },
          requirements: {
            os: f.os,
            cpu: f.cpu,
            ram: f.ram,
            gpu: f.gpu,
            storage: f.storage
          }
        }
      },
    }).subscribe();
  }
 }