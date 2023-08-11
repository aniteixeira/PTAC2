import { Dev } from './dev';
export function Exemplo({lista}){
    return (
        <div>
            {lista.map((aluno,index)=>(
                <ul key={index}>
                    <li>
                        {aluno.nome}, {aluno.idade} anos, Mora em {aluno.cidade}.</li>
                </ul>
            ))}
            <Dev nome =" Anielly"/>
        </div>
    );
}