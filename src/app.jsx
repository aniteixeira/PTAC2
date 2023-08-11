import './app.css'
import {Exemplo} from './exemplo.jsx'
export default function app() {
const listaAlunos = [
    {nome: "Anielly", idade: 16, cidade: "Nova Andradina"},
    {nome: "Meneke", idade: 15, cidade: "Nova Andradina"},
    {nome: "Mafer", idade: 16, cidade: "Nova Andradina"}
];
    return (
        <div>
            <h1> Hello World!</h1>
            <Exemplo lista =  {listaAlunos}/>
        </div>
    );
}