//Fin de la clase Producto //clase10 parte 3
Let producto1 =new Producto ("Pantalon",200);
Let producto2= new Producto("Camisa",150)
console.log(producto.toStrin()); idProducto:1 ,nombre: Pantalón,precio $200
console.log(producto2.toString()): idProducto:2, nombre: Camisa, precio: $150


// clase 10 parte 4

class Orden{
    static contadorOrden = 0;
    static getMAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._producto =[];
        this._contadorProductoAgregados = 0;
    
    }
    get idOrden(){
        return this._idOrden;
    }
    agregatProducto(prodcuto){
        if (this._productos.leght < Orden.getMAX_PRODUCTOS){
            this._productos.push(producto);//Tenemos 2 tipos de sintaxis: 1
           // this._productos[this._contadorProductoAgregados++] = producto;
            else {
                console.log("Nose pueden agregar mas productos");

            }
        }
        //Fin del metoo agregar producto

    }



}//Fin de la clase orden

