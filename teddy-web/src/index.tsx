
import  "whatwg-fetch";//폴리필이 fetch 의 헤더를 지원안해줘서 fetch만 따로 폴리필 로드함 ie만
import "@babel/polyfill";

import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';

import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

//mysql이 cafe24가 지원함 nodejs 웹호스팅중 유일하게
//가비아는 nodejs 웹호스팅이 안보입니다.

class Network_Model {
    Main_Data: any;
    Doll_Data: any;
    
    Render_Start(New_Arr: Array<Array<string>>) {

        render(
            <React.StrictMode>
                <App
                    src={this.Main_Data["src"]}
                    sub_src=""
                    info_src={New_Arr}
                    Doll={this.Doll_Data}
                    intro={this.Main_Data["intro"]}

                />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
    async Get_Operation_from_Server() {//초기 네트워크 값다 가져오기 async await로 동기적으로 실행
        const headers = new Headers({
            'Content-Type': 'text/xml',
        });
        
        let _promise = await window.fetch("http://localhost:1337/operation", { headers });//폴리필이 fetch 의 헤더를 정식 지원안해줘서 fetch만 따로 폴리필 로드함 ie만
        return _promise.json();
    }
    async Get_Doll_from_Server() {//인형 가져오기
        const headers = new Headers({
            'Content-Type': 'text/xml',
        });

        let _promise = await window.fetch("http://localhost:1337/Get_Doll", { headers });//폴리필이 fetch 의 헤더를 정식 지원안해줘서 fetch만 따로 폴리필 로드함 ie만
        return _promise.json();
    }
    async Get_NetWork_Start() {
        await this.Get_Operation_from_Server().then(
            (r) => this.Main_Data = r
        );
        let New_Arr: Array<Array<string>> = new Array<Array<string>>();
        for (let i = 0; i < 5; ++i) {
            New_Arr.push([this.Main_Data["intro_src_" + i], this.Main_Data["intro_sub_" + i] ]);
        }
        console.log(this.Main_Data)

        await this.Get_Doll_from_Server().then(
            (r) => this.Doll_Data = r
        );
        console.log(this.Doll_Data)
        this.Render_Start(New_Arr);
        console.log("Start");
    }
    constructor() {
       
        this.Get_NetWork_Start();
        //console.log("Start");
        //node js에서 만든 서버에서 cors정책의 Access-Control-Allow-Origin를 설정하여 cors 에러 방지
       
       
    }
}
let _Network_Model = new Network_Model();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
