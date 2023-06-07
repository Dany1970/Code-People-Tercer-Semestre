#Transacciones
import psycopg2 as bd #Conectar a Postgre

conexion = bd.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    #conexion.autocommit = False # para que no se guarde de forma automatica
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparzamail.com')
    cursor.execute(sentencia, valores)
    conexion.commit() #hacemos el commit manualmente
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()