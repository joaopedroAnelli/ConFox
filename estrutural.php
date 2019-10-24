<?php

require_once('')

$calculadora = new Calculadora();


$calculadora->soma(1, 3);


Calculadora::multiplica(2, 3);


class Calculadora {
    private $resultado;


    public function __construct() {
    }


    public function soma($arrayDeNumeros)
    {
        $this->resultado = $num1 + $num2
    }


    public static function multiplica($num1, $num2):int
    {
        return $num1 * $num2;
    }
}
