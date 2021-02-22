//const { propfind } = require("../../app");


angular.module('super_venta',[])
    .controller('ventas',function($scope){
        $scope.carrito=[];
        $scope.ejemplo="este dato desde codigo"
        $scope.total=0;
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
        
          hotkeys('f2,f4,f5', function (event, handler){
            switch (handler.key) {
              case 'f2': //$scope.producto.focus();
                        //angular.element($document[0].querySelector('#prod')).trigger('focus');
                        document.getElementById('prod').focus();
                        //
                break;
              case 'f3': alert('you pressed f3');
                break;
              case 'f4': $scope.agregar();
                        $scope.$apply();
                break;
              case 'f5': alert('you pressed f5');
                break;
              default: alert(event);
            }
          });
        function sumarProductos(){
            $scope.total=0;
            for(i=0;i<$scope.carrito.length;i++){
                $scope.total+=$scope.carrito[i].cant*$scope.carrito[i].precio;
            }
        }
        $scope.agregar=function(){
           

            if($scope.cant<=$scope.producto.cant){
                let pro=$scope.carrito.find(elemt=>elemt.producto.codigo==$scope.producto.codigo);
                
                if(pro!==undefined ){
                    
                    pro.cant+=$scope.cant;
                }else{
                    $scope.carrito.push({
                        producto:$scope.producto,
                        precio:$scope.producto.precio,
                        cant:$scope.cant
                    });
                }
                $scope.detalle_lista=JSON.stringify($scope.carrito);
                console.log(pro);
                let actualizarProducto=$scope.listaproducto.find(elemt=>elemt.codigo==$scope.producto.codigo);
                actualizarProducto.cant-=$scope.cant;
                $scope.producto.cant=actualizarProducto.cant;
                sumarProductos();
            }else
            Toast.fire({
                icon: 'warning',
                title: 'La cantidad sobre pasa el existente'
              })
        }
        var productoBorrar;
        $scope.confirmar=function(item){
            productoBorrar=item;
            Toast.fire({
                icon: 'warning',
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
              })
        }
        $scope.confirmadoBorrar=function(){
            let actualizarProducto=$scope.listaproducto.find(elemt=>elemt.codigo==productoBorrar.producto.codigo);
            actualizarProducto.cant+=productoBorrar.cant;
            $scope.producto.cant=actualizarProducto.cant;
            $scope.carrito.splice($scope.carrito.indexOf(productoBorrar),1);

            sumarProductos();
        }
        
    })