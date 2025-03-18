import { useState} from "react";
import Input from "./Input";
import Button from "./Button";

export default function Calculadora() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const multiplicacion = () => {
        setResult(Number(num1) * Number(num2));
    };

    return( <>   <Input
    type="number"
    placeholder="Número 1"
    value={num1}
    onChange={(e) => setNum1(e.target.value)}/>

    <Input
    type="number"
    placeholder="Número 2"
    value={num2}
    onChange={(e) => setNum2(e.target.value)}/>

    <Button onClick={multiplicacion}>Multiplicar</Button>
    <p>Resultado: {result}</p>
    </>
    );
}