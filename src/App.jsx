import React, { Component, useState } from "react"; // trocar o valor de uma variavel e imprimir na tela
import { v4 as uuid } from "uuid"; // uuid gera um id aleatorio

import { Container, TudoList, Input, Button, ListItens } from "./styles.js";

import { IoTrashBin } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

function App() {
    //código javaScript

    const [lista, setLista] = useState([{ id: uuid(), tarefa: "nada", finished: true }]);
    const [inputTask, setInputTask] = useState("");

    const inputMudou = (event) => {
        setInputTask(event.target.value);
    };

    const clique = () => {
        setLista([...lista, { id: uuid(), tarefa: inputTask, finished: false }]);
    };

    function finalizarTarefa(id) {
        const newLista = lista.map((item) => (item.id === id ? { ...item, finished: true } : item));

        setLista(newLista);
    }

    function deletarItem(id) {
        const newLista = lista.filter((item) => item.id !== id);

        setLista(newLista);
    }

    // Retona código HTML
    return (
        // <></> isso é um fragment
        <Container>
            <TudoList>
                <Input className="input-value" onChange={inputMudou} type="text" placeholder="o que eu tenho que fazer" />
                <Button onClick={clique}>Adicionar</Button>

                {lista.map((item) => (
                    <ListItens isFinished={item.finished} key={item.id}>
                        <IoMdCheckmark onClick={() => finalizarTarefa(item.id)} />
                        <li>{item.tarefa}</li>
                        <IoTrashBin onClick={() => deletarItem(item.id)} />
                    </ListItens>
                ))}
            </TudoList>
        </Container>

        //tudo dentro de chaves é um CODIGO JS!
    );
}

export default App;
