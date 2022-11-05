# Presentacion de practica2, Pasteleria nueva
## Definicion previa de la practica:

- El cliente de la pastelería necesita ver los diferentes sabores de pasteles, así como los precios de cada uno.
- El cliente de la pastelería necesita ver los diferentes adornos con los que se puede decorar el pastel y los precios de cada uno.
- El cliente de la pastelería tendrá la posibilidad de combinar sabores dependiendo de sus preferencias.
- El cliente de la pastelería tendrá la posibilidad de combinar adornos dependiendo de sus preferencias.
- El cliente de la pastelería necesita poner en un formulario su pedido.
- El formulario debe de contener los datos de contacto del cliente que son Nombre, Teléfono, Correo Electrónico, Descripción general del pastel y la selección de sabores y adornos.
- El pastelero necesita tener la información de la cantidad de sabores que le quedan para hacer los pasteles.
- El pastelero necesita tener la información de la cantidad de adornos que le quedan para hacer los pasteles.
- El pastelero necesita una tabla donde aparezcan los pedidos que se han realizado con los datos del formulario.
- La página debe tener información de la pastelería que es Dirección, Teléfono y horarios de atención.

# Resultados 
## Cliente
Con las siguientes premisas, supe que lo primero que queria hacer era crear un objeto JSON para consultar la informacion de la pasteleria, dado que queria simular la [base de datos gestora](https://github.com/Memotets/Practicas-LaunchX/blob/main/Practica2-Pasteleria/js/Pasteles.js) de dicha pagina de alguna manera, aunque acabo siendo un objeto js como se ve...
- El cliente de la pastelería necesita ver los diferentes sabores de pasteles, así como los precios de cada uno.
- El cliente de la pastelería necesita ver los diferentes adornos con los que se puede decorar el pastel y los precios de cada uno.

Debido a la estructura del datos no genere un carrucel con todos los sabores, pero hice una presentacion de la especialidad:
![image](https://user-images.githubusercontent.com/40780814/200098787-8d3f9297-1719-4115-abd3-cf7da7aea6a0.png)

No olvidemos esto
- La página debe tener información de la pastelería que es Dirección, Teléfono y horarios de atención.

![image](https://user-images.githubusercontent.com/40780814/200098829-a516e170-7d3c-413f-9c96-e7656a1c0c55.png)

Con todos los detalles del formulario, pasamos a la siguiente pagina:
- El cliente de la pastelería tendrá la posibilidad de combinar sabores dependiendo de sus preferencias.
- El cliente de la pastelería tendrá la posibilidad de combinar adornos dependiendo de sus preferencias.
- El cliente de la pastelería necesita poner en un formulario su pedido.
- El formulario debe de contener los datos de contacto del cliente que son Nombre, Teléfono, Correo Electrónico, Descripción general del pastel y la selección de sabores y adornos.

![image](https://user-images.githubusercontent.com/40780814/200098877-713e3a72-7c00-4421-8d1f-9490ad3a6b68.png)
Una estructura simple para realizar pedidos, donde la estructura es dinamica entrono al pedido
![image](https://user-images.githubusercontent.com/40780814/200099012-70f1e22d-c778-4f36-96ce-74cdc5aa9965.png)
vamos como va cambiando el formulario si queremos añadidos
![image](https://user-images.githubusercontent.com/40780814/200099080-062e311b-1390-4762-b79e-8aa506851dfa.png)
un ejemplo de pedido completo, mire la diferencia de precios entre las 3 imagenes

## Admin / Pastelero
Llendo a los formatos del pastelero o administrador, lo más censato fue realizar tablas para visualizar la información.
- El pastelero necesita tener la información de la cantidad de sabores que le quedan para hacer los pasteles.
- El pastelero necesita tener la información de la cantidad de adornos que le quedan para hacer los pasteles.

![image](https://user-images.githubusercontent.com/40780814/200098930-f60d9ab5-a6a5-4186-9eb8-4c79582d501b.png)
Informacion general de sus ingredientes, en este caso, los mismos que puede elegir el cliente más los que estan con un color warning que son los que estan sin stock.

- El pastelero necesita una tabla donde aparezcan los pedidos que se han realizado con los datos del formulario.

![image](https://user-images.githubusercontent.com/40780814/200098996-fd87f9b6-7411-406a-8fc4-fb6a7c1dbe51.png)
lista de pedidos, en este caso estatica

De momento, es todo por hoy, entre la semana siguiente intenare ponerme a hacer la practica 3/4 Pokedex css y js aunque pueden ver un demo de como podria ser con la funcionalidad de esta practica
Vease [css](https://github.com/Memotets/Practicas-LaunchX/tree/main/Practica2-Pasteleria/css) y [js](https://github.com/Memotets/Practicas-LaunchX/tree/main/Practica2-Pasteleria/js)







 
