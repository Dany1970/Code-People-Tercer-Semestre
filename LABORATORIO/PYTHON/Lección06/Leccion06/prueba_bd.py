import psycopg2 #esto para conectarnos a Postgres

conexion = psycopg2.connect(
    user= 'postgres',
    password= 'admin',
    host= '127.0.0.1',
    port= '5432',
    database= 'test_bd'
)

cursor= conexion.cursor()
sentencia= 'SELECT * FROM persona'
cursor.execute(sentencia)
registros= cursor.fetchall() #recupera todos los registros que seran una lista

print(registros)

cursor.close()


conexion.close()
